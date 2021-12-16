import { useState } from 'react'

import { CreateUserModal } from '../../components/Modal/CreateUserModal'
import { UpdateUserModal } from '../../components/Modal/UpdateUserModal'
import { Customers } from '../../components/Customers'

export default function listUser() {
  const [isUpdateUserModal, setIsUpdateUserModal] = useState(false)
  const [isCreateUserModal, setIsCreateUserModal] = useState(false)
  const [idUserToUpdate, setIdUserToUpdate] = useState('')

  function handleOpenUpdateUserModal(id: string) {
    setIsUpdateUserModal(true)

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

  return (
    <div style={{ display: 'flex' }}>
      <Customers
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
      />
    </div>
  )
}