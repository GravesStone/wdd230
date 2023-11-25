// Define constants for API key and city outside the functions
const apiKey = '15afb914adc211c491651741ae88beb9'; // Replace with your OpenWeatherMap API key
const city = 'Quezon City'; // Replace with the desired city name

// Function to get current weather data
export async function getWeatherData() {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(weatherUrl);
        const data = await response.json();

        const temperature = data.main.temp;
        const windSpeed = data.wind.speed;
        const humidity = data.main.humidity;
        const iconCode = data.weather[0].icon;

        const windChillIndex = 5.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);

        // Use const for element references
        const descriptionElement = document.getElementById('description');
        const cityElement = document.getElementById('city');
        const temperatureElement = document.getElementById('temperature');
        const windChillElement = document.getElementById('windChill');
        const humidityElement = document.getElementById('humidity');
        const weatherIconElement = document.getElementById('weather-icon');

        descriptionElement.innerText = `Status: ${data.weather[0].description}`;
        cityElement.textContent = city;
        temperatureElement.textContent = `${temperature} °C`;
        windChillElement.textContent = `Chill: ${windChillIndex.toFixed(2)} °C`;
        humidityElement.textContent = `Report: ${humidity}%`;

        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
        weatherIconElement.src = iconUrl;
    } catch (error) {
        console.error('Error fetching weather data: ', error);
        // Set N/A for all elements in case of an error
        document.getElementById('city').textContent = 'City: N/A';
        document.getElementById('temperature').textContent = 'Temperature: N/A';
        document.getElementById('windChill').textContent = 'Wind Chill: N/A';
        document.getElementById('humidity').textContent = 'Humidity: N/A';
        document.getElementById('weather-icon').src = ''; // Clear the icon
    }
}

// Function to get weather forecast
export async function getWeatherForecast() {
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(forecastUrl);
        const data = await response.json();

        const forecastList = data.list;

        const day1 = forecastList[0];
        const day2 = forecastList[8];
        const day3 = forecastList[16];

        // Use const for element references
        const day1Element = document.getElementById('day1');
        const day2Element = document.getElementById('day2');
        const day3Element = document.getElementById('day3');

        day1Element.textContent = `Tomorrow: ${day1.main.temp} °C`;
        day2Element.textContent = `Next Day: ${day2.main.temp} °C`;
        day3Element.textContent = `Other Day: ${day3.main.temp} °C`;
    } catch (error) {
        console.error('Error fetching weather forecast: ', error);
    }
}

// Call functions after defining them
getWeatherData();
getWeatherForecast();
