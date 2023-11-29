let btn = document.getElementById("hamburger-btn")
btn.onclick = () => toggleMenu()
toggleMenu = () => {
    document.getElementById("primary-nav").classList.toggle("open");
    btn.classList.toggle("open");
}