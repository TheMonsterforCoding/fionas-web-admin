import { useState } from 'react'
import { CreateUserModal } from '../../components/Modal/CreateUserModal'

import { UpdateUserModal } from '../../components/Modal/UpdateUserModal'

import { Users } from '../../components/Users'

export default function listUser() {
  const [isUpdateUserModal, setIsUpdateUserModal] = useState(false)
  const [isCreateUserModal, setIsCreateUserModal] = useState(false)
  const [idUserToUpdate, setIdUserToUpdate] = useState('')

  // console.log(idUserToUpdate)

  function handleOpenUpdateUserModal(id: string) {
    setIsUpdateUserModal(true)

    // console.log(id)
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
  
   function validarFirstName(firstName: string){
    var mensajeFirstName="";
    var nombreValido = /\d/;
    if(firstName.length>=1){
    if(nombreValido.test(firstName)){
         mensajeFirstName="";
    }else{
        mensajeFirstName="No se permiten números en el nombre"
    }
   }
    return [firstName,mensajeFirstName];
 }


 //Funcion para validar las contraseñas
 function validarPassword(password:string,password2:string){
   console.log(password)
  var passwordValido = /^[a-zA-Z0-9]{6,}$/;
  var  mensajePassword="";
  if(password.length>=1){

    if(password!==password2){
      mensajePassword="las contraseña no son iguales"
    }
    if(passwordValido.test(password) && password==password2){
    mensajePassword="";
  }else if(!passwordValido.test(password)){
    mensajePassword="la contraseña tiene que tener letras, números, un minimo de caractes de 6 y un máximo de 12 ";
  }
  else if(password.length>12){
    mensajePassword="La contraseña no puede ser mayor a 12 caracteres"
  }
}
  return [password,password2,mensajePassword]
}
//Funcion para mail
function validarMail(mail:string){
  var mensajeMail=""; 
  if(mail.length>=1){
  let mailValido = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if(mailValido.test(mail)){
      mensajeMail="";
  }else{
      mensajeMail="El formato tiene que ser un mail";
  }
}
  return [mail,mensajeMail]
}
//función para celular

function validarMobileNumber(mobileNumber:string){
  var mensajeMobileNumber=""
  let mobileNumberValido = /\d/;
  if(mobileNumber.length>=1){
  if(mobileNumberValido.test(mobileNumber)){
      mensajeMobileNumber=""
  }else{
      mensajeMobileNumber="El formato tiene que ser solo número";
  }
  }
  return [mobileNumber,mensajeMobileNumber]
  }
//validar cpf
function validarCpf(cpf:string){
  var mensajeCPF=""
  let cpfValido = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$$/;
  if(cpf.length>=1){
  if(cpfValido.test(cpf)){
      mensajeCPF=""
  }else{
      mensajeCPF="El formato del cpf es incorrecto xxx.xxx.xxx-xx";
  }
}
  return [cpf,mensajeCPF]
  }
//function validar address
function validarAddress(address:string){
  var mensajeAddress=""
  if(address.length>=1){
    if (address.length>25){
      mensajeAddress="La dirección no puede tener más de 25 caracteres"
    }
  }
  return[address,mensajeAddress]
}
//function validar apellido
function validarLastName(lastName:string){
  var mensajeLastName=""
  var apellidoValido = /^[a-zA-Z]{6,}$/;
  if(lastName.length>=1){
    if(apellidoValido.test(lastName)){
          mensajeLastName="";
    }else{
      mensajeLastName="No se puede tener menos de 6 caracteres o números. "
    }
  }
  return [lastName,mensajeLastName]
}

  return (
    <div style={{ display: 'flex' }}>
      <Users
        onOpenUpdateUserModal={handleOpenUpdateUserModal}
        onOpenCreateUserModal={handleOpenCreateUserModal}
      />

      <UpdateUserModal
        idUser={idUserToUpdate}
        isOpen={isUpdateUserModal}
        onRequestClose={handleCloseUpdateUserModal}
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
      />
    </div>
  )
}
