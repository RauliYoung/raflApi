// Longitude & Latitude of Helsinki
helsinki_coordinates = [60.192059, 24.945831]

// Get current location
getLocation = () => {
    return helsinki_coordinates
}
const nothing = () => {
    ;
}

async function getJSONString(json) {
    try {
        let result = JSON.stringify(json)
        return result
    }
    catch {
        console.error(error)
    }
    
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
}).addTo(map).bindPopup("I am a circle.");

// Adding search results to map
const addToMap = (json) => {

    // Coordinates and name
    let coordinates = [json.location.lat, json.location.lon]
    let restName = json.name.fi
    let id = json.id

    layerGroup.addLayer(L.marker(coordinates).bindPopup(`
    <b>${restName}</b><br>
    <a href='../resinfo.html?id=${id}'>Lisää tietoja ravintolasta<a/>`)) 
}

// Show circle with modified radius
editCircle = (radius) => {
    radiusCircle.setRadius(radius)
}

// Marker reset
resetMap = () => {
    layerGroup.clearLayers();
}
