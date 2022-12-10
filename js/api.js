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
      getData(json);
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
  //deleteList()
  let loc = false;
  console.log(checked)
  if (checked){
    console.log("sijainti mukaan!")
    loc = true;
  }
  const ravintolat = localStorage.getItem("ravintolaOliot");
  console.log(JSON.parse(ravintolat).data)
  //console.log(ravintolat)
  const ravintolaOliot2 = JSON.parse(ravintolat).data;

  map.resetMap()
  //loadScreen()

try {

  for (const objekt of ravintolaOliot2) {
      const restName = objekt.name.fi.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "");
      let objtags = objekt.tags.map(tag => {return tag.name})
      let tagit = true;
      
      // Tarkistetaan kuuluuko annetut tagit ravintolan tageihin.
      if (tags.length > 1) {
        for (let i of tags){
          if (!objtags.includes(i)){
            tagit = false
          } 
        }
      }

      console.log(tagit)
      if (restName.includes(name.toLowerCase()) && tagit) {
        console.log("paskaa")
        // Jos haku sijainnin perusteella?
        if (loc) {
          // Otetaan myöhemmin arvo sliderista
          if (haversineFormula(latlong, [objekt.location.lat, objekt.location.lon]) < range){
            console.log("paska")
            map.addMarker(objekt.id, objekt.name.fi, [objekt.location.lat, objekt.location.lon])
            //createListItem(objekt.id, objekt.name.fi, [objekt.location.lat, objekt.location.lon])
          } 
      } else {
        console.log("paska")
        map.addMarker(objekt.id, objekt.name.fi, [objekt.location.lat, objekt.location.lon])
        //createListItem(objekt.id, objekt.name.fi, [objekt.location.lat, objekt.location.lon])
        
      }
  }
}
 //Loading stops
 //setTimeout(loadScreenFinished, 3000)

 // Show wanted amount of listItems
 //setTimeout(showListItems, 3100, 10) 

} catch (error) {
  console.log("haussa tapahtui virhe: " + error)
}
};

// CALLED WHEN SEARCH BUTTON CLICKED
const search = () => {
    //deleteList()
    const queryValue = document.getElementsByClassName("searchField")[0].value;
    console.log(queryValue)
    query(queryValue, selectedBtn());
}