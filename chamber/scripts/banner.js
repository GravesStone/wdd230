document.addEventListener("DOMContentLoaded", function () {
    // Check if today is Monday, Tuesday, or Wednesday
    var today = new Date().getDay();

    if (today >= 1 && today <= 3) {
        // Show the banner
        document.getElementById("chamberBanner").style.display = "block";
    }
});

function closeBanner() {
    // Hide the banner when the close button is clicked
    document.getElementById("chamberBanner").style.display = "none";
}