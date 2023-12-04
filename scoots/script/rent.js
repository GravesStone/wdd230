const tableBody = document.getElementById('tableBody');

    // Function to format currency
    function formatCurrency(value) {
      return '$' + value.toFixed(2);
    }

    // Loop through the vehicles and populate the table
    rentalData.vehicles.forEach(vehicle => {
      const row = tableBody.insertRow();
      const { type, maxPersons, pricing, image } = vehicle;

      // Insert the image cell
      const imageCell = row.insertCell();
      const img = document.createElement('img');
      img.src = image;
      img.alt = type;
      imageCell.appendChild(img);

      // Insert other data cells with formatted currency
      row.insertCell().textContent = type;
      row.insertCell().textContent = maxPersons;
      row.insertCell().textContent = formatCurrency(pricing.reservation.halfDay);
      row.insertCell().textContent = formatCurrency(pricing.reservation.fullDay);
      row.insertCell().textContent = formatCurrency(pricing.walkIn.halfDay);
      row.insertCell().textContent = formatCurrency(pricing.walkIn.fullDay);
    });