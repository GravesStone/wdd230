document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('myForm').addEventListener('submit', function (event) {
      event.preventDefault();

      // Get values from form fields
      const numberValue = document.getElementById('number').value;
      const phoneValue = document.getElementById('phone').value;
      const nameValue = document.getElementById('name').value;
      const emailValue = document.getElementById('email').value;
      const stateCountryValue = document.getElementById('stateCountry').value;
      const cruiseLineValue = document.getElementById('cruiseLine').value;
      const accommodationsValue = document.getElementById('accommodations').value;
      const dropOffLocationValue = document.getElementById('dropOffLocation').value;

      // You can perform further processing or validation here

      // Store the values in sessionStorage (or you can send them to the server)
      sessionStorage.setItem('numberValue', numberValue);
      sessionStorage.setItem('phoneValue', phoneValue);
      sessionStorage.setItem('nameValue', nameValue);
      sessionStorage.setItem('emailValue', emailValue);
      sessionStorage.setItem('stateCountryValue', stateCountryValue);
      sessionStorage.setItem('cruiseLineValue', cruiseLineValue);
      sessionStorage.setItem('accommodationsValue', accommodationsValue);
      sessionStorage.setItem('dropOffLocationValue', dropOffLocationValue);

      // Redirect to the result page
      window.location.href = 'result.html';
    });
  });