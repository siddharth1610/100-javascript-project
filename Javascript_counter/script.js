let buttons=document.querySelectorAll('.btn-counter')
let output=document.querySelector('#output')
//console.log(buttons);

let count =0

buttons.forEach((button)=>{
    
    button.addEventListener('click',()=>{
        if(button.classList.contains('inc')){
            count++
        }else if(button.classList.contains('dec')){
            count--
        }
        output.innerHTML=count
        console.log(count) //count value coming
    })
    
})

//if you want to see the count.

// let buttons = document.querySelectorAll('.btn-counter');
// let output = document.querySelector('#output');
// let count = 0;

// function logCount() {
//     console.log("Current count:", count);
// }

// logCount(); // Logs initial count value (0)

// buttons.forEach((button) => {
//     button.addEventListener('click', () => {
//         if (button.classList.contains('inc')) {
//             count++;
//         } else if (button.classList.contains('dec')) {
//             count--;
//         }
//         output.innerHTML = count;
//         logCount(); // Logs the updated count each time you click
//     });
// });


