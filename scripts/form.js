const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

function checkPassword(input) {
    const password = document.getElementById("password").value;
    const confirmPassword = input.value;
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        document.getElementById("confirm_password").value = "";
        document.getElementById("username").focus();
    }
}

// JavaScript function to update the displayed rating value
function updateRatingValue(input) {
    document.getElementById("ratingValue").textContent = input.value;
}

// JavaScript to toggle password visibility
const togglePasswordButtons = document.querySelectorAll(".toggle-password");
togglePasswordButtons.forEach(button => {
    button.addEventListener("click", function () {
        const targetId = this.getAttribute("data-target");
        const targetInput = document.getElementById(targetId);

        if (targetInput.type === "password") {
            targetInput.type = "text"; // Show the password
            this.innerHTML = '<i class="fas fa-eye-slash"></i>';
        } else {
            targetInput.type = "password"; // Hide the password
            this.innerHTML = '<i class="fas fa-eye"></i>';
        }
    });
});