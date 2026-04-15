const container = document.getElementById("container");
const resizeButton = document.getElementById("resize");
const clearButton = document.getElementById("clear");
const colorButton = document.getElementById("color");

let randomColorMode = false;

const createPad = (size) => {
  container.innerHTML = "";

  container.style.display = "grid";
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const block = document.createElement("div");
    block.classList.add("block");

    block.addEventListener("mouseenter", () => {
      if (randomColorMode) {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        block.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      } else {
        block.style.backgroundColor = "black";
      }
    });

    container.appendChild(block);
  }
};

resizeButton.addEventListener("click", () => {
  let newSize = prompt("Enter a grid size between 1 and 100:");

  newSize = Number(newSize);

  if (newSize >= 1 && newSize <= 100) {
    createPad(newSize);
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});

clearButton.addEventListener("click", () => {
  const blocks = document.querySelectorAll(".block");
  blocks.forEach((block) => {
    block.style.backgroundColor = "";
  });
});

colorButton.addEventListener("click", () => {
  randomColorMode = !randomColorMode;
  colorButton.textContent = randomColorMode ? "Random Color: ON" : "Random Color: OFF";
});

createPad(16);