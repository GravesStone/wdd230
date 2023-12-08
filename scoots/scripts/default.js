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

setCopyrightYear();
displayLastUpdate();
