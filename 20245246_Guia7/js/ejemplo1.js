// REFERENCIAS
const cmbElemento = document.getElementById("idCmbElemento");
const btnCrear = document.getElementById("idBtnCrear");
const newForm = document.getElementById("idNewForm");
const tituloElemento = document.getElementById("idTituloElemento");
const nombreElemento = document.getElementById("idNombreElemento");
const btnAddElement = document.getElementById("idBtnAddElement");

// BOTÓN DE VALIDACIÓN
const btnValidar = document.createElement("button");
btnValidar.textContent = "Validar formulario";
btnValidar.className = "btn btn-success mt-3";
newForm.parentNode.appendChild(btnValidar);

// EVENTO CREAR → abre modal
btnCrear.onclick = () => {
  if (cmbElemento.value !== "") {
    const modal = new bootstrap.Modal(document.getElementById("idModal"));
    modal.show();
  } else {
    alert("Seleccione un tipo de elemento");
  }
};

// EVENTO AGREGAR → crea el control en el formulario
btnAddElement.onclick = () => {
  let control;
  switch (cmbElemento.value) {
    case "text":
    case "number":
    case "date":
    case "password":
    case "radio":
    case "checkbox":
    case "color":   // NUEVO
    case "email":   // NUEVO
      control = document.createElement("input");
      control.type = cmbElemento.value;
      break;
    case "select":
      control = document.createElement("select");
      break;
    case "textarea":
      control = document.createElement("textarea");
      break;
  }

  if (control) {
    // VALIDAR ID ÚNICO
    if (document.getElementById(nombreElemento.value)) {
      alert("Ya existe un control con ese ID. No se permite duplicados.");
      return;
    }

    control.className = "form-control mb-2";
    control.id = nombreElemento.value;
    control.name = nombreElemento.value;
    control.placeholder = tituloElemento.value;

    const label = document.createElement("label");
    label.className = "form-label fw-bold";
    label.textContent = tituloElemento.value;

    newForm.appendChild(label);
    newForm.appendChild(control);
  }
};

// EVENTO VALIDAR FORMULARIO
btnValidar.onclick = () => {
  let valido = true;
  for (let i = 0; i < newForm.elements.length; i++) {
    const el = newForm.elements[i];
    if (el.type === "radio" || el.type === "checkbox") {
      // Al menos uno seleccionado
      continue;
    } else if (el.type === "select-one") {
      if (el.selectedIndex === 0) valido = false;
    } else {
      if (el.value.trim() === "") valido = false;
    }
  }
  alert(valido ? "Formulario válido" : "Complete todos los campos y seleccione opciones");
};
