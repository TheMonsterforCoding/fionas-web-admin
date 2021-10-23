export const firstNameEvento= document.getElementById("firstName");
firstNameEvento.addEventListener("keypress", validarNombre)
function validarNombre(){
   let nombre = document.getElementById("firstName");
   let nombreValido = /^[a-zA-Z]{2,}$/;
   if(nombreValido.test(nombre.value)){
       nombre.classList.remove("is-invalid");
       nombre.classList.add("is-valid");
   }else{
       nombre.classList.remove("is-valid");
       nombre.classList.add("is-invalid");
   }
}

//function validar password
export const passwordEvento= document.getElementById("password");
passwordEvento.addEventListener("keypress", validarPassword)
function validarPassword(){
    let password = document.getElementById("password");
    let passwordValido = /^[a-zA-Z0-9]{6,}$/;
    if(passwordValido.test(password.value)){
         password.classList.remove("is-invalid");
         password.classList.add("is-valid");
    }else{
         password.classList.remove("is-valid");
         password.classList.add("is-invalid");
    }
    }
//function comparar contraseñas