import { useState } from 'react'
import { CreateUserModal } from '../../components/Modal/CreateUserModal'

import { UpdateUserModal } from '../../components/Modal/UpdateUserModal'

import { Users } from '../../components/Users'

export default function listUser() {
  const [isUpdateUserModal, setIsUpdateUserModal] = useState(false)
  const [isCreateUserModal, setIsCreateUserModal] = useState(false)

  function handleOpenUpdateUserModal() {
    setIsUpdateUserModal(true)
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

  return (
    <div style={{ display: 'flex' }}>
      <Users onOpenUpdateUserModal={handleOpenUpdateUserModal} onOpenCreateUserModal={handleOpenCreateUserModal} />

      <UpdateUserModal
        isOpen={isUpdateUserModal}
        onRequestClose={handleCloseUpdateUserModal}
      />

      <CreateUserModal
        isOpen={isCreateUserModal}
        onRequestClose={handleCloseCreateUserModal}
      />
    </div>
  )
}
