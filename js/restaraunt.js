// restauraunts.js hakee tietyn ravintolan ID:n get parametreistä
// Tekijät: Joel Tikkanen
const getData = (es) => {
  console.log(es);
};

const getID = () => {
  const query = window.location.search;
  const urlParameters = new URLSearchParams(query);
  const id = urlParameters.get("id");
  idQuery(id);
};

getID();
