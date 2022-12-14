//Haetaan sijainti
const haeSijainti = () => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (onnistui) => {
        resolve(onnistui);
      },
      (error) => {
        reject(error);
      }
    );
  });
  return promise;
};
const koordinaatit = [];
const omaSijainti = async () => {
  let sijainti;
  try {
    sijainti = await haeSijainti();
    koordinaatit.push(sijainti.coords.latitude, sijainti.coords.longitude);
  } catch (error) {
    console.log(error);
  }
  console.log(sijainti);
};

const tulostaConsoliin = async (olio) => {
  await omaSijainti();
  let ravintolanKoordinaatit = [olio.location.lat, olio.location.lon];
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
  kartta.addRMarker(ravintolanKoordinaatit, olio.name.fi);
  kartta.addRMarker(koordinaatit, "Olet tässä");
};
