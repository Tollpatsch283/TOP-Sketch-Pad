const container = document.getElementById("container");
const resizeButton = document.getElementById("resize");
const clearButton = document.getElementById("clear");
const colorButton = document.getElementById("color");

const createPad = (size) => {
    container.innerHTML = ""
    for (let i = 0; i < size * size; i++) {
        const block = document.createElement("div");
    }
}