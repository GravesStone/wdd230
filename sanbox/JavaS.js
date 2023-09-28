// Get the menu toggle button and menu
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

// Toggle the menu when the button is clicked
menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});
