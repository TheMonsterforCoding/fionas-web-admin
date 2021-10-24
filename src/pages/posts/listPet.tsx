import { useState } from 'react'

import { Pets } from "../../components/Pets";
import { CreatePetModal } from '../../components/Modal/CreatePetModal';
import { UpdatePetModal } from '../../components/Modal/UpdatePetModal';

export default function listPet() {
  const [isUpdatePetModal, setIsUpdatePetModal ] = useState(false)
  const [isCreatePetModal, setIsCreatePetModal ] = useState(false)

  function handleOpenUpdatePetModal() {
    setIsUpdatePetModal(true)
  }

  function handleCloseUpdatePetModal() {
    setIsUpdatePetModal(false)
  }

  function handleOpenCreatePetModal() {
    setIsCreatePetModal(true)
  }

  function handleCloseCreatePetModal() {
    setIsCreatePetModal(false)
  }


//validar nombre de la mascota
  function validarNombreMascota(nombreMascota : string) {
    var encontrarNumero=new RegExp(/\d/);
    var mensajeNombreMascota = "";
    if(encontrarNumero.test(nombreMascota)){
      mensajeNombreMascota="El nombre de mascota no puede tener números"
    }else if(nombreMascota.length>=10){
       mensajeNombreMascota="Un nombre de mascota no puede tener más de 10 caracteres"
    }
    return [nombreMascota,mensajeNombreMascota]
  }
  //validar tamaño
  function validarSize(size:string){
    var mensajeSize= "";
    const encontrarLetra=new RegExp(/\D/);
    if(size.length>3){
       size=size[0]+size[1]+size[2];
    }
    if(encontrarLetra.test(size)){
      mensajeSize="No sé puede poner caracteres que no sean numeros"
    }
    return[size,mensajeSize]
  }
  //validar raza
  function validarBreed(breed:string){
    var mensajeBreed="";
    if(breed.length>=6){
      mensajeBreed="La breed no puede tener más de 6 caracteres"
    }
    return [breed,mensajeBreed]
  }


  return (
    <>
      <Pets onOpenUpdatePetModal={handleOpenUpdatePetModal} onOpenCreatePetModal={handleOpenCreatePetModal} />

      <UpdatePetModal isOpen={isUpdatePetModal} onRequestClose={handleCloseUpdatePetModal} />
      <CreatePetModal isOpen={isCreatePetModal}
       onRequestClose={handleCloseCreatePetModal} 
       validarNombreMascota={validarNombreMascota}
       validarSize={validarSize}
       validarBreed={validarBreed} />
    </>

  )
}
