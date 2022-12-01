'use strict';

// Longitude & Latitude of Helsinki
let helsinki_coordinates = [60.192059, 24.945831]

// Get current location
let options

options= {
    enableHighAccuracy: true

}
navigator.geolocation.watchPosition(onSuccess,onError,options)

function onError() {
    console.log("failed to get location")
}
function onSuccess (position) {
    const {
        latitude,
        longitude
    } = position.coords;
const currentLocation=[latitude,longitude]

const nothing = () => {

}
console.log(location);

// Map creation and zooming to Helsinki
let map = L.map('map').setView(currentLocation,10);

// Layergroup for markers
let layerGroup = L.layerGroup()
map.addLayer(layerGroup)

// Map tilelayer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Show circle with initial radius of 1000 meters
let radiusCircle = L.circle(currentLocation, 1000, {
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
const editCircle = (radius) => {
    radiusCircle.setRadius(radius)
}

// Marker reset
const resetMap = () => {
    layerGroup.clearLayers();
}}
