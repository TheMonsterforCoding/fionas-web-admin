import { useState } from 'react'
import { CreateUserModal } from '../../components/Modal/CreateUserModal'
import { UpdateUserModal } from '../../components/Modal/UpdateUserModal'
import { ViewCustomerHasPetModal } from "../../components/Modal/ViewCustomerHasPetModal"
import { Customers } from '../../components/Customers'

export default function listUser() {
  const [isUpdateUserModal, setIsUpdateUserModal] = useState(false)
  const [isCreateUserModal, setIsCreateUserModal] = useState(false)
  const [isViewCustomerHasPetModal, setViewCustomerHasPetModal] = useState(false)
  const [idUserToUpdate, setIdUserToUpdate] = useState('')

  function handleOpenUpdateUserModal(id: string) {
    setIsUpdateUserModal(true)

    setIdUserToUpdate(id)
  }

  function handleCloseUpdateUserModal() {
    setIsUpdateUserModal(false)
  }

  function handleOpenCreateUserModal() {
    setIsCreateUserModal(true)
  }

  function handleCloseCreateUserModal() {
    setIsCreateUserModal(false)
  }
  function handleOpenViewCustomerHasPetModal(id: string) {
    setViewCustomerHasPetModal(true)
    setIdUserToUpdate(id)
  }
  function handleCloseViewCustomerHasPetModal() {
    setViewCustomerHasPetModal(false)
  }
//funcion para validar el primer nombre
function validarFirstName(firstName: string){
  var mensajeFirstName="";
  var validador=false;
  var nombreValido = /\D/;
  if(firstName.length>=1){
  if(nombreValido.test(firstName)){
       mensajeFirstName="";
       validador=true;
  }else{
      mensajeFirstName="No se permiten números en el nombre"
  }
 }
 var a=[]
 a=[firstName,mensajeFirstName,validador];
  return a;
}


//Funcion para validar las contraseñas
function validarPassword(password:string,password2:string){
 console.log(password)
 var validador=false;
var passwordValido = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}$/;
var mensajePassword="";
if(password.length>=1 || password2.length>=1){

  if(password!==password2){
    mensajePassword="las contraseña no son iguales"
    validador=false;
  }
  if(passwordValido.test(password) && password==password2){
  mensajePassword="";
  validador=true;

} 
if(!passwordValido.test(password)){
  mensajePassword="la contraseña tiene que tener letras, números, un minimo de caractes de 6 y un máximo de 16 ";
  validador=false;
}
if(password.length>16){
  mensajePassword="La contraseña no puede ser mayor a 16 caracteres"
  validador=false;
}
if(password2!=password && password2.length>=1){
  mensajePassword="Las contraseñas no coinciden"
 }
}
var a=[]
a=[password,password2,mensajePassword,validador];
return a
}
//Funcion para mail
function validarMail(mail:string){
var validador=false;
var mensajeMail=""; 
if(mail.length>=1){
let mailValido = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
if(mailValido.test(mail)){
    mensajeMail="";
    validador=true;
}else{
    mensajeMail="El formato tiene que ser un mail";
}
}
var a=[]
a=[mail,mensajeMail,validador];
return a
}
//función para celular
function validarMobileNumber(mobileNumber:string){
var validador=false;
var mensajeMobileNumber=""
let mobileNumberValido = /\d/;
if(mobileNumber.length>=1){
if(mobileNumberValido.test(mobileNumber)){
    mensajeMobileNumber=""
    validador=true;
}else{
    mensajeMobileNumber="El formato tiene que ser solo número";
}
}
var a=[]
a=[mobileNumber,mensajeMobileNumber,validador];
return a
}
//validar cpf
function validarCpf(cpf:string){
var validador=false;
var mensajeCPF=""
let cpfValido = /^\d{3}\d{3}\d{3}\d{2}$$/;
if(cpf.length>=1){
if(cpfValido.test(cpf)){
    mensajeCPF=""
    validador=true;
}else{
    mensajeCPF="El formato del cpf es incorrecto xxx.xxx.xxx-xx";
}
}
var a=[]
a=[cpf,mensajeCPF,validador];
return a
}
//function validar address
function validarAddress(address:string){
var validador=false;
var mensajeAddress=""
if(address.length>=1){
  if (address.length>25){
    mensajeAddress="La dirección no puede tener más de 25 caracteres"
  }else{
    validador=true;
  }
}
var a=[]
a=[address,mensajeAddress,validador];
return a
}
//function validar apellido
function validarLastName(lastName:string){
var validador=false;
var mensajeLastName=""
var apellidoValido = /^[a-zA-Z]{3,}$/;
if(lastName.length>=1){
  if(apellidoValido.test(lastName)){
        mensajeLastName="";
        validador=true;
  }else{
    mensajeLastName="No se puede tener menos de 3 caracteres o números. "
  }
}
var a=[]
a=[lastName,mensajeLastName,validador];
return a
}
function validarYear(year:string){
  var validador=false;
  var mensajeYear="";
  var yearInt=parseInt(year)
  var today = new Date();
  var ano = today.getFullYear();
  var anoValido=ano-yearInt;
  if(anoValido>7 && anoValido<=100){
    validador=true
  }else{
    validador=false
    mensajeYear="La edad de nacimiento no puede ser mayor a 100 ni menor a 7"
  }
  var a=[year,mensajeYear,validador,];
  return a
}

  return (
    <div style={{ display: 'flex' }}>
      <Customers
        onOpenUpdateUserModal={handleOpenUpdateUserModal}
        onOpenCreateUserModal={handleOpenCreateUserModal}
        onOpenViewCustomerHasPetModal={handleOpenViewCustomerHasPetModal}
      />
      
      <UpdateUserModal
        idUser={idUserToUpdate}
        isOpen={isUpdateUserModal}
        onRequestClose={handleCloseUpdateUserModal}
        validarFirstName={validarFirstName}
        validarPassword={validarPassword}
        validarMail={validarMail}
        validarCpf={validarCpf}
        validarAddress={validarAddress}
        validarMobileNumber={validarMobileNumber}
        validarLastName={validarLastName}
        validarYear={validarYear}
      />
      <CreateUserModal
        isOpen={isCreateUserModal}
        onRequestClose={handleCloseCreateUserModal}
        validarFirstName={validarFirstName}
        validarPassword={validarPassword}
        validarMail={validarMail}
        validarCpf={validarCpf}
        validarAddress={validarAddress}
        validarMobileNumber={validarMobileNumber}
        validarLastName={validarLastName}
        validarYear={validarYear}
      />

     <ViewCustomerHasPetModal
        idUser={idUserToUpdate}
        isOpen={isViewCustomerHasPetModal}
        onRequestClose={handleCloseViewCustomerHasPetModal}
      />
    </div>
  )
}