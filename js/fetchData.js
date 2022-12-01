const fetchData = async () => {
  const response = await fetch(
    "https://api.allorigins.win/get?url= " +
      encodeURIComponent(
        "https://open-api.myhelsinki.fi/v2/places/?tags_search=restaurants"
      )
  );
  const json = await response.json();
  //Luodaan kaikista ravintoloista olio.
  const ravintolatOlio = JSON.parse(json.contents);
  //Olioista string joka tallennetaan cacheen.
  const objectString = JSON.stringify(ravintolatOlio);
  localStorage.setItem("ravintolaOliot", objectString);
};
