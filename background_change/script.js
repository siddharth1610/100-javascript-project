const colorChange=document.querySelector('#change')
const body=document.querySelector('body')
const hex=document.querySelector('#hex')
const rgb=document.querySelector('#rgb')




let utilityfunction=(length)=>{
 return Math.floor(Math.random()*length)  
}
//
colorChange.addEventListener('click',()=>{
    let color=["blue","green","yellow"]

    body.style.backgroundColor=color[utilityfunction(color.length)]
})


//hex
hex.addEventListener('click',()=>{
    let hexColor=[1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
    let a="#"
    for(let i=0;i<6;i++){ 
      a+= `${hexColor[utilityfunction(hexColor.length)]}`  
      //console.log(a);
       
    }
     body.style.backgroundColor=a
       
})

//rgb
rgb.addEventListener('click',()=>{
    let r=utilityfunction(256)
    let g=utilityfunction(256)
    let b=utilityfunction(256)
//console.log(r);

    body.style.backgroundColor=`rgb(${r},${g},${b})`
})