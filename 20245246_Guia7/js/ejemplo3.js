// REFERENCIAS A LOS CONTROLES
const inputFondo = document.getElementById("idFondo");
const inputTitulos = document.getElementById("idTitulos");
const inputParrafos = document.getElementById("idParrafos");
const btnAumentar = document.getElementById("idBtnAumentar");
const btnDisminuir = document.getElementById("idBtnDisminuir");

// REFERENCIAS A LOS ELEMENTOS DEL DOCUMENTO
const body = document.body;
const titulos = document.getElementsByTagName("h1");
const parrafos = document.getElementsByTagName("p");

// EVENTO PARA CAMBIAR COLOR DE FONDO
inputFondo.oninput = () => {
  body.style.backgroundColor = inputFondo.value;
};

// EVENTO PARA CAMBIAR COLOR DE LOS TÍTULOS
inputTitulos.oninput = () => {
  for (let i = 0; i < titulos.length; i++) {
    titulos[i].style.color = inputTitulos.value;
  }
};

// EVENTO PARA CAMBIAR COLOR DE LOS PÁRRAFOS
inputParrafos.oninput = () => {
  for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].style.color = inputParrafos.value;
  }
};

// EVENTO PARA AUMENTAR TAMAÑO DE LETRA
btnAumentar.onclick = () => {
  for (let i = 0; i < titulos.length; i++) {
    titulos[i].style.fontSize = "3rem";
  }
  for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].style.fontSize = "1.5rem";
  }
};

// EVENTO PARA DISMINUIR TAMAÑO DE LETRA
btnDisminuir.onclick = () => {
  for (let i = 0; i < titulos.length; i++) {
    titulos[i].style.fontSize = "2rem";
  }
  for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].style.fontSize = "1rem";
  }
};
