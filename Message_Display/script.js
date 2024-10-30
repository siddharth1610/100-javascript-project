const conatiner= document.querySelector('form')
const input= document.querySelector('input')
const p =document.querySelector('p')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let text=input.value
    p.innerHTML=`${text},message delivered`

})