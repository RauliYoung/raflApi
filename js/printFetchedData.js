const tulostaConsoliin = (olio) => {
  let ravintolanKoordinaatit = [olio.location.lat, olio.location.lon];
  console.log(ravintolanKoordinaatit);
  let kartta = new Map(ravintolanKoordinaatit);
  const ravintolaOliot2 = [];
  ravintolaOliot2.push(olio);
  for (const i of ravintolaOliot2) {
    document.querySelector("body").innerHTML += `<main>
    <header><h1>${i.name.fi}</h1></header>
    <article>
    <section class="text">
        <p>${i.description.body}</p> 
        <a href="${i.info_url}">${i.info_url}</a>  
        <p>${i.location.address.street_address}</p>
        </section>
        <section id="small-map"></section>
        </article>
        </main>`;
  }
  kartta.createMap("small-map");
  kartta.addRMarker(ravintolanKoordinaatit);
};
