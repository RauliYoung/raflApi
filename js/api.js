


// Get the nearest restauraunts TURHA
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

const nameSearch = (object, name) => {
  console.log(object)

  for (let obj of object){
    const restName = object.name.fi
        .toLowerCase()
        .replace(/[^a-zA-Z0-9 ]/g, "");
      if (restName.includes(name.toLowerCase())) {
        // Lisää tulos...
        //addrestMarker(object.id, object.name.fi, [objekt.location.lat, objekt.location.lon])
      }
  }
  console.log(object)
  
}


// THE HAKU 
const query = (name, tags) => {

  let loc = false;

  if (isChecked()){
    console.log("sijainti mukaan!")
    loc = true;
  }
  const ravintolat = localStorage.getItem("ravintolaOliot");
  const ravintolaOliot2 = JSON.parse(ravintolat).data;

  map.resetMap()
  loadScreen()

try {

  for (const objekt of ravintolaOliot2) {
  
      const restName = objekt.name.fi.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "");
    
      let objtags = objekt.tags.map(tag => {return tag.name})
      console.log(objtags)
      let tagit = true;
      
      // Tarkistetaan kuuluuko annetut tagit ravintolan tageihin.
      if (tags.length > 0) {
        for (let i of tags){
          if (!objtags.includes(i)){
            tagit = false
          } 
        }
      }

      if (restName.includes(name.toLowerCase()) && tagit) {
        // Jos haku sijainnin perusteella?
        if (loc) {
          // Otetaan myöhemmin arvo sliderista
          if (haversineFormula(latlong, [objekt.location.lat, objekt.location.lon]) < 10000){
            console.log(objekt)
            map.addMarker(objekt.id, objekt.name.fi, [objekt.location.lat, objekt.location.lon])
            createListItem(objekt.id, objekt.name.fi, [objekt.location.lat, objekt.location.lon])
          } 
      } else {
        console.log("paska")
        map.addMarker(objekt.id, objekt.name.fi, [objekt.location.lat, objekt.location.lon])
        createListItem(objekt.id, objekt.name.fi, [objekt.location.lat, objekt.location.lon])
        
      }
  }
}
 //Loading stops
 setTimeout(loadScreenFinished, 3000)

 // Show wanted amount of listItems
 setTimeout(showListItems, 3100, 10) 

} catch {
  alert("error")
}
};

// CALLED WHEN SEARCH BUTTON CLICKED
const search = () => {
    const queryValue = document.getElementsByClassName("searchField")[0].value;
    console.log("l")
    // queryyn mukaan klikatut nappulat eli tagit ...
    query(queryValue, ["Pub"]);
}