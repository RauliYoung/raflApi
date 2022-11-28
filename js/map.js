// Longitude & Latitude of Helsinki
stadi = [60.192059, 24.945831]
var map = L.map('map').setView([60.192059, 24.945831], 10);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker(stadi).addTo(map);
marker.bindPopup("<b>Helsingfors</b>").openPopup();