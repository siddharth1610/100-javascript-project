const dectobinary=document.querySelector('.decToBinary')
const button =document.querySelector('button')
const result = document.querySelector('.res')

const calc=()=>{
let value= parseInt(dectobinary.value)
if (isNaN(value) || value === 0) return result.value = "0"
let binary=""
while (value > 0) {
    binary = (value % 2) + binary;
    value = Math.floor(value / 2);
}

    result.value=binary
}

button.addEventListener('click',calc)