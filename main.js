const supremeContainer = document.querySelector(".container")

for(i = 0; i<16; i++) {
    const squareRowContainer = document.createElement("div")
    squareRowContainer.classList.add("contenedor-cuadrado")
    for(j=0; j<16; j++) {
        const square = document.createElement("div")
        square.textContent = "el pepe"
        square.classList.add("cuadrado");

        squareRowContainer.appendChild(square)
    }
    supremeContainer.appendChild(squareRowContainer)
}