// REFERENCIAS
const formulario = document.forms["frmRegistro"];
const btnRegistro = formulario.elements["btnRegistro"];
const bodyModal = document.getElementById("idBodyModal");

// FUNCIÓN VALIDAR FORMULARIO
const validarFormulario = () => {
  let valido = true;
  let errores = [];

  // Campos básicos
  const nombre = document.getElementById("idNombre").value.trim();
  const apellidos = document.getElementById("idApellidos").value.trim();
  const fechaNac = document.getElementById("idFechaNac").value;
  const correo = document.getElementById("idCorreo").value.trim();
  const pass = document.getElementById("idPassword").value;
  const passRep = document.getElementById("idPasswordRepetir").value;
  const pais = document.getElementById("idCmPais").value;

  if (!nombre || !apellidos) errores.push("Nombre y apellidos son obligatorios.");
  if (!fechaNac || new Date(fechaNac) > new Date()) errores.push("Fecha inválida.");
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexCorreo.test(correo)) errores.push("Correo inválido.");
  if (pass !== passRep) errores.push("Las contraseñas no coinciden.");
  if (pais === "Seleccione una opcion") errores.push("Debe seleccionar un país.");

  // Intereses
  const intereses = ["idCkProgramacion","idCkBD","idCkRedes","idCkSeguridad"];
  if (!intereses.some(id => document.getElementById(id).checked)) {
    errores.push("Debe seleccionar al menos un interés.");
  }

  // Carrera
  const carreras = document.getElementsByName("idRdCarrera");
  if (![...carreras].some(r => r.checked)) errores.push("Debe seleccionar una carrera.");

  // Mostrar resultados
  bodyModal.innerHTML = ""; // limpiar

  const tabla = document.createElement("table");
  tabla.className = "table table-bordered";

  const tbody = document.createElement("tbody");

  if (errores.length > 0) {
    valido = false;
    errores.forEach(err => {
      const fila = document.createElement("tr");
      const celda = document.createElement("td");
      celda.textContent = err;
      fila.appendChild(celda);
      tbody.appendChild(fila);
    });
  } else {
    const datos = {
      Nombre: nombre,
      Apellidos: apellidos,
      FechaNacimiento: fechaNac,
      Correo: correo,
      Pais: pais
    };
    for (const key in datos) {
      const fila = document.createElement("tr");
      const celda1 = document.createElement("td");
      const celda2 = document.createElement("td");
      celda1.textContent = key;
      celda2.textContent = datos[key];
      fila.appendChild(celda1);
      fila.appendChild(celda2);
      tbody.appendChild(fila);
    }
  }

  tabla.appendChild(tbody);
  bodyModal.appendChild(tabla);

  const modal = new bootstrap.Modal(document.getElementById("idModal"));
  modal.show();
};

// EVENTO
btnRegistro.onclick = () => {
  validarFormulario();
};
