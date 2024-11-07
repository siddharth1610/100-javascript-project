const input=document.querySelector('input')
const btn=document.querySelector('button')
const ul = document.querySelector('ul')

const addTask=()=>{
    let task=input.value.trim()
    if(!task){
        alert('Please write down task')
        return
    }

    const li=document.createElement('li')
    li.innerHTML=`
    <label>
    <input type='checkbox' id='check'>
    <span id='taskSpan'>${task}<span/>
    </label>
    <span id='edit'>Edit</span>
    <span id='delete'>Delete</span>`

    ul.appendChild(li)

    input.value=""

    const taskSpan=document.querySelector('#taskSpan')
    const deletebtn=document.querySelector('#delete')
    const edit=document.querySelector('#edit')
    const checkbox=document.querySelector('#check')

    edit.addEventListener('click',function(){
        const update=prompt("Edit Task",taskSpan.textContent)
        if(update!==null){
            taskSpan.textContent=update
            checkbox.checked=false
            
        }
    })

    deletebtn.addEventListener('click',function(){
        if(confirm('Are you sure? You want to delete the task?')){
            li.remove()
        }
    })

}

btn.addEventListener('click',addTask)