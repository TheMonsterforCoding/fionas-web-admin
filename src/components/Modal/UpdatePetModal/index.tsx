import Modal from 'react-modal'

interface UpdatePetModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function UpdatePetModal({ isOpen, onRequestClose }: UpdatePetModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <h1>Update Pet Modal</h1>
    </Modal>
  )
}
