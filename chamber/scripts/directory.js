export function toggleMenu() {
    const btn = document.getElementById("hamburger-btn");
    const primaryNav = document.getElementById("primary-nav");

    primaryNav.classList.toggle("open");
    btn.classList.toggle("open");
}
export function displayLastUpdate() {
    const update = "Last update: ";
    const lastModified = new Date(document.lastModified);
    document.getElementById("lastModified").innerHTML = update + lastModified;
}
export function setCopyrightYear() {
    const dateobj = new Date();
    const year = dateobj.getFullYear();
    document.getElementById("copyright").innerHTML = "&copy;" + year;
}

toggleMenu();
setCopyrightYear();
displayLastUpdate();