const ravintolat = localStorage.getItem("ravintolaOliot");

const ravintolaOliot2 = JSON.parse(ravintolat).data;

const tulostaConsoliin = () => {
  for (const i of ravintolaOliot2) {
    console.log(i);
    document.write(`<main>
    <header><h1>${i.name.fi}</h1></header>
    <article>
        <p>${i.description.body}</p> 
        <a href="${i.info_url}">${i.info_url}</a>  
        <p>${i.location.address.street_address}</p>
        </article>
        </main>`);
  }
};
tulostaConsoliin();
