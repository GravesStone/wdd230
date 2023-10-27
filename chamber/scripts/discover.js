document.addEventListener("DOMContentLoaded", function () {
    // Check if the user has visited the page before
    if (localStorage.getItem("lastVisitDate")) {
      const lastVisitDate = new Date(localStorage.getItem("lastVisitDate"));
      const currentDate = new Date();
  
      // Calculate the time difference between visits in milliseconds
      const timeDifference = currentDate - lastVisitDate;
      
      // Calculate the number of days
      const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
      if (daysDifference === 0) {
        // Less than a day
        document.getElementById("message").textContent = "Back so soon! Awesome!";
      } else {
        // More than a day
        document.getElementById("message").textContent = `You last visited ${daysDifference} ${daysDifference === 1 ? 'day' : 'days'} ago.`;
      }
    } else {
      // First visit
      document.getElementById("message").textContent = "Welcome! Let us know if you have any questions.";
    }
  
    // Store the current date in localStorage for the next visit
    localStorage.setItem("lastVisitDate", new Date().toString());
  });
  // Assuming you have the previous visit date stored in a variable
        // For example, let's use a static date for demonstration purposes
        const previousVisitDate = new Date('2023-10-24');

        // Get the current date
        const currentDate = new Date();

        // Calculate the number of days between visits
        const timeDifference = currentDate - previousVisitDate;
        const daysBetweenVisits = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        // Check if it's just one day or more
        let messagev;
        if (daysBetweenVisits === 1) {
            messagev = "You last visited 1 day ago.";
        } else {
            messagev = `You last visited ${daysBetweenVisits} days ago.`;
        }

        // Update the content of the 'messagev' element with the calculated message
        document.getElementById("message-visit").textContent = messagev;