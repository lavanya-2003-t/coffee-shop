function initMap() {
    // The location of your business
    const location = { lat: 40.7128, lng: -74.0060 };
    // The map, centered at your business location
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location,
    });
    // The marker, positioned at your business location
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}
