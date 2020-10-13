
const myArray = []
const reversedArray = []

const inputElement = document.querySelector("#input");
const buttonElement = document.querySelector("button")
const resultElement = document.querySelector("#result")
// console.log("buttonElement", buttonElement)
// console.log("inputElement", inputElement)

buttonElement.addEventListener('click',ReverseWord);

function ReverseWord(){
    inputElement.value.split(' ').map(word => console.log("ReverseWord -> word", myArray.push(word.replace(/[^a-zA-Z ]/g, ""))));
    
    
    
    resultElement.innerText = myArray.reverse().join(' ');
}

