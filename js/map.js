// Longitude & Latitude of Helsinki
helsinki_coordinates = [60.192059, 24.945831]


// Map creation and zooming to Helsinki
let map = L.map('map').setView([60.192059, 24.945831], 10);
let layerGroup = L.layerGroup()
map.addLayer(layerGroup)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// Adding search results to map
addToMap = (json) => {
    // Coordinates and name
    coordinates = [json.location.lat, json.location.lon]
    restName = json.name.fi
    // Marker
    marker = L.marker(coordinates).bindPopup(`<b>${restName}</b>`);
    // Adding marker to layer group
    layerGroup.addLayer(marker)
}
    

// Marker reset
resetMap = () => {
    layerGroup.clearLayers();
}

