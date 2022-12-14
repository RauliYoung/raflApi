// getLoc.js hakee "Near me"-nappia painamalla käyttäjän sijainnin ja asettaa kartalle säädettävän ympyrän.
// Tekijät: Joel Tikkanen

let latlong;
const successCallBack = (location) => {
  // Takaisin kutsu onnistui
  loadScreenFinished();

  // latlong muuttujaan sijainti
  latlong = [location.coords.latitude, location.coords.longitude];

  // Luo ympyrän kartalle 500 metrisellä sätellä
  map.createCircle(latlong, 500);
  // Asettaa käyttäjän sijaintiin merkin
  map.addLocMarker(latlong);
  // Tarkentaa animaatiolla kartan lähelle käyttäjän sijaintia.
  map.zoom(latlong, 13);
};

const errorCallBack = (error) => {
  // Takaisin kutsu epäonnistui, lataus lopetetaan
  loadScreenFinished();

  // Ilmoittaa virheet eri tapausten avulla.
  switch (error.code) {
    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.");
      break;
    case error.PERMISSION_DENIED:
      alert("User denied the request for Geolocation.");
      break;
    case error.UNKNOWN_ERROR:
      alert("An unknown error occurred.");
      break;
  }
};

const searchLocation = () => {
  // Lataus alkaa, kunnes sijainti käyttäjän saadaan tai ei saada
  loadScreen();
  // Ehtolause sijainnin saatavuuden tarkistamiseksi
  if (navigator.geolocation) {
    // Hakee sijainnin sekä kutsuu onnistuessa sekä epäonnistuessa omia funktioita
    navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack);
  } else {
    alert("Your browser doenst support Geolocation");
  }
};
