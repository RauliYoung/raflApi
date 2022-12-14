//Haetaan apin tiedot ja tallennetaan ne localstorageen.
const fetchData = () => {
  const apiCall =
    "https://users.metropolia.fi/~ilkkamtk/proxy.php?url=" +
    encodeURIComponent(
      "https://open-api.myhelsinki.fi/v2/places/?tags_search=restaurants"
    );
  fetch(apiCall)
    .then(function (response) {
      console.log("ladataan");
      return response.json();
    })
    .then(function (json) {
      console.log("ladataan vielä");
      const objectString = JSON.stringify(json.data);
      localStorage.setItem("ravintolaOliot", objectString);
    })
    .then(function () {
      console.log("ladattu");
    })
    .catch(function (error) {
      console.log(error);
    });
};
