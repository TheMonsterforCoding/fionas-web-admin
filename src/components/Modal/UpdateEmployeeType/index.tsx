import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Modal from 'react-modal'
import { X, UserPlus } from '@styled-icons/feather'

import { Button } from '../../Button'
import styles from './styles.module.scss'

interface UpdateEmployeeTypeProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function UpdateEmployeeTypeModal({
  isOpen,
  onRequestClose
}: UpdateEmployeeTypeProps) {
  const [description, setDescription] = useState('')

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        className={styles.Modal}
        overlayClassName={styles.Overlay}
      >
        <div className={styles.wrapper}>
          <header>
            <h2>Actualizar Cargo</h2>
            <X className={styles.buttonClose} onClick={onRequestClose} />
          </header>
          <form onSubmit={() => {}}>
            <fieldset>
              <span className={styles.subtitle}>Cargo a ser ocupado</span>
              {/* --------------- Description --------------- */}
              <div className={styles.inputBlock}>
                <label htmlFor="description">Descrição</label>
                <input
                  type="text"
                  id="description"
                  value={description}
                  onChange={event => setDescription(event.target.value)}
                  required
                />
              </div>
            </fieldset>
            <footer>
              <div className={styles.ButtonAction}>
                <Button type="submit">
                  <UserPlus />
                  Criar
                </Button>
              </div>
            </footer>
          </form>
        </div>
      </Modal>
    </>
  )
}
