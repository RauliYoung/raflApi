// Get data from fetch
const getData = (es) => {
  console.log(es);
};

// Get ID from GET params
const getID = () => {
  const query = window.location.search;
  const urlParameters = new URLSearchParams(query);
  const id = urlParameters.get("id");
  idQuery(id);
};

getID();
