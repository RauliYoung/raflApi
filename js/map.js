// Longitude & Latitude of Helsinki
helsinki_coordinates = [60.192059, 24.945831]

// Get current location
getLocation = () => {
    return helsinki_coordinates
}

// Map creation and zooming to Helsinki
let map = L.map('map').setView([60.192059, 24.945831], 10);

// Layergroup for markers
let layerGroup = L.layerGroup()
map.addLayer(layerGroup)

// Map tilelayer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Show circle with initial radius of 1000 meters
let radiusCircle = L.circle(getLocation(), 1000, {
    color: "blue", fillOpacity: 0.2
}).addTo(map).bindPopup("I am a circle.");;

// Adding search results to map
addToMap = (json) => {

    // Coordinates and name
    coordinates = [json.location.lat, json.location.lon]
    restName = json.name.fi

    // Marker
    marker = L.marker(coordinates).bindPopup(`
    <b>${restName}</b><br>
    <a href='../resinfo.html' onclick=restarauntInfo(${json})>Lisää tietoja ravintolasta<a/>
    `);

    // Adding marker to layer group
    layerGroup.addLayer(marker)
}

// Show circle with modified radius
editCircle = (radius) => {
    radiusCircle.setRadius(radius)
}

// Marker reset
resetMap = () => {
    layerGroup.clearLayers();
}

