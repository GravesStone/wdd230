function initMap() {
    // Replace with your own latitude and longitude values
    const mainLocation = { lat: 20.505, lng: -86.945 };
    const secondaryLocation = { lat: 20.512, lng: -86.950 };

    const map1 = new google.maps.Map(document.getElementById('map1'), {
        center: mainLocation,
        zoom: 13
    });

    const marker1 = new google.maps.Marker({
        position: mainLocation,
        map: map1,
        title: 'Main Location'
    });

    const map2 = new google.maps.Map(document.getElementById('map2'), {
        center: secondaryLocation,
        zoom: 13
    });

    const marker2 = new google.maps.Marker({
        position: secondaryLocation,
        map: map2,
        title: 'Secondary Location'
    });
}