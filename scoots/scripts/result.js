function printPage() {
    // Open the print dialog
    window.print();
}

  document.addEventListener('DOMContentLoaded', function () {
    // Retrieve values from sessionStorage
    const dateValue = sessionStorage.getItem('dateValue');
    const periodValue = sessionStorage.getItem('periodValue');
    const rentalTypeValue = sessionStorage.getItem('rentalTypeValue');
    const numberValue = sessionStorage.getItem('numberValue');
    const phoneValue = sessionStorage.getItem('phoneValue');
    const nameValue = sessionStorage.getItem('nameValue');
    const emailValue = sessionStorage.getItem('emailValue');
    const stateCountryValue = sessionStorage.getItem('stateCountryValue');
    const cruiseLineValue = sessionStorage.getItem('cruiseLineValue');
    const accommodationsValue = sessionStorage.getItem('accommodationsValue');
    const dropOffLocationValue = sessionStorage.getItem('dropOffLocationValue');

    // Display values in the result page
    document.getElementById('resultDate').textContent = dateValue;
    document.getElementById('resultPeriod').textContent = periodValue;
    document.getElementById('resultRentalType').textContent = rentalTypeValue;
    document.getElementById('resultNumber').textContent = numberValue;
    document.getElementById('resultPhone').textContent = phoneValue;
    document.getElementById('resultName').textContent = nameValue;
    document.getElementById('resultEmail').textContent = emailValue;
    document.getElementById('resultStateCountry').textContent = stateCountryValue;
    document.getElementById('resultCruiseLine').textContent = cruiseLineValue;
    document.getElementById('resultAccommodations').textContent = accommodationsValue;
    document.getElementById('resultDropOffLocation').textContent = dropOffLocationValue;
  });