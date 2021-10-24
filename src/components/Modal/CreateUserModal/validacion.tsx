//function name
export const firstNameEvento= document.getElementById("firstName");
export const mensajeFirstName= document.getElementById("mensajeFirstName");
firstNameEvento.addEventListener("keypress", validarNombre)
function validarNombre(){
   let nombre = document.getElementById("firstName");
   let nombreValido = /^[a-zA-Z]{2,}$/;
   if(nombreValido.test(nombre.value)){
        mensajeFirstName.value="";
   }else{
       mensajeFirstName.value="el nombre tiene caaracteres equivocados"
   }
}


//function validar password
const passwordEvento= document.getElementById("password");
const passwordEvento2= document.getElementById("password2");
//mensaje password
const mensajePassword= document.getElementById("mensajePassword");
const mensajePassword2= document.getElementById("mensajePassword2");
passwordEvento.addEventListener("keypress", validarPassword)
function validarPassword(){
    let password = document.getElementById("password");
    let password2 = document.getElementById("password");
    let passwordValido = /^[a-zA-Z0-9]{6,}$/;
    if(passwordValido.test(password.value)){
        mensajePassword.value="";

    }else if(password.value!=password2.value){
        mensajePassword.value="Las contraseñas no coinciden";
    }else if(!passwordValido.test(password.value)){
        mensajePassword.value="El formato está incorrecto";
    }
}
passwordEvento2.addEventListener("keypress", validarPassword2)
function validarPassword2(){
    let password = document.getElementById("password");
    let password2 = document.getElementById("password2");
    let passwordValido = /^[a-zA-Z0-9]{6,}$/;
    if(passwordValido.test(password.value)){
        mensajePassword2.value="";

    }else if(password.value!=password2.value){
        mensajePassword2.value="Las contraseñas no coinciden";
    }else if(!passwordValido.test(password.value)){
        mensajePassword2.value="El formato está incorrecto";
    }

}
//function valdate mobileNumber
export const mensajeMobileNumber= document.getElementById("mensajeMobileNumber");
export const mobileNumberEvento= document.getElementById("mobileNumber");
mobileNumberEvento.addEventListener("keypress", validarMobileNumber)
function validarMobileNumber(){
    let mobileNumber = document.getElementById("mobileNumber");
    let mobileNumberValido = /^[0-9]{10}$/;
    if(mobileNumberValido.test(mobileNumber.value)){
        mensajeMobileNumber.value=""
    }else{
        mensajeMobileNumber.value="El formato tiene que ser solo número";
    }
    }
mobileNumberEvento.addEventListener("focusout", validarMobileNumberDesFocus)
function validarMobileNumberDesFocus(){
    let mobileNumber = document.getElementById("mobileNumber");
    let mobileNumberValido = /^[0-9]{10}$/;
    if(mobileNumberValido.test(mobileNumber.value)){
        mensajeMobileNumber.value="";
    }else{
        mensajeMobileNumber.value="El formato tiene que ser solo número";
        mobileNumberEvento.value="";
    }
    }

//function validate mail
export const mensajeMail= document.getElementById("mensajeMail");
export const MailEvento= document.getElementById("mail");
MailEvento.addEventListener("keypress", validarMail)
function validarMail(){
    let mail = document.getElementById("mail");
    let mailValido = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(mailValido.test(mail.value)){
        mensajeMail.value="";
    }else{
        mensajeMail.value="El formato tiene que ser un mail";
    }
}
MailEvento.addEventListener("focusout", validarMailDesFocus)
function validarMailDesFocus(){
    let mail = document.getElementById("mail");
    let mailValido = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(mailValido.test(mail.value)){
        mensajeMail.value="";
    }else{
        mensajeMail.value="El formato tiene que ser un mail";
        MailEvento.value="";
    }
}


