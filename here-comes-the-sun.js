let colorValue = 0; // start at black (0)

function animateBackground() {
  // Update the background color
  document.body.style.backgroundColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;

  // Stop when it reaches white (255)
  if (colorValue >= 255) return;

  // Increment color for next frame
  colorValue++;

  // Request next animation frame
  requestAnimationFrame(animateBackground);
}

// Start animation
requestAnimationFrame(animateBackground);
