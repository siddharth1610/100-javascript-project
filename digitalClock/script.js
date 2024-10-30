const output =document.querySelector('.output')

setInterval(()=>{
 let date = new Date()

output.innerHTML=date.toLocaleTimeString()   
},1000)