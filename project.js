// create container element 
const container = document.createElement('div');

container.setAttribute("id" , "container");// --2 - 1=2

const body = document.querySelector('body');

body.appendChild(createDiv());

const button = document.createElement('button')



const input = document.createElement('input')
input.setAttribute("class" , "input")

button.textContent = "Clear the Sketch"
input.textContent = "Change the size of the sketch "

body.appendChild(button);
body.appendChild(input);

const mouseover = hover();
// const clear = clearButton(button);




//create 16x16 grid square
    function createDiv () {
        let content = container  
        for (i = 0 ; i < 16 * 16 ; i++) {
            const square = document.createElement('div'); 
            square.setAttribute("class" , "square");
            content.appendChild(square);
         }
         return content;



    }


//make the div change color when hover
function hover () {
    const square = document.querySelectorAll('.square');;
    square.forEach((square) => {
        square.addEventListener("mouseover" , () => {
            square.style.backgroundColor = "black";
        })
    })

}
//clear the container 

button.addEventListener ('click' , () => {
    const clear = document.querySelectorAll('.square');
    clear.forEach((square) => {
        square.style.backgroundColor = null;
    })
})

//input the changes
input.addEventListener('click' , () => {
    if (input.textContent > +"100" && input.textContent < +"1")  {
        input.textContent = "";
    }else {
        
    }
}) 








