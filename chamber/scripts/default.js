// mainModule.js



export function setCopyrightYear() {
    const dateobj = new Date();
    const year = dateobj.getFullYear();
    document.getElementById("copyright").innerHTML = "&copy;" + year;
}

export function displayLastUpdate() {
    const update = "Last update: ";
    const lastModified = new Date(document.lastModified);
    document.getElementById("lastmodified").innerHTML = update + lastModified;
}


document.addEventListener('DOMContentLoaded', function () {
    const modeButton = document.querySelector('#mode');
    const main = document.querySelector('main');
    const paragraphs = main.querySelectorAll('p,h1,h3,h4,h2');

    modeButton.addEventListener('click', () => {
        if (modeButton.textContent.includes('Darkmode🌑')) {
            main.style.background = '#000';
            main.style.color = '#fff';
            modeButton.textContent = 'Lightmode🔆';
            paragraphs.forEach(paragraph => {
                paragraph.style.color = 'white';
            });
        } else {
            main.style.background = '#eee';
            main.style.color = '#000';
            modeButton.textContent = 'Darkmode🌑';
            paragraphs.forEach(paragraph => {
                paragraph.style.color = 'black';
            });
        }
    });

});

    // Set the current year

    document.addEventListener('DOMContentLoaded', function () {
        var today = new Date();
        var dayOfWeek = today.getDay();

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

 // Make sure to replace this with your actual getWeatherForecast code

setCopyrightYear();
displayLastUpdate();
