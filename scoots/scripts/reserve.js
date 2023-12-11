document.addEventListener('DOMContentLoaded', function () {
  const resultLink = document.getElementById('resultLink');

  document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const dateValue = document.getElementById('date').value;
    const periodValue = document.getElementById('period').value;
    const rentalTypeValue = document.getElementById('rentalType').value;
    const numberValue = document.getElementById('number').value;
    const phoneValue = document.getElementById('phone').value;
    const nameValue = document.getElementById('name').value;
    const emailValue = document.getElementById('email').value;
    const stateCountryValue = document.getElementById('stateCountry').value;
    const cruiseLineValue = document.getElementById('cruiseLine').value;
    const accommodationsValue = document.getElementById('accommodations').value;
    const dropOffLocationValue = document.getElementById('dropOffLocation').value;

    sessionStorage.setItem('dateValue', dateValue);
    sessionStorage.setItem('periodValue', periodValue);
    sessionStorage.setItem('rentalTypeValue', rentalTypeValue);
    sessionStorage.setItem('numberValue', numberValue);
    sessionStorage.setItem('phoneValue', phoneValue);
    sessionStorage.setItem('nameValue', nameValue);
    sessionStorage.setItem('emailValue', emailValue);
    sessionStorage.setItem('stateCountryValue', stateCountryValue);
    sessionStorage.setItem('cruiseLineValue', cruiseLineValue);
    sessionStorage.setItem('accommodationsValue', accommodationsValue);
    sessionStorage.setItem('dropOffLocationValue', dropOffLocationValue);

    resultLink.click();
  });
});