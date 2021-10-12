import Modal from 'react-modal'

import { X } from '@styled-icons/feather'

import styles from './styles.module.scss'

interface CreatePetModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function CreatePetModal({ isOpen, onRequestClose }: CreatePetModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.Modal}
      overlayClassName={styles.Overlay}
    >
      <div className={styles.wrapper}>
        <header>
          <h2>Criar Pet</h2>
          <X className={styles.buttonClose} onClick={onRequestClose} />
        </header>

      </div>
    </Modal>
  )
}
