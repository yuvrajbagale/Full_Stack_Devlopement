const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "purple",
  "white",
  "black",
  "pink",
];

function createColorButton(color) {
  const button = document.createElement("button");
  button.style.margin = "5px";
  button.style.textTransform = "capitalize";
  button.textContent = color;
  button.id = `btn-${color}`;

  button.addEventListener("click", function () {
    document.body.style.backgroundColor = color;
  });

  return button;
}

function addColorButtons(colors) {
  const container = document.getElementById("button-container");

  colors.forEach((color) => {
    const colorButton = createColorButton(color);
    container.appendChild(colorButton);
  });
}

// Add color buttons to the page
addColorButtons(colors);
