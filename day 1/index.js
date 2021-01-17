const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");

document.querySelector("#submit").addEventListener("click", divideAndRound)

function divideAndRound(n1, n2){
    n1 = num1.value;
    n2 = num2.value;
    console.log(Math.floor(n1/n2));
}