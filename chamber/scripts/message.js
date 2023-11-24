function displayWelcomeMessage() {
    const messageElement = document.querySelector(".messagev");
    const currentDate = new Date().getTime();
    const lastVisit = localStorage.getItem("last-visited");

    if (!lastVisit) {
        messageElement.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const daysPassed = Math.round((currentDate - Number(lastVisit)) / (24 * 60 * 60 * 1000));

        if (daysPassed == 0) {
            messageElement.textContent = "You already visited us today.";
        } else if (daysPassed == 1) {
            messageElement.textContent = "Back so soon! Awesome!";
        } else {
            messageElement.textContent = `You last visited ${daysPassed} day${daysPassed === 1 ? '' : 's'} ago. 📅`;
        }
    }

    localStorage.setItem("last-visited", currentDate);
}

// Call the function to display the welcome message
displayWelcomeMessage();
