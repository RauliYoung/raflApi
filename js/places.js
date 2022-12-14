const results = [];
const service = new google.maps.places.PlacesService(top10);

const top10places = () => {
    results.length=0;
    if (document.getElementById("top10").checked === false) {
        map.resetMap();
        return;
    }
    if (document.getElementById("nearMeCheckbox").checked === false) return;

    navigator.geolocation.getCurrentPosition((position) => {
        const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
        };
        selectedBtn();
        //current location, search radius and keyword
        const request = {
            location: new google.maps.LatLng(pos),
            radius: [range],
            keyword: [categoriesList.slice(-1)],
        };
        const callback = (response, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                results.push(...response);
                displayResults();
            }
        };
        service.nearbySearch(request, callback);
    });
};
//rating from best show only top 10 on map
const displayResults = () => {
    map.resetMap();
    results
        .filter((result) => result.rating)
        .sort((a, b) => (a.rating > b.rating ? -1 : 1))
        .slice(0, 10)
        .forEach((result) => {
            map.addMarker(null, result.name, [
                result.geometry.location.lat(),
                result.geometry.location.lng(),
            ]);
        });
};

