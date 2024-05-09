// create container element 
const container = document.createElement('div');

container.setAttribute("id" , "container");// --2 - 1=2


const body = document.querySelector('body');

body.appendChild(changeSize());
//create button to interact with the sketch
const button = document.createElement('button')
const popup = document.createElement('button')
popup.setAttribute("class" , "popup")
button.textContent = "Clear the Sketch"
popup.textContent = "Click to Change the size of the sketch "

body.appendChild(button);
body.appendChild(popup);


// const mouseover = hover();

function input () {
    prompt("enter the the size of the sketch");
}



popup.addEventListener('click' , () => {
    let input = input();
    changeSize (input);
} )


//create 16x16 grid square
    function firstDiv () {
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



function changeSize (input) {
    let number = parseInt(input);
    let content = container ;
    if ( number === 0 || number > 100 || number === '' ) {
        prompt("enter the the size of the sketch");
    }else {
        for ( let i = 0 ; i < number * number ; i++){
            const square = document.createElement('div'); 
            square.setAttribute("class" , "square");
            content.style.width = "50%"
            content.style.height = "50%"
            square.style.width = `calc(100% / ${number})`;
            square.style.height = `calc(100% / ${number})`;
            content.appendChild(square);
            

        }

        hover()

        return content;
    }
}








