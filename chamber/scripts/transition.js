const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
        document.body.style.backgroundColor = '#333'; /* Dark mode background color */
        document.body.style.color = '#f5f5f5'; /* Dark mode text color */
    } else {
        document.body.style.backgroundColor = '#f5f5f5'; /* Light mode background color */
        document.body.style.color = '#333'; /* Light mode text color */
    }
});
document.getElementById('linkbtn').addEventListener('click', function() {
    // Redirect to the specified URL when the button is clicked
    window.location.href = 'https://gravesstone.github.io/wdd230/';
  });