document.addEventListener('DOMContentLoaded', () => {
  const imagenes = Array.from(document.querySelectorAll('.galeria-grid img')).map(img => img.src);
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

  // Agregar evento a cada imagen
  document.querySelectorAll('.galeria-grid img').forEach((img, i) => {
    img.addEventListener('click', () => {
      abrirLightbox(i);
    });
  });

  // 🔥 Esta línea es clave: hacer globales las funciones usadas en HTML
  window.cerrarLightbox = cerrarLightbox;
  window.cambiarImagen = cambiarImagen;
});
