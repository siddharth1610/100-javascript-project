const textarea=document.querySelector('#textarea')
const counter =document.querySelector('.counter')
//console.log(textarea);



const count=()=>{
    //let text=textarea.value
    let length=textarea.value.length
    counter.innerHTML=`${length}`
}