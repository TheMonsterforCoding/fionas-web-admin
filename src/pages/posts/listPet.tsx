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

  return (
    <>
      <Pets onOpenUpdatePetModal={handleOpenUpdatePetModal} onOpenCreatePetModal={handleOpenCreatePetModal} />

      <UpdatePetModal isOpen={isUpdatePetModal} onRequestClose={handleCloseUpdatePetModal} />
      <CreatePetModal isOpen={isCreatePetModal} onRequestClose={handleCloseCreatePetModal} />
    </>

  )
}
