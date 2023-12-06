async function getWeatherData() {
    const apiKey = '15afb914adc211c491651741ae88beb9';
    const city = 'Cozumel';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Display current weather information
        document.getElementById('temperature').innerText = data.main.temp;
        document.getElementById('condition').innerText = data.weather[0].description;
        document.getElementById('humidity').innerText = data.main.humidity;

        // Set weather image based on the weather condition
        const weatherImage = document.getElementById('weather-image');
        weatherImage.src = getWeatherImage(data.weather[0].icon);

        // Check for weather alerts (hypothetical API call)
        const alertData = await getWeatherAlerts(city);

        if (alertData) {
            document.getElementById('weather-alert').style.display = 'block';
            document.getElementById('alert-message').innerText = alertData.message;
        }

        // Fetch and display one day forecast
        const forecastData = await getOneDayForecast(city);
        if (forecastData) {
            document.getElementById('forecast-temperature').innerText = forecastData.main.temp;
            document.getElementById('forecast-condition').innerText = forecastData.weather[0].description;

            // Set forecast image based on the weather condition
            const forecastImage = document.getElementById('forecast-image');
            forecastImage.src = getWeatherImage(forecastData.weather[0].icon);
        }

    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Hypothetical function to get weather alerts
async function getWeatherAlerts(city) {
    const alertApiUrl = `https://api.example.com/weather-alerts?city=${city}`;

    try {
        const response = await fetch(alertApiUrl);
        const data = await response.json();
        return data.alert; // Assuming the API returns an 'alert' field
    } catch (error) {
        console.error('Error fetching weather alerts:', error);
        return null;
    }
}

// Hypothetical function to get one day forecast
async function getOneDayForecast(city) {
    const apiKey = '15afb914adc211c491651741ae88beb9';
    const forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    try {
        const response = await fetch(forecastApiUrl);
        const data = await response.json();

        // Assuming the API returns a list of forecasts and we want the next day's forecast
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);

        const nextDayForecast = data.list.find(forecast => {
            const forecastDate = new Date(forecast.dt_txt);
            return forecastDate.getDate() === tomorrow.getDate();
        });

        return nextDayForecast;

    } catch (error) {
        console.error('Error fetching forecast data:', error);
        return null;
    }
}

// Function to close the alert
function closeAlert() {
    document.getElementById('weather-alert').style.display = 'none';
}

// Function to get weather image based on the OpenWeatherMap icon code
function getWeatherImage(iconCode) {
    return `https://openweathermap.org/img/w/${iconCode}.png`;
}

// Call the function to get weather data when the page loads
getWeatherData();