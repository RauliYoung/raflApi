/*
const fetchData = async () => {
  const response = await fetch(
    "https://api.allorigins.win/get?url= " +
      encodeURIComponent(
        "https://open-api.myhelsinki.fi/v2/places/?tags_search=restaurants"
      )
  );
  console.log("haetaan dataa...")
  const json = await response.json();
  //Luodaan kaikista ravintoloista olio.
  const ravintolatOlio = JSON.parse(json.contents);
  console.log("haetaan dataa..")
  //Olioista string joka tallennetaan cacheen.
  const objectString = JSON.stringify(ravintolatOlio);
  localStorage.setItem("ravintolaOliot", objectString);
};
*/

const fetchData = () => {
  const apiCall = "https://users.metropolia.fi/~ilkkamtk/proxy.php?url=" + 
encodeURIComponent("https://open-api.myhelsinki.fi/v2/places/?tags_search=restaurants")
fetch(apiCall)
    .then(function (response) {
      console.log("ladataan");
      return response.json();
    })
    .then(function (json) {
      console.log("ladataan vielä")
      const objectString = JSON.stringify(json.data);
      localStorage.setItem("ravintolaOliot", objectString);
    }).then(function(){
      console.log("ladattu")
    })
    .catch(function (error) {
      console.log(error);
});
}
