import Modal from 'react-modal'

import { X } from '@styled-icons/feather'

import styles from './styles.module.scss'

interface UpdatePetModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function UpdatePetModal({ isOpen, onRequestClose }: UpdatePetModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.Modal}
      overlayClassName={styles.Overlay}
    >
      <div className={styles.wrapper}>
        <header>
          <h2>Atualizar Pet</h2>

          <X className={styles.buttonClose} onClick={onRequestClose} />
        </header>
      </div>
    </Modal>
  )
}
