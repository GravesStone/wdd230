let windChill = document.getElementById("wind-chill")



// select HTML elements in the document

const url = "https://api.openweathermap.org/data/2.5/weather?id=1692193&appid=15afb914adc211c491651741ae88beb9";

async function weaterMain() {
    try {
        //Fetch the Data from the API 
        const response = await fetch(url);
        if (response.ok) {
           
            // Make the data in json form
            const data = await response.json();
            
            // Get the wind speed and temperature of the current place
            const windSpeed = data.wind.speed
            const temp = data.main.temp.toFixed(0)

            // Displaying the Weather information
            displayResults(data, temp, windSpeed);
            
            // Calls the tempConversor Function, Calculates the Wind Chill and Display
            windChill.innerHTML += tempConversor(temp, windSpeed)
        
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

weaterMain();

function displayResults(weatherData, temp, wind) {

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description.toUpperCase();
    const humidity = weatherData.main.humidity
    
    
    
    
    // Displaying the Weather information
    document.getElementById("weather-descrip").textContent = desc
    document.getElementById("weather-img").src = iconsrc
    document.getElementById("weather-img").alt = desc
    document.getElementById("humidity").innerHTML = `${humidity}%`
    document.getElementById("my-temp").innerHTML = temp
    document.getElementById("my-wind").innerHTML = wind
}   


const tempConversor = (temp, windSpeed) => {
    if (temp <= 50 && windSpeed > 3.0) {
        let temperature = (35.74 +  0.6215 * temp - 35.75 * windSpeed ** 0.16 + 0.4275 * temp * windSpeed ** 0.16).toFixed(2)
        return `${temperature}Fº`
        } else {
        return `N/A`
    }
}

