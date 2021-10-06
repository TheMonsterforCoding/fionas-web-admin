import { useState } from 'react'
import Modal from 'react-modal'

interface CreatePetModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function CreatePetModal({ isOpen, onRequestClose }: CreatePetModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <h1>Create Pet Modal</h1>
    </Modal>
  )
}
