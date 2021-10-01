import { useState } from 'react'

import { UpdateUserModal } from '../../components/UpdateUserModal'

import { Users } from '../../components/Users'

export default function listUser() {
  const [isUpdateUserModal, setIsUpdateUserModal] = useState(false)

  function handleOpenUpdateUserModal() {
    setIsUpdateUserModal(true)
  }

  function handleCloseUpdateUserModal() {
    setIsUpdateUserModal(false)
  }

  return (
    <div style={{ display: 'flex' }}>
      <Users onOpenUpdateUserModal={handleOpenUpdateUserModal} />

      <UpdateUserModal
        isOpen={isUpdateUserModal}
        onRequestClose={handleCloseUpdateUserModal}
      />
    </div>
  )
}
