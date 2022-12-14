/*
Tekijä: Tristan Ellenberg
Tarkoitus: Tekee sivulle headerin
 */
const createHeader = () => {
  const body = document.querySelector("body");
  const jalka = `<header><h2>.</h2></header>`;

  body.innerHTML += jalka;
};
