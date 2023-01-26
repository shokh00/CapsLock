let input = document.querySelector('input');
let warning = document.getElementById('warning');

input.addEventListener( 'keyup' , (e) =>{
    if (e.getModifierState('CapsLock')) {
        warning.style.display = 'block'
    } else{
        warning.style.display = 'none'
    }
})

