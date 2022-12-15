results = [];
const top10places = () => {
  selectedBtn();
  results.length = 0;
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

    async function getDataFromApi(url) {
      const response = await fetch(url);
      const apiData = await response.json();
      console.log(apiData);
      results.push(apiData);
    }

    const proxy = "https://users.metropolia.fi/~ilkkamtk/proxy.php?url=";
    const search =
        "https://maps.googleapis.com/maps/api/place/nearbysearch/json?&location=" +
        pos.lat +
        "," +
        pos.lng +
        "&radius=" +
        range +
        "&keyword=" +
        categoriesList.slice(-1) +
        "&key=AIzaSyDi5mT_l3hpm7xGiSBvGlidhYba6m4czmg";
    const url = proxy + encodeURIComponent(search);
    console.log(categoriesList);

    getDataFromApi(url).then(() => {
      map.resetMap();
      results[0].results.sort(function (a, b) {
        return b.rating - a.rating;
      });
      for (let i = 0; i < 10; i++) {
        const name = results[0].results[i].name;
        const lat = results[0].results[i].geometry.location.lat;
        const lng = results[0].results[i].geometry.location.lng;
        const rating = results[0].results[i].rating;
        const latlong = [lat, lng];
        map.addTopMarker(name, latlong, rating);
      }
    });
  });
};
