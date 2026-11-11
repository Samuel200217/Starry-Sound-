// STARRYSOUND — interacciones mínimas
(() => {
  // Al tocar una estrella del cierre, rebota (reinicia la animación)
  document.querySelectorAll('.crew button').forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.classList.remove('pop');
      void btn.offsetWidth; // fuerza reflow para poder repetir la animación
      btn.classList.add('pop');
    });
  });

  // Pausa las animaciones decorativas si la pestaña no está visible (ahorra batería)
  document.addEventListener('visibilitychange', () => {
    document.body.classList.toggle('is-hidden', document.hidden);
  });
})();
