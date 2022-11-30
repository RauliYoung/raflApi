// Url
const queryString = window.location.search;

// GET parameters
const urlParams = new URLSearchParams(queryString);

// JSON from GET parameters
const urlJSON = urlParams.get('jason')

// Parse JSON from GET parameters
jsonObject = JSON.parse(urlJSON+'"}')

console.log(jsonObject)

