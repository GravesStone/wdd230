function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Get the name parameter from the URL
var name = getParameterByName('name');

// Display the name on the page
var userNameElement = document.getElementById('userName');
if (userNameElement) {
    userNameElement.textContent = name;
}