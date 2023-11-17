document.addEventListener("DOMContentLoaded", function () {
    // Check if it's Monday, Tuesday, or Wednesday
    var today = new Date().getDay();
    
    if (today >= 1 && today <= 3) {
        // Show the banner
        showBanner();
    }
});

function showBanner() {
    var banner = document.getElementById("chamberBanner");
    banner.style.display = "block";
}

function closeBanner() {
    var banner = document.getElementById("chamberBanner");
    banner.style.display = "none";
}
