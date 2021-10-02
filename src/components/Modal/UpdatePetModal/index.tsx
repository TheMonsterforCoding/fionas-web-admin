import { useState } from 'react'
import Modal from 'react-modal'

export function UpdatePetModal() {
  const [isUpdatePetModal, setIsUpdatePetModal ] = useState(false)

  function handleOpenUpdatePetModal() {
    setIsUpdatePetModal(true)
  }

  function handleCloseUpdatePetModal() {
    setIsUpdatePetModal(false)
  }

  return (
    <Modal
      isOpen={isUpdatePetModal}
      onRequestClose={handleCloseUpdatePetModal}
    >
      <h1>Update Pet Modal</h1>
    </Modal>
  )
}
