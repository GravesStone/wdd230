function submitForm() {
    // You can add form validation logic here if needed
    // For simplicity, this example assumes the form is valid

    // Get form data
    var name = document.getElementById("name").value;
   

    // Assuming the new page is "new-page.html"
    var redirectUrl = "feedback.html?name=" + encodeURIComponent(name);

    // Redirect to the new page
    window.location.href = redirectUrl;
}