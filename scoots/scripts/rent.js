async function loadRentalData() {
  const baseURL = "https://gravesstone.github.io/wdd230/"; // Replace with your actual GitHub Pages URL
  const rentalURL = `${baseURL}scoots/data/rental.json`;

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
        <td>${vehicle.max_persons}</td>
        <td>${vehicle.pricing.reservation.half_day}</td>
        <td>${vehicle.pricing.reservation.full_day}</td>
        <td>${vehicle.pricing.walk_in.half_day}</td>
        <td>${vehicle.pricing.walk_in.full_day}</td>
        <td><img src="${vehicle.image}" alt="${vehicle.type}" width="50"></td>
      `;
      rentalTableBody.appendChild(row);
    });
  } catch (error) {
    console.error('Error displaying rental data:', error);
  }
})();
