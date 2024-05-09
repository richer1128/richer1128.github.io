var isDragging = false;

document.getElementById("drag-container").addEventListener("pointerdown", function(event) {
  isDragging = true;
});

document.addEventListener("pointermove", function(event) {
  if (isDragging) {
    event.preventDefault();
  }
});

document.addEventListener("pointerup", function(event) {
  isDragging = false;
});