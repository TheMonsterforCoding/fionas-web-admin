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
//funciones para validar nombre
   function validarFirstName(firstName: string){
    var mensajeFirstName="";
    var nombreValido = /^[a-zA-Z]{2,}$/;
    if(firstName.length>=1){
    if(nombreValido.test(firstName)){
         mensajeFirstName="";
    }else{
        mensajeFirstName="El nombre no es valido "
    }
   }
    return [firstName,mensajeFirstName];
 }
 function validarNombreOutFoco(firstName: string){
  var mensajeFirstName="";  
  let nombreValido = /^[a-zA-Z]{2,}$/;
    if(nombreValido.test(firstName)){
         mensajeFirstName="";
    }else{
        mensajeFirstName="El nombre tiene caaracteres equivocados"
        firstName="";
    }
    return [firstName,mensajeFirstName]
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
  let mailValido = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if(mailValido.test(mail)){
      mensajeMail="";
  }else{
      mensajeMail="El formato tiene que ser un mail";
  }
  return [mail,mensajeMail]
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
        validarNombreOutFoco={validarNombreOutFoco}
      />
    </div>
  )
}
