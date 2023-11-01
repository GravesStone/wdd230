const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}
function updateRatingValue(input) {
    document.getElementById("ratingValue").textContent = input.value;
}

// JavaScript function to check if passwords match
function checkPassword() {
    const password = document.getElementById("password").value;
    const confirm_password = document.getElementById("confirm_password").value;

    if (password !== confirm_password) {
        alert("Passwords do not match. Please try again.");
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        document.getElementById("confirm_password").value = "";
        document.getElementById("username").focus();
        return false; // Prevent form submission
    }

    return true; // Allow form submission
}