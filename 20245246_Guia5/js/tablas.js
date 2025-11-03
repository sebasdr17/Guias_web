let table = "<table border='1'>";
table += "<thead><tr><th>#</th><th>Nombre</th><th>Apellido</th><th>Correo electrónico</th></tr></thead><tbody>";

const alumnos = [
  { id: 1, nombre: "Marcos Antonio", apellido: "Alas", correo: "marcos.alas@estudiante.esen.edu.sv" },
  { id: 2, nombre: "Ana Paola", apellido: "Rivas Polanco", correo: "paola.rivas@estudiante.esen.edu.sv" },
  { id: 3, nombre: "Alexis Armando", apellido: "Quintanilla Peña", correo: "alexis.quintanilla@estudiante.esen.edu.sv" },
  { id: 4, nombre: "Vanessa Alejandra", apellido: "Bermudez Urquilla", correo: "vanessa.bermudez@estudiante.esen.edu.sv" },
  { id: 5, nombre: "Oscar Armando", apellido: "López Rodriguez", correo: "oscar.lopez@estudiante.esen.edu.sv" }
];

alumnos.forEach(alumno => {
  table += `<tr>
    <td>${alumno.id}</td>
    <td>${alumno.nombre}</td>
    <td>${alumno.apellido}</td>
    <td>${alumno.correo}</td>
  </tr>`;
});

table += "</tbody></table>";

document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.querySelector("#idContenedor");
  contenedor.innerHTML = table;
});
