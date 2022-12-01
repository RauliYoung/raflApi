const ravintolat = localStorage.getItem("ravintolaOliot");
const ravintolaOliot2 = JSON.parse(ravintolat).data;

// Get the nearest restauraunts
const nearestQuery = (coordinates) => {
  const apiCall =
    "https://api.allorigins.win/get?url= " +
    encodeURIComponent(
      "https://open-api.myhelsinki.fi/v2/places/?distance_filter=60.170957,24.942721,0.5"
    );
  fetch(apiCall)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      resetMap();
      for (let object of JSON.parse(json.contents).data) {
        for (const tag of object.tags) {
          if (tag.name == "restaurants") {
            addToMap(object);
          }
        }
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

// Get one restaurant with specific ID
const idQuery = (id) => {
  const apiCall =
    "https://api.allorigins.win/get?url=" +
    encodeURIComponent("https://open-api.myhelsinki.fi/v2/place/" + id);
  console.log(apiCall);
  fetch(apiCall)
    .then(function (response) {
      console.log("resp begins");
      return response.json();
    })
    .then(function (json) {
      getData(JSON.parse(json.contents));
    })
    .catch(function (error) {
      console.log(error);
    });
};

const nameQuery = (name, map) => {
  for (const objekt of ravintolaOliot2) {
    if (name.length > 0) {
      const restName = objekt.name.fi
        .toLowerCase()
        .replace(/[^a-zA-Z0-9 ]/g, "");
      if (restName.includes(name.toLowerCase())) {
        map.addMarker(objekt.id, restName, objekt.coordinates);
      }
    } else {
      map.addMarker(objekt.id, restName, objekt.coordinates);
    }
  }
};

const ratingSearch = (rating) => {};

const search = () => {
  const queryValue = document.getElementsByClassName("searchField")[0].value;
  nameQuery(queryValue);
};

//idQuery(289)
