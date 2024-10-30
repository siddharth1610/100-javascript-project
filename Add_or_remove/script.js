const surveyOpt=document.querySelector('#survey_options')
const add=document.querySelector('#add')
const remove=document.querySelector('#remove')


const addTab=()=>{
let field=document.createElement('input')
let tags=surveyOpt.getElementsByTagName('input')
field.setAttribute('type','text')
field.setAttribute('name','survey_options')
field.setAttribute('class','survey_options')
field.setAttribute('size','50')
surveyOpt.appendChild(field)
if(tags.length>=2){
    document.getElementById('remove').style.visibility="visible"
}
}
add.addEventListener('click',addTab)

const removeTab=()=>{
    let tags=surveyOpt.getElementsByTagName('input')
    if(tags.length>=2){
        surveyOpt.removeChild(tags[(tags.length)-1])
        if(tags.length<2){
            document.getElementById('remove').style.visibility="hidden"
        }
    }
}

remove.addEventListener('click',removeTab)