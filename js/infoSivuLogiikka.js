const kuvaLista = [
  {
    title: "Tristan",
    caption: "Tristan",
    description: "Koodari 4 lyfe//Sandels group",
    filename: "kuvat/tristan.jpg",
  },
  {
    title: "Niko",
    caption: "Niko",
    description: "Koodari 4 lyfe//Sandels group",
    filename: "kuvat/niko.jpg",
  },
  {
    title: "Joel",
    caption: "Joel",
    description: "Koodari 4 lyfe//Sandels group",
    filename: "kuvat/joel.JPG",
  },
  {
    title: "Joonas",
    caption: "Joonas",
    description: "Koodari 4 lyfe//Sandels group",
    filename: "kuvat/joonas.jpg",
  },
];
const div = document.querySelector("main");

for (const i in kuvaLista) {
  console.log(kuvaLista[i]);
  let kuva = kuvaLista[i].filename;
  let headerText = kuvaLista[i].title;
  let captionText = kuvaLista[i].caption;
  let description = kuvaLista[i].description;
  const uusiArtikkeli = `<article>
<header>
    <h2>${headerText}</h2>
</header>
<figure>
    <img src="${kuva}" alt="title">
    <figcaption>${captionText}</figcaption>
</figure>
<p>${description}</p>
</article>`;
  div.innerHTML += uusiArtikkeli;
}
