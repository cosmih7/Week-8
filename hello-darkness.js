// Start with white background
let value = 255; // R, G, B all start at 255 (white)

document.body.style.backgroundColor = `rgb(${value}, ${value}, ${value})`;

// Run every 0.5 seconds
const intervalId = setInterval(() => {

  value--; // darken by 1

  // Update background color
  document.body.style.backgroundColor = `rgb(${value}, ${value}, ${value})`;

  // Stop when value reaches 0
  if (value <= 0) {
    clearInterval(intervalId);
  }

}, 500); // 500 ms = 0.5 seconds
