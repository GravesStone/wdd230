        var map1 = L.map('map1').setView([20.5034, -86.9470], 13); // Replace with your coordinates
        var map2 = L.map('map2').setView([20.4820, -86.9626], 13); // Replace with your coordinates

        // Add Google Maps as a base layer to Leaflet maps
        L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
            maxZoom: 20,
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
        }).addTo(map1);

        L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
            maxZoom: 20,
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
        }).addTo(map2);

        // Add markers to the maps
        var marker1 = L.marker([20.5034, -86.9470]).addTo(map1);
        var marker2 = L.marker([20.4820, -86.9626]).addTo(map2);

        // Contact form submission
        document.getElementById('contactForm').addEventListener('submit', function (event) {
            event.preventDefault();
            // Process the form data as needed
            // You can use JavaScript to send the data to a server or perform other actions
        });