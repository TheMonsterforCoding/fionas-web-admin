import { useState } from 'react'
import Modal from 'react-modal'

interface CreateUserModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function CreateUserModal({ isOpen, onRequestClose }: CreateUserModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <h1>Create User Modal</h1>
    </Modal>
  )
}
