var map = L.map('map').setView([41.48224, -71.31111], 13);

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

L.control.zoom({
    position: 'bottomright' 
}).addTo(map);

var kingStreetMarker = L.marker([41.48224, -71.31111]).addTo(map);
kingStreetMarker.bindPopup('King Street, Newport').openPopup();

