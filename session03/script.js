
const doc = document.documentElement
doc.style.fontFamily = "monospace"


const menu = document.querySelector("#child-1");
console.log(menu.innerHTML)
menu.innerHTML = "This is my UI"
menu.style.fontSize = "20px"
menu.style.fontSize = "20px"


//add a button
let resetButton = document.createElement("button");
menu.appendChild(resetButton)
resetButton.innerHTML = "Reset text"
resetButton.classList.add("reset-button")
resetButton.style.float = "right";

resetButton.addEventListener('click', printText );

function printText(){
    console.log("someText");
    }


//text to add
const mainText = document.querySelector("#child-3");
mainText.innerHTML = "" 



//create a form to add text
const sidebar = document.querySelector("#child-2");
sidebar.innerHTML = "Insert text form"



let input = document.createElement("input"); //input element, text
input.setAttribute('type',"text");
input.setAttribute('name',"username");
sidebar.appendChild(input);

let submitButton = document.createElement("button");
submitButton.innerHTML = "submit"
sidebar.appendChild(submitButton)

let val = submitButton.addEventListener('click', myFunction );

let value = undefined;

function myFunction() {
    let tokenAmount = input.value;
    
    mainText.innerHTML += tokenAmount + " "; 


}
 
console.log(value);
