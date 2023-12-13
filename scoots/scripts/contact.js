function submitForm() {
    // Get form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var comment = document.getElementById("comment").value;

    // Check if the name is empty
    if (name.trim() === "") {
        alert("Please enter your name before submitting the form.");
        return;
    }

    // Assuming the new page is "new-page.html"
    var redirectUrl = "feedback.html?name=" + encodeURIComponent(name);

    // Redirect to the new page
    window.location.href = redirectUrl;
}