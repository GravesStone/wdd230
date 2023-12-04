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

        // Fetch and display one day forecast if needed
        // You can use a similar approach as above

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