//menu desplegable

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

//validacion datos formularios

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const calle = document.getElementById("calle");
const numero = document.getElementById("numero");
const cp = document.getElementById("cp");
const tel = document.getElementById("tel");
const provincias = document.getElementById("provincias");
const cumple = document.getElementById("cumple");
const email = document.getElementById("email");
const clave = document.getElementById("clave");
const errorNombre = document.getElementById("error-nombre");
const errorApellido = document.getElementById("error-apellido");
const errorCalle = document.getElementById("error-calle");
const errorNumero = document.getElementById("error-numero");
const errorProvincia = document.getElementById("error-provincias")
const errorCp = document.getElementById("error-cp");
const errorCumple = document.getElementById("error-cumple");
const errorEmail = document.getElementById("error-email");
const errorTel = document.getElementById("error-tel");
const errorClave = document.getElementById("error-clave");
const formRegister = document.getElementById("registro");
const content = document.getElementById("content");
const unido = document.getElementById("unido");

if (nombre && apellido && errorNombre && formRegister){
    formRegister.addEventListener("submit", validarFormulario)
} else{
    console.log("no se puede manejar los eventos no encotrados")
}

function validarFormulario(event){
   event.preventDefault();

   let validation = true;

   if (nombre.value==""){
    nombre.classList.add("error");
    errorNombre.textContent = "Inserte su nombre";
    validation = false;
   }else{
    nombre.classList.remove("error");
    errorNombre.textContent = "";
   }

   if (apellido.value==""){
    apellido.classList.add("error");
    errorApellido.textContent = "Inserte su apellido";
    validation = false;
   }else{
    apellido.classList.remove("error");
    errorApellido.textContent = "";
   }

   if (calle.value==""){
    calle.classList.add("error");
    errorCalle.textContent = "Inserte su dirección";
    validation = false;
   }else{
    calle.classList.remove("error");
    errorCalle.textContent = "";
   }

   if (numero.value==""){
    numero.classList.add("error");
    errorNumero.textContent = "Inserte altura de su dirección";
    validation = false;
   }else{
    numero.classList.remove("error");
    errorNumero.textContent = "";
   }

   if (cp.value==""){
    cp.classList.add("error");
    errorCp.textContent = "Inserte su codigo postal";
    validation = false;
   }else{
    cp.classList.remove("error");
    errorCp.textContent = "";
   }

   if (provincias.value==""){
    provincias.classList.add("error");
    errorProvincia.textContent = "Seleccione una provincia";
    validation = false;
   }else{
    provincias.classList.remove("error");
    errorProvincia.textContent = "";
   }

   if (tel.value==""){
    tel.classList.add("error");
    errorTel.textContent = "Ingrese su número de telefono";
    validation = false;
   }else{
    tel.classList.remove("error");
    errorTel.textContent = "";
   }

   if (cumple.value==""){
    cumple.classList.add("error");
    errorCumple.textContent = "Ingrese su fecha de nacimiento";
    validation = false;
   }else{
    cumple.classList.remove("error");
    errorCumple.textContent = "";
   }

   if (email.value==""){
    email.classList.add("error");
    errorEmail.textContent = "Ingrese su correo electronico";
    validation = false;
   }else{
    email.classList.remove("error");
    errorEmail.textContent = "";
   }

   if (clave.value==""){
    clave.classList.add("error");
    errorClave.textContent = "Ingrese una contraseña";
    validation = false;
   }else{
    clave.classList.remove("error");
    errorClave.textContent = "";
   }

   if (validation){
    content.style.display = "none";
    unido.style.display = "block";
   }
}