import { useState } from 'react'

import { Pets } from "../../components/Pets";
import { CreatePetModal } from '../../components/Modal/CreatePetModal';
import { UpdatePetModal } from '../../components/Modal/UpdatePetModal';

export default function listPet() {
  const [isUpdatePetModal, setIsUpdatePetModal ] = useState(false)
  const [isCreatePetModal, setIsCreatePetModal ] = useState(false)
  const [idPetsToUpdate, setIdPetsToUpdate] = useState('')

  function handleOpenUpdatePetModal(id: string) {
    setIsUpdatePetModal(true)

    // console.log(id)
    setIdPetsToUpdate(id)
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
    var validador=false
    var mensajeNombreMascota = "";
    if(encontrarNumero.test(nombreMascota)){
      mensajeNombreMascota="El nombre de mascota no puede tener números"
    }else if(!encontrarNumero.test(nombreMascota)){
      validador=true

    }else if(nombreMascota.length>=10){
       mensajeNombreMascota="Un nombre de mascota no puede tener más de 10 caracteres"
       validador=false
  }else if(nombreMascota.length==0){
    validador=false
  }
    return [nombreMascota,mensajeNombreMascota,validador]
  }

  //validar raza
  function validarBreed(breed:string){
    var validador=false;
    var mensajeBreed="";
    var encontrarNumero=new RegExp(/\d/);
    if(breed.length>1){
    
    if(breed.length>=12){
      mensajeBreed="La raza no puede tener más de 12 caracteres"
    }else if(breed.length<=2){
      mensajeBreed="La raza no puede tener menos de 2 caracteres"
    }else if(encontrarNumero.test(breed)){
      mensajeBreed="La raza no puede tener números"
    }else{
      validador=true
    }
  }
    return [breed,mensajeBreed, validador]
  }


  return (
    <>
      <Pets onOpenUpdatePetModal={handleOpenUpdatePetModal} onOpenCreatePetModal={handleOpenCreatePetModal}  />

      <UpdatePetModal isOpen={isUpdatePetModal} onRequestClose={handleCloseUpdatePetModal} idPet={idPetsToUpdate}/>
      <CreatePetModal isOpen={isCreatePetModal}
       onRequestClose={handleCloseCreatePetModal} 
       validarNombreMascota={validarNombreMascota}
       validarBreed={validarBreed} />
    </>

  )
}
