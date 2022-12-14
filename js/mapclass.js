class Map {
  // Kartan tarkennus sijainti
  location;

  // Oliomuuttuja kartalle
  map;

  // Kartan kerros, mihin lisätään löydettyjen ravintoloiden merkit
  layerGroup;

  // "Near me"- napista
  circle;

  //Marker to current location
  lmarker;

  // Kerros sijainti merkeille
  locGroup;

  // Luokan konstruktori, joka ottaa parametriksi kartan tarkennus sijainnin
  constructor(location) {
    this.location = location;
  }

  // Metodi kartan luomiselle, ottaa parametrina HTML-elementin ID:n mihin kartta lisätään
  createMap(id) {
    this.map = L.map(id).setView(this.location, 10);
    this.layerGroup = L.layerGroup();
    this.locGroup = L.layerGroup();
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.map);
    this.map.addLayer(this.layerGroup);
    this.map.addLayer(this.locGroup);
  }

  // Poistaa kaikkien hakutulosten merkit kartalta
  resetMap() {
    this.layerGroup.clearLayers();
  }

  // Lisää ravintolan merkin kartalle sisältäen ravintolan nimen ja linkin "Lisää tietoja"-sivulle
  addMarker(id, name, latlong) {
    L.marker(latlong)
      .bindPopup(
        `
            <b>${name}</b><br>
            <a href='resinfo.html?id=${id}'>Lisää tietoja ravintolasta<a/>`
      )
      .addTo(this.layerGroup);
  }

  // Lisää sijaniti merkin kartalle
  addLocMarker(latlong) {
    this.lmarker = L.marker(latlong)
      .bindPopup(`<b>Täällä</b>`)
      .addTo(this.locGroup)
      .openPopup();
  }
  // Lisää merkkejä kartalle "Lisää tietoja"- sivulla
  addRMarker(latlong, viesti) {
    this.lmarker = L.marker(latlong)
      .bindPopup(`<b>${viesti}</b>`, {autoClose: false})
      .addTo(this.map)
      .openPopup();
  }

  addTopMarker(name, latlong,rating) {
    L.marker(latlong)
      .bindPopup(
        `
            <b>${name}</b><br>
            <b>Rating: ${rating}</b><br>`)
      
      .addTo(this.layerGroup);
  }
  
  // Luo kartlle ympyrän annettuun sijaintiin annetulla sätelllä
  createCircle(latlong, radius) {
    this.circle = L.circle(latlong, 1000, {
      color: "#216477",
      fillOpacity: 0.5,
      weight: 1,
    }).addTo(this.map);
    //addTo(this.map)
  }

  // Muokkaa ympyrän kokoa
  editCircle(radius) {
    this.circle.setRadius(radius);
  }

  // Poistaa sijainti merkit kartalta
  deleteLocation() {
    this.map.removeLayer(this.circle);
    this.map.removeLayer(this.lmarker);
  }

  // Tarkentaa kartan animaatiolla annettuun sijaintiin
  zoom(loc, zoom_lvl) {
    this.map.flyTo(loc, zoom_lvl);
  }


  get getLayerGroup() {
    return this.layerGroup;
  }

  get Map() {
    return this.map;
  }
}
