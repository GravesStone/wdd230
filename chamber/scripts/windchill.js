async function getWeatherData() {
    const apiKey = '15afb914adc211c491651741ae88beb9'; // Replace with your OpenWeatherMap API key
    const city = 'Quezon City'; // Replace with the desired city name
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(weatherUrl);
        const data = await response.json();
        const temperature = data.main.temp;
        const windSpeed = data.wind.speed;
        const humidity = data.main.humidity;
        const iconCode = data.weather[0].icon;

        const windChillIndex = 5.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);

        document.getElementById('description').innerText = `Status: ${data.weather[0].description}`;
        document.getElementById('city').textContent = city;
        document.getElementById('temperature').textContent = `${temperature} °C`;
        document.getElementById('windChill').textContent = `Chill: ${windChillIndex.toFixed(2)} °C`;
        document.getElementById('humidity').textContent = `Report: ${humidity}%`;

        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
        document.getElementById('weather-icon').src = iconUrl;
    } catch (error) {
        console.error('Error fetching weather data: ', error);
        document.getElementById('city').textContent = 'City: N/A';
        document.getElementById('temperature').textContent = 'Temperature: N/A';
        document.getElementById('windChill').textContent = 'Wind Chill: N/A';
        document.getElementById('humidity').textContent = 'Humidity: N/A';
        document.getElementById('weather-icon').src = ''; // Clear the icon
    }
}

async function getWeatherForecast() {
    const apiKey = '15afb914adc211c491651741ae88beb9'; // Replace with your OpenWeatherMap API key
    const city = 'Quezon City'; // Replace with the desired city name
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(forecastUrl);
        const data = await response.json();

        const forecastList = data.list;

        const day1 = forecastList[0];
        const day2 = forecastList[8];
        const day3 = forecastList[16];

        document.getElementById('day1').textContent = `Tomorrow: ${day1.main.temp} °C`;
        document.getElementById('day2').textContent = `Next Day: ${day2.main.temp} °C`;
        document.getElementById('day3').textContent = `Other Day: ${day3.main.temp} °C`;

    } catch (error) {
        console.error('Error fetching weather forecast: ', error);
    }
}

// Call the functions to fetch weather data and forecast when the page loads
getWeatherData();
getWeatherForecast();