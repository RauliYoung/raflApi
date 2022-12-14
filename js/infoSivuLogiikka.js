const kuvaLista = [
  {
    caption: "Tristan",
    description: "Koodari 4 lyfe//Sandels group",
    filename: "kuvat/tristan.jpg",
  },
  {
    caption: "Niko",
    description: "Koodari 4 lyfe//Sandels group",
    filename: "kuvat/niko.jpg",
  },
  {
    caption: "Joel",
    description: "Koodari 4 lyfe//Sandels group",
    filename: "kuvat/joel.JPG",
  },
  {
    caption: "Joonas",
    description: "Koodari 4 lyfe//Sandels group",
    filename: "kuvat/joonas.jpg",
  },
];
const div = document.querySelector("main");

for (const i in kuvaLista) {
  console.log(kuvaLista[i]);
  let kuva = kuvaLista[i].filename;
  let captionText = kuvaLista[i].caption;
  let description = kuvaLista[i].description;
  const uusiArtikkeli = `<article>
<figure>
    <img src="${kuva}" alt="${captionText}">
    <figcaption>${captionText}</figcaption>
</figure>
<p>${description}</p>
</article>`;
  div.innerHTML += uusiArtikkeli;
}
