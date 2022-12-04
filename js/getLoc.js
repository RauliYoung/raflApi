const successCallBack = (location) => {
    let latlong = [location.coords.latitude, location.coords.longitude]
    
    // Show current location on map
    map.createCircle(latlong, 1000)
    map.addLocMarker(latlong)
    
}

const errorCallBack = (error) => {
    switch(error.code) {
        case error.POSITION_UNAVAILABLE:
          x.innerHTML = "Location information is unavailable."
          break;
        case error.PERMISSION_DENIED:
          x.innerHTML = "User denied the request for Geolocation."
          break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
      }
}


const searchLocation = () => {
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack)
    } else {
        alert("Your browser doenst support Geolocation")
    } 
}





