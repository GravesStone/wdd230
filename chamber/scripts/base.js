// mainModule.js

export async function getWeatherData() {
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

export async function getWeatherForecast() {
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

export function toggleMenu() {
    const btn = document.getElementById("hamburger-btn");
    const primaryNav = document.getElementById("primary-nav");

    primaryNav.classList.toggle("open");
    btn.classList.toggle("open");
}

export function setCopyrightYear() {
    const dateobj = new Date();
    const year = dateobj.getFullYear();
    document.getElementById("copyright").innerHTML = "&copy;" + year;
}

export function displayLastUpdate() {
    const update = "Last update: ";
    const lastModified = new Date(document.lastModified);
    document.getElementById("lastModified").innerHTML = update + lastModified;
}

document.getElementById("hamburger-btn").addEventListener("click", toggleMenu);

document.addEventListener('DOMContentLoaded', function () {
    const modeButton = document.querySelector('#mode');
    const main = document.querySelector('main');
    const paragraphs = main.querySelectorAll('p,h1,h3,h4');

    modeButton.addEventListener('click', () => {
        if (modeButton.textContent.includes('🕶️')) {
            main.style.background = '#000';
            main.style.color = '#fff';
            modeButton.textContent = '🔆';
            paragraphs.forEach(paragraph => {
                paragraph.style.color = 'white';
            });
        } else {
            main.style.background = '#eee';
            main.style.color = '#000';
            modeButton.textContent = '🕶️';
            paragraphs.forEach(paragraph => {
                paragraph.style.color = 'black';
            });
        }
    });

    var linkButton = document.getElementById('linkbtn');

    // Add a click event listener to the button
    linkButton.addEventListener('click', function () {
        // Specify the link URL you want to navigate to
        var linkUrl = 'https://gravesstone.github.io/wdd230/chamber/join.html';

        // Navigate to the link URL
        window.location.href = linkUrl;
    });

    // Set the current year
    const realdate = new Date();
    document.querySelector("#year").innerHTML = realdate.getFullYear();
});

document.addEventListener('DOMContentLoaded', function () {
    var today = new Date();
    var dayOfWeek = today.getDay(); // 0 for Sunday, 1 for Monday, etc.

    // Show the banner only on Mondays, Tuesdays, and Wednesdays
    if (dayOfWeek >= 1 && dayOfWeek <= 3) {
        document.getElementById('invitation').style.display = 'block';
    }

    // Function to close the banner
    window.closeBanner = function () {
        document.getElementById('invitation').style.display = 'none';
    };
});

// Call functions
getWeatherData();
getWeatherForecast(); // Make sure to replace this with your actual getWeatherForecast code
toggleMenu();
setCopyrightYear();
displayLastUpdate();
