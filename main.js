const supremeContainer = document.querySelector(".container")

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function generarPizarra(size) {

    const squareSize = 600 / size

    for(i = 0; i<size; i++) {
        const squareRowContainer = document.createElement("div")
        squareRowContainer.classList.add("contenedor-cuadrado")
        for(j=0; j<size; j++) {
            const square = document.createElement("div")
            square.classList.add("cuadrado");
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
    
            square.addEventListener('mouseenter', () => {
                if (!square.dataset.color) {
                    const randomColor = getRandomColor();
                    square.style.backgroundColor = randomColor;
                    square.dataset.color = randomColor;
                    square.style.opacity = 0.0;
                }
        
                const currentOpacity = parseFloat(square.style.opacity);
                if(currentOpacity < 1) {
                    square.style.opacity = (currentOpacity + 0.1).toString();
                }
                
            });
            
    
            squareRowContainer.appendChild(square)
        }
        supremeContainer.appendChild(squareRowContainer)
    }
}


generarPizarra(16)

const boton = document.querySelector(".boton")

function cambiarPizarra() {
    const newSize = prompt("Especifica nuevo tamaño para la pizarra")

    if(newSize > 100) {
        alert("Tamaño no valido")
        return
    }

    supremeContainer.replaceChildren()

    generarPizarra(newSize)


}

boton.addEventListener("click", () => {
    cambiarPizarra()
})
