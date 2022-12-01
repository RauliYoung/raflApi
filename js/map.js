'use strict';

// Longitude & Latitude of Helsinki
let helsinki_coordinates = [60.192059, 24.945831]

const currentLocation=[]
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
    currentLocation.push(latitude,longitude);
}



const nothing = () => {

currentLocation=[latitude,longitude]
}

console.log(location);

// Map creation and zooming to Helsinki
let map = new Map(helsinki_coordinates);
map.createMap()
map.addMarker(289, "paska", helsinki_coordinates)
map.resetMap()
map.addMarker(289, "paska", helsinki_coordinates)
map.createCircle(helsinki_coordinates, 500)
map.deleteCircle()

