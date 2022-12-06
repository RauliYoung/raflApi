const top10 = () => {
    navigator.geolocation.getCurrentPosition(

        (position) => {
            const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            };
            //location, search radius and type

            const request = {
                location: new google.maps.LatLng(pos),
                radius: 500,

                type: ['restaurant']
            };

            const results = [];
            const places = document.getElementById('places');
            const service = new google.maps.places.PlacesService(places);

            const callback = (response, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    results.push(...response);
                    displayResults();
                }
            }
            service.nearbySearch(request, callback);
            //rating from best
            const displayResults = () => {
                results.filter(result => result.rating)
                    .sort((a, b) => a.rating > b.rating ? -1 : 1)
                    .slice(0, 10)
                    .forEach(result => {//todo add markers to map
                    });
            }
        });
}




