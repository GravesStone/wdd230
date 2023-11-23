cument.addEventListener('DOMContentLoaded', function () {
    var today = new Date();
    var dayOfWeek = today.getDay(); // 0 for Sunday, 1 for Monday, etc.

    // Show the banner only on Mondays, Tuesdays, and Wednesdays
    if (dayOfWeek >= 1 && dayOfWeek <= 3) {
        document.getElementById('chamber').style.display = 'block';
    }

    // Function to close the banner
    window.closeBanner = function () {
        document.getElementById('chamber').style.display = 'none';
    };
});