// create container element
const container = document.createElement("div");

container.setAttribute("id", "container"); // --2 - 1=2

const body = document.querySelector("body");

body.appendChild(container);
//create button to interact with the sketch
const button = document.createElement("button");
const popup = document.createElement("button");
popup.setAttribute("class", "popup");
button.textContent = "Clear the Sketch";
popup.textContent = "Click to Change the size of the sketch ";

body.appendChild(button);
body.appendChild(popup);

// const mouseover = hover();

popup.addEventListener("click", () => {
    const inputValue = prompt("enter a value between 1 to 99");
    changeSize(inputValue);
});

button.addEventListener("click", () => {
    const clear = document.querySelectorAll(".square");
    clear.forEach((square) => {
        square.style.backgroundColor = null;
    });
});

createGrid(16);


//clear the container

function createGrid(number) {
    let content = container;
    for (let i = 0; i < number * number; i++) {

        
        const square = document.createElement("div");

        square.setAttribute("class", "square");

        square.style.width = `calc(100% / ${number})`;
        square.style.height = `calc(100% / ${number})`;
        content.appendChild(square);


        square.addEventListener("mouseover", () => {
            let red = Math.floor(Math.random() * 255);
            let green = Math.floor(Math.random() * 255);
            let blue = Math.floor(Math.random() * 255);
            square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        });
    }

    return content;
}

function changeSize(input) {
    let number = parseInt(input);
    let content = container;

    if (number === null || number > 100 || number < 1) {
        prompt("Error");
        content = createGrid(16);
        return content;
    } else {
        removeAllChildNodes(content);
        content = createGrid(number);
        return content;
    }
}


 function removeAllChildNodes (container) {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
