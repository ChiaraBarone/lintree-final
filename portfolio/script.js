const form = document.getElementById('form-tarea');
const input = document.getElementById('input-tarea');
const lista = document.getElementById('lista-tareas');

let tareas = JSON.parse(localStorage.getItem('tareas')) || [];

function guardarTareas() {
  localStorage.setItem('tareas', JSON.stringify(tareas));
}

function renderTareas() {
  lista.innerHTML = '';
  tareas.forEach((tarea, i) => {
    const li = document.createElement('li');
    li.className = tarea.completada ? 'completada' : '';
    li.innerHTML = `
      <span onclick="toggle(${i})">${tarea.texto}</span>
      <button onclick="eliminar(${i})">Eliminar</button>
    `;
    lista.appendChild(li);
  });
}

function agregarTarea(e) {
  e.preventDefault();
  if (input.value.trim() === '') return;

  tareas.push({ texto: input.value, completada: false });
  input.value = '';
  guardarTareas();
  renderTareas();
}

function eliminar(i) {
  tareas.splice(i, 1);
  guardarTareas();
  renderTareas();
}

function toggle(i) {
  tareas[i].completada = !tareas[i].completada;
  guardarTareas();
  renderTareas();
}

form.addEventListener('submit', agregarTarea);
renderTareas();


const imagenes = [
  'assets/img/galeria/1.jpg',
  'assets/img/galeria/2.jpg',
  'assets/img/galeria/3.jpg',
  'assets/img/galeria/4.jpg'
];

let indiceActual = 0;

function abrirLightbox(indice) {
  indiceActual = indice;
  document.getElementById('img-ampliada').src = imagenes[indice];
  document.getElementById('lightbox').classList.remove('oculto');
}

function cerrarLightbox() {
  document.getElementById('lightbox').classList.add('oculto');
}

function cambiarImagen(direccion) {
  indiceActual += direccion;

  if (indiceActual < 0) {
    indiceActual = imagenes.length - 1;
  } else if (indiceActual >= imagenes.length) {
    indiceActual = 0;
  }

  document.getElementById('img-ampliada').src = imagenes[indiceActual];
}
document.querySelectorAll('.galeria-grid img').forEach((img, i) => {
  img.addEventListener('click', () => {
    abrirLightbox(i);
  });
});




