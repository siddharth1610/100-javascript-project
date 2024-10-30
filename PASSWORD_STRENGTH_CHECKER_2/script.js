const inputPassword = document.getElementById('password')
const outputfield = document.getElementById('output')


inputPassword.addEventListener('input',function(){
    console.log(inputPassword.value);

    let password = inputPassword.value
    if(password.length <3){
        outputfield.innerText ="Password is too short"
        outputfield.style.color="red"
    }else{
        // outputfield.innerText = 'Password is long enough';
        // outputfield.style.color = 'green';
        // a-z
        // A-Z
        // 0-9
        // special characters !@#$%^&*()_+{}:"<>?|[]\;',.
        console.log("is lowercase",password.search(/[a-z]/));
        if( password.search(/[a-z]/) == -1 ) {
            outputfield.innerText = 'Password is missing a lowercase letter';
            outputfield.style.color = 'red';
        }else if (password.search(/[A-Z]/) == -1){
            outputfield.innerText = 'Password is missing a Uppercase letter';
            outputfield.style.color = 'red';
        }else if (password.search(/[0-9]/) == -1){
            outputfield.innerText = 'Password is missing a Numeric letter';
            outputfield.style.color = 'red';
        }else if (password.search(/[!\@\#\$\%\^\&\*\(\)\_\+\{\}\:\"\<\>\?\|\[\]\\\;\'\,\.]/) == -1){
            outputfield.innerText = 'Password is missing a Special Character letter';
            outputfield.style.color = 'red';
        }
        else {
            outputfield.innerText = 'Password is strong';
            outputfield.style.color = 'green';
        }

    }
    
})

