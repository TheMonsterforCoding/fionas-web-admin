import { useState } from 'react'

import { Pets } from "../../components/Pets";
import { CreatePetModal } from '../../components/Modal/CreatePetModal';
import { UpdatePetModal } from '../../components/Modal/UpdatePetModal';
import { nombreMascotaEvento } from '../../components/Modal/CreatePetModal/validacion';

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



  function validarNombreMascota(nombreMascota : string) {
    var encontrarNumero=new RegExp(/\d/);
    var mensajeNombreMascota = "";
    if(encontrarNumero.test(nombreMascota)){
      mensajeNombreMascota="El nombre de mascota no puede tener números"
    }else if(nombreMascota.length>=10){
       mensajeNombreMascota="Un nombre de mascota no puede tener más de 10 caracteres"
    }
    return mensajeNombreMascota
  }
  function validarSize(size:string){
    const mensajeSize= "";
    const encontrarLetra=new RegExp('\D');
    if(size.length==2){
        var textoAnterior=size[1];
        size.replace(textoAnterior, ',');
        size.replace(",", ','+textoAnterior);

    }else if(size.length>4){
       textoAnterior=size[0]+size[1]+size[2];
    }
    if(encontrarLetra.test(size)){
        size=""
    }
  }
  function validarBreed(breed:string){
    var mensajeBreed="";
    if(breed.length>=6){
      mensajeBreed="La breed no puede tener más de 6 caracteres"
    }
    return mensajeBreed
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
