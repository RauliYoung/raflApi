// api.js hoitaa haku toiminnot sekä pelkästään ID:eella tapahtuvan API fetchin
// Tekijät: Joel Tikkanen, Tristan Ellenberg

// Haetaan yksi ravintola sen ID:n perusteella
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

// Haku ottaa parametreiksi hakusanan ja valitut tagit
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
  // Lataus alkaa
  loadScreen();

  // Try-catch lause API:ssa olevan mahdollisen virheen vuoksi
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
      // Jos ravintolan nimi sisältää hakusanan
      if (restName.includes(name.toLowerCase()) && tagit) {
        // Jos haku sijainnin perusteella?
        if (loc) {
          // Tarkistetaan onko ravintolan koordinaatit halutulla säteellä
          if (
            haversineFormula(latlong, [
              objekt.location.lat,
              objekt.location.lon,
            ]) < range
          ) {
            // Jos on niin lisätään merkki ravintolasta kartalle
            map.addMarker(objekt.id, objekt.name.fi, [
              objekt.location.lat,
              objekt.location.lon,
            ]);
          }
        } else {
          // Jos ei sijaintia, mutta ravintolan nimi sisältää hakusanan.
          map.addMarker(objekt.id, objekt.name.fi, [
            objekt.location.lat,
            objekt.location.lon,
          ]);
        }
      }
    }
    //Lautaus loppuuu
    setTimeout(loadScreenFinished, 2000);
  } catch (error) {
    console.log("haussa tapahtui virhe: " + error);
  }
};

// Haku, jota kutsutaan kun hakunappia painetaa
const search = () => {

  const queryValue = document.getElementsByClassName("searchField")[0].value;
  query(queryValue, selectedBtn());
};
