import { useState } from 'react'

import { CreatePetModal } from '../../components/Modal/CreatePetModal'
import { UpdatePetModal } from '../../components/Modal/UpdatePetModal'
import { Pets } from '../../components/Pets'

export default function listPet() {
  const [isUpdatePetModal, setIsUpdatePetModal] = useState(false)
  const [isCreatePetModal, setIsCreatePetModal] = useState(false)
  const [idPetsToUpdate, setIdPetsToUpdate] = useState('')

  function handleOpenUpdatePetModal(id: string) {
    setIsUpdatePetModal(true)

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

  return (
    <>
      <Pets
        onOpenUpdatePetModal={handleOpenUpdatePetModal}
        onOpenCreatePetModal={handleOpenCreatePetModal}
      />

      <UpdatePetModal
        isOpen={isUpdatePetModal}
        onRequestClose={handleCloseUpdatePetModal}
        idPet={idPetsToUpdate}
      />
      <CreatePetModal
        isOpen={isCreatePetModal}
        onRequestClose={handleCloseCreatePetModal}
      />
    </>
  )
}
