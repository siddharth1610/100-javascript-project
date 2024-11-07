const display= document.getElementById('display')

let displayValue=''

function appendToDisplay(value1){
    displayValue+=value1
    display.value=displayValue
}

function clearDisplay(){
    displayValue=""
    display.value=displayValue
}

function calResult(){
    try {
        const result=eval(displayValue)
        displayValue=result.toString()
        display.value=displayValue
    } catch (error){
        alert('invalid expression')
    }
}