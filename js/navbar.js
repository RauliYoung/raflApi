const makeNavBar = () => {
  const body = document.querySelector("body");
  let video = "videon src tähän";

  const navBar = `<ul class="nav-bar">
  <li class="nav-bar-list">
    <a href="../index.html" class="list-a">Etusivu </a> 
  </li>
  <li class="nav-bar-list">
    <a href="../viikko1/index.html" class="list-a">Viikko 1 </a> 
  </li>
  <li class="nav-bar-list">
      <a href="../Viikko2/index.html" class="list-a">Viikko 2</a> 
  </li>
  <li class="nav-bar-list">
    <a href="../Viikko3/index.html" class="list-a">Viikko 3</a> 
  </li>
  <li class="nav-bar-list">
    <a href="${video}" class="list-a">Video</a> 
  </li>
</ul> `;

  body.innerHTML += navBar;
};
