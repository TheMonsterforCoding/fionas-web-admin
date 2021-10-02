import { useState } from 'react'
import Modal from 'react-modal'

export function CreateUserModal() {
  const [isCreateUserModal, setIsCreateUserModal ] = useState(false)

  function handleOpenCreateUserModal() {
    setIsCreateUserModal(true)
  }

  function handleCloseCreateUserModal() {
    setIsCreateUserModal(false)
  }

  return (
    <Modal
      isOpen={isCreateUserModal}
      onRequestClose={handleCloseCreateUserModal}
    >
      <h1>Create User Modal</h1>
    </Modal>
  )
}
