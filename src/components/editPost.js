import { editDeletePost } from '../lib/index.js';
// import { wall } from './wall.js';

export const editPost = () => {
  const edit = `

<header class="headerWall1">
<div class = "logo"><img src="./img/pruebaDeLogo.png" class= "imgLogoPost"></div>
<button class = "home1"><img src="./img/home.png"><span class="tooltiptextP1"> <br>Todos los post</span></button>
<button class = "perfile1"><img src="./img/perfil.png"><span class="tooltiptextP2"> <br>Mis post</span></button>
<button class="logout1" id="logout"><img src="./img/salir.png"><span class="tooltiptextP3"> <br>Salir de la sesión</span></button>
</header>

<section id = "allPost" class = "allPost">
</section>
`;
  const divHeader = document.createElement('div');
  divHeader.classList.add('divHeader');
  divHeader.innerHTML = edit;
  const buttonHome = divHeader.querySelector('.home');
  if (buttonHome) {
    buttonHome.addEventListener('click', () => {
      window.location.hash = '#/wall';
    });
  }
  const buttonLogout = divHeader.querySelector('.logout');
  if (buttonLogout) {
    buttonLogout.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.hash = '#/logout';
    });
  }

  editDeletePost();
  return divHeader;
};
