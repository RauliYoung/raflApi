//location, search radius and type
const request = {
    location: new google.maps.LatLng(60.1556279,24.9367831,13),
    radius: 500,
    type: ['restaurant']
};

const results = [];
const places = document.getElementById('places');
const service = new google.maps.places.PlacesService(places);


const callback = (response, status, pagination) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {

        results.push(...response);

    }

    if (pagination.hasNextPage) {
        setTimeout(() => pagination.nextPage(), 2000);
    } else {
        displayResults();
    }
}

const displayResults = () => {
    results.filter(result => result.rating)
        .sort((a, b) => a.rating > b.rating ? -1 : 1)
        .forEach(result => {
            places.innerHTML += `<li>${result.name} - ${result.rating}</li>`;
        });

}

service.nearbySearch(request, callback);