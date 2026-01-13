// Get DOM Elements
// const body = document.getElementsByTagName("body")[0];
const cardBody = document.getElementById("colorCard");
const colorName = document.getElementById("colorName");

// Helper function to convert RGB to Hex
function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// Helper function to convert named colors to hex
function colorToHex(color) {
  const colors = {
    red: "#ff0000",
    green: "#008000",
    blue: "#0000ff",
  };
  return colors[color.toLowerCase()] || color;
}

// function setColor(name) {
//   body.style.backgroundColor = name;
// }

// Set Color Function
function setColor(name) {
  // Trigger flip animation
  cardBody.classList.add("flip-animation");

  // Change color and color name during the flip
  setTimeout(() => {
    cardBody.style.backgroundColor = name;
    const hexColor = colorToHex(name);
    colorName.textContent = hexColor;
  }, 300); // Change color at halfway point of animation

  // Remove animation class after animation completes
  setTimeout(() => {
    cardBody.classList.remove("flip-animation");
  }, 600);
}

// Random Color Function
function randomColor() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);

  const color = `rgb(${red}, ${green}, ${blue})`;
  const hexColor = rgbToHex(red, green, blue);

  // Trigger flip animation
  cardBody.classList.add("flip-animation");

  // Change color and color name during the flip
  setTimeout(() => {
    cardBody.style.backgroundColor = color;
    colorName.textContent = hexColor;
  }, 300); // Change color at halfway point of animation

  // Remove animation class after animation completes
  setTimeout(() => {
    cardBody.classList.remove("flip-animation");
  }, 600);
}

randomColor();

// Add click event to color card
cardBody.addEventListener("click", randomColor);

// Copy Color Code Function
function copyColorCode() {
  const hexColor = colorName.textContent;
  navigator.clipboard
    .writeText(hexColor)
    .then(() => {
      alert(`Copied color code: ${hexColor}`);
    })
    .catch((err) => {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = hexColor;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      alert(`Copied color code: ${hexColor}`);
    });
}
