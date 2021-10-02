import { useState } from 'react'
import Modal from 'react-modal'

export function CreatePetModal() {
  const [isCreatePetModal, setIsCreatePetModal ] = useState(false)

  function handleOpenCreatePetModal() {
    setIsCreatePetModal(true)
  }

  function handleCloseCreatePetModal() {
    setIsCreatePetModal(false)
  }

  return (
    <Modal
      isOpen={isCreatePetModal}
      onRequestClose={handleCloseCreatePetModal}
    >
      <h1>Create Pet Modal</h1>
    </Modal>
  )
}
