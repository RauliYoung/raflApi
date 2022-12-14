class Map {
  // Intial zoom location
  location;

  //Map to be initialized
  map;

  //Layer to be initialized
  layerGroup;

  //Circle to be initialized
  circle;

  //Marker to current location
  lmarker;

  //Location layerGroup having all layers related to showing location
  locGroup;

  // Constructor which takes only 'map zoom location'
  constructor(location) {
    this.location = location;
  }

  // Method to create map
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

  // Resets map from markers
  resetMap() {
    this.layerGroup.clearLayers();
  }

  // Add marker to map with bindPopup
  addMarker(id, name, latlong) {
    L.marker(latlong)
      .bindPopup(
        `
            <b>${name}</b><br>
            <a href='resinfo.html?id=${id}'>Lisää tietoja ravintolasta<a/>`
      )
      .addTo(this.layerGroup);
  }

  addLocMarker(latlong) {
    this.lmarker = L.marker(latlong)
      .bindPopup(`<b>Täällä</b>`)
      .addTo(this.locGroup)
      .openPopup();
  }

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
  
  // Creates circle with given radius
  createCircle(latlong, radius) {
    this.circle = L.circle(latlong, 1000, {
      color: "#216477",
      fillOpacity: 0.5,
      weight: 1,
    }).addTo(this.map);
    //addTo(this.map)
  }

  // Edits circle
  editCircle(radius) {
    this.circle.setRadius(radius);
  }

  // Deletes all layers on map related to showing users location
  deleteLocation() {
    this.map.removeLayer(this.circle);
    this.map.removeLayer(this.lmarker);
  }

  zoom(loc, zoom_lvl) {
    this.map.flyTo(loc, zoom_lvl);
  }

  // Get layerGroup object
  get getLayerGroup() {
    return this.layerGroup;
  }

  // Get map object
  get Map() {
    return this.map;
  }
}
