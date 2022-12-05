let latlong;
const successCallBack = (location) => {

    // Callback succeeded, loading finished
    loadScreenFinished() 

    // Assign current location to variable
    latlong = [location.coords.latitude, location.coords.longitude]
    
    // Show current location on map

    //Ota myöhemmin arvo slideristä
    map.resetMap()
    map.createCircle(latlong, 1000)
    map.addLocMarker(latlong)
    
}

const errorCallBack = (error) => {

    // Callback resulted in error, loading finished.
    loadScreenFinished()

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
    // Loads map untill callback
    loadScreen()
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack)
    } else {
        alert("Your browser doenst support Geolocation")
    }
}





