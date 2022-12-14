// Get one restaurant with specific ID
const idQuery = (id) => {
  const apiCall =
    "https://users.metropolia.fi/~ilkkamtk/proxy.php?url=" +
    encodeURIComponent("https://open-api.myhelsinki.fi/v2/place/" + id);
  console.log(apiCall);
  fetch(apiCall)
    .then(function (response) {
      console.log("resp begins");
      return response.json();
    })
    .then(function (json) {
      tulostaRavintolanTiedotJaSijainti(json);
    })
    .catch(function (error) {
      console.log(error);
    });
};

const nameSearch = (object, name) => {
  console.log(object);

  for (let obj of object) {
    const restName = object.name.fi.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "");
    if (restName.includes(name.toLowerCase())) {
      // Lisää tulos...
      //addrestMarker(object.id, object.name.fi, [objekt.location.lat, objekt.location.lon])
    }
  }
  console.log(object);
};

// THE HAKU

const query = (name, tags) => {

  // Katsotaan löytyykö käyttäjän sijainti
  let loc = false;
  if (checked) {
    console.log("sijainti mukaan!");
    loc = true;
  }

  // Haetaan ravintola olio välimuistista
  const ravintolat = localStorage.getItem("ravintolaOliot");
  const ravintolaOliot2 = JSON.parse(ravintolat);
  console.log(ravintolaOliot2);

  // Poistetaan jo kartassa olevat merkit uutta hakua varten
  map.resetMap();
  loadScreen();

  try {
    for (const objekt of ravintolaOliot2) {
      const restName = objekt.name.fi
        .toLowerCase()
        .replace(/[^a-zA-Z0-9 ]/g, "");
      let objtags = objekt.tags.map((tag) => {
        return tag.name;
      });
      let tagit = true;

      // Tarkistetaan kuuluuko annetut tagit ravintolan tageihin.
      if (tags.length > 1) {
        for (let i of tags) {
          if (!objtags.includes(i)) {
            tagit = false;
          }
        }
      }
      if (restName.includes(name.toLowerCase()) && tagit) {
        // Jos haku sijainnin perusteella?
        if (loc) {
          // Otetaan myöhemmin arvo sliderista
          if (
            haversineFormula(latlong, [
              objekt.location.lat,
              objekt.location.lon,
            ]) < range
          ) {
            map.addMarker(objekt.id, objekt.name.fi, [
              objekt.location.lat,
              objekt.location.lon,
            ]);
            //createListItem(objekt.id, objekt.name.fi, [objekt.location.lat, objekt.location.lon])
          }
        } else {
          map.addMarker(objekt.id, objekt.name.fi, [
            objekt.location.lat,
            objekt.location.lon,
          ]);
          //createListItem(objekt.id, objekt.name.fi, [objekt.location.lat, objekt.location.lon])
        }
      }
    }
    //Loading stops
    setTimeout(loadScreenFinished, 2000);
  } catch (error) {
    console.log("haussa tapahtui virhe: " + error);
  }
};

// CALLED WHEN SEARCH BUTTON CLICKED
const search = () => {
  //deleteList()
  const queryValue = document.getElementsByClassName("searchField")[0].value;
  query(queryValue, selectedBtn());
};
