async function fetchWeatherData() {
    const apiKey = '15afb914adc211c491651741ae88beb9'; // Replace with your OpenWeatherMap API key
    const city = 'Quezon City'; // Replace with the desired city name
    const countryCode = 'PH'; // Add the country code if needed
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    async function updateWeather() {
        try {
            const response = await fetch(weatherUrl);
            const data = await response.json();

            document.getElementById('temperature').innerText = `Temperature: ${data.main.temp} °C`;
            document.getElementById('description').innerText = `Condition: ${data.weather[0].description}`;
            document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        } catch (error) {
            console.error('Error fetching weather data:', error);
            // You might want to display an error message on your webpage
        }
    }

    window.addEventListener('load', updateWeather);
}

fetchWeatherData();
