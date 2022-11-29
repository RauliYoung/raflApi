const makeNavBar = () => {
  const body = document.querySelector("body");
  let video = "Video";
  let ravintolat = "Ravintolat";
  let elokuvateatterit = "Elokuvateatterit";
  let tissit = "Tissit";
  let tatuointiliikkeet = "";

  const navBar = `<navbar><ul class="nav-bar">
  <li class="nav-bar-list">
    <a href="../index.html" class="list-a">Etusivu </a> 
  </li>
  <li class="nav-bar-list">
    <a href="../list.html" class="list-a" >${ravintolat}</a> 
  </li>
  <li class="nav-bar-list">
      <a href="${elokuvateatterit}" class="list-a">${elokuvateatterit}</a> 
  </li>
  <li class="nav-bar-list">
    <a href="${tissit}" class="list-a">${tissit}</a> 
  </li>
  <li class="nav-bar-list-right">
    <a href="${video}" class="list-a">${video}</a> 
  </li>
</ul> </navbar>`;

  body.innerHTML += navBar;
};
