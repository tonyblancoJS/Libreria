document.addEventListener('DOMContentLoaded', function() {
    var menuBtn = document.querySelector('.menu-btn');
    var menu = document.querySelector('.menu');

    menuBtn.addEventListener('mouseover', function() {
        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    });

});

const firstname = document.querySelector("#firstName");
const lastname = document.querySelector('#lastName');
const errorFirstname = document.querySelector('#error-firstname');
const formRegister = document.querySelector('#formRegister');

if(lastname && errorFirstname && formRegister){
    formRegister.addEventListener('submit', validarFormulario)
}else{
    console.log("error!! no se puede manjar eventos no encontrados")
}

 function validarFormulario(event){
    event.preventDefault();

    let validation = true;

    if(firstname.value === ''){
        firstname.classList.add("error");
        errorFirstname.textContent = "El nombre no puede estar vacío"
        validation = false;
        errorFirstname.display='block';
    }
 }
