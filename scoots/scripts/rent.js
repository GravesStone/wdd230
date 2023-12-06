async function loadRentalData() {
  const baseURL = "https://gravesstone.github.io/wdd230/"; // Replace with your actual GitHub Pages URL
  const rentalURL = `${baseURL}chamber/data/rental.json`;

  try {
    const response = await fetch(rentalURL);
    const data = await response.json();
    return data.vehicles;
  } catch (error) {
    console.error('Error loading rental data:', error);
    return [];
  }
}

// Use async/await for asynchronous code
(async () => {
  try {
    const rentalData = await loadRentalData();
    const rentalTableBody = document.getElementById('rentalTableBody');

    rentalData.forEach(vehicle => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${vehicle.type}</td>
        <td>${vehicle.maxPersons}</td>
        <td>${vehicle.reservation.halfDay}</td>
        <td>${vehicle.reservation.fullDay}</td>
        <td>${vehicle.walkIn.halfDay}</td>
        <td>${vehicle.walkIn.fullDay}</td>
      `;
      rentalTableBody.appendChild(row);
    });
  } catch (error) {
    console.error('Error displaying rental data:', error);
  }
})();