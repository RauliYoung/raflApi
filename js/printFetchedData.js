const ravintolat = localStorage.getItem("ravintolaOliot");

const ravintolaOliot2 = JSON.parse(ravintolat).data;

const tulostaConsoliin = () => {
  for (const i of ravintolaOliot2) {
    document.write("Ravintola: " + i.name.fi + "<br>");
  }
};
