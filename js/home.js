const ventana = document.getElementById('windowscmd');
const barraVentana = document.getElementById('windowcmdbar');

let isDragging = false;
let offsetX, offsetY;

barraVentana.addEventListener('mousedown', (e) => {
  isDragging = true;
  const rect = ventana.getBoundingClientRect();
  offsetX = e.clientX - rect.left;
  offsetY = e.clientY - rect.top;
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    ventana.style.left = (e.clientX - offsetX) + 'px';
    ventana.style.top = (e.clientY - offsetY) + 'px';
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});