const tulostaConsoliin = (olio) => {
  const ravintolaOliot2 = [];
  ravintolaOliot2.push(olio);
  for (const i of ravintolaOliot2) {
    document.querySelector("body").innerHTML += `<main>
    <header><h1>${i.name.fi}</h1></header>
    <article>
        <p>${i.description.body}</p> 
        <a href="${i.info_url}">${i.info_url}</a>  
        <p>${i.location.address.street_address}</p>
        </article>
        </main>`;
  }
};
