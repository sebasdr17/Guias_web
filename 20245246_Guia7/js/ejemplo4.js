// REFERENCIAS
const btnPagina = document.getElementById("idAgregarPagina");
const btnMenu = document.getElementById("idAgregarMenu");
const btnTitulo = document.getElementById("idAgregarTitulo");
const btnParrafo = document.getElementById("idAgregarParrafo");
const contenedor = document.getElementById("idPagina");

// FUNCIÓN PARA AGREGAR PÁGINA (DIV PRINCIPAL)
btnPagina.onclick = () => {
  const nuevaPagina = document.createElement("div");
  nuevaPagina.id = "paginaCreada";
  nuevaPagina.className = "border p-3 mt-3";
  nuevaPagina.textContent = "Nueva página creada con DOM";
  contenedor.appendChild(nuevaPagina);
};

// FUNCIÓN PARA AGREGAR MENÚ
btnMenu.onclick = () => {
  const pagina = document.getElementById("paginaCreada");
  if (pagina) {
    const nuevoMenu = document.createElement("ul");
    nuevoMenu.className = "nav nav-pills mb-3";
    const item = document.createElement("li");
    item.className = "nav-item";
    item.textContent = "Inicio";
    nuevoMenu.appendChild(item);

    // Si ya existe un menú, lo reemplaza
    const menuExistente = pagina.querySelector("ul");
    if (menuExistente) {
      pagina.replaceChild(nuevoMenu, menuExistente);
    } else {
      pagina.appendChild(nuevoMenu);
    }
  } else {
    alert("Primero debe crear la página");
  }
};

// FUNCIÓN PARA AGREGAR TÍTULO
btnTitulo.onclick = () => {
  const pagina = document.getElementById("paginaCreada");
  if (pagina) {
    const nuevoTitulo = document.createElement("h2");
    nuevoTitulo.textContent = "Este es un título agregado dinámicamente";

    const tituloExistente = pagina.querySelector("h2");
    if (tituloExistente) {
      pagina.replaceChild(nuevoTitulo, tituloExistente);
    } else {
      pagina.appendChild(nuevoTitulo);
    }
  } else {
    alert("Primero debe crear la página");
  }
};

// FUNCIÓN PARA AGREGAR PÁRRAFO
btnParrafo.onclick = () => {
  const pagina = document.getElementById("paginaCreada");
  if (pagina) {
    const nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = "Este es un párrafo agregado dinámicamente.";

    const parrafoExistente = pagina.querySelector("p");
    if (parrafoExistente) {
      pagina.replaceChild(nuevoParrafo, parrafoExistente);
    } else {
      pagina.appendChild(nuevoParrafo);
    }
  } else {
    alert("Primero debe crear la página");
  }
};
