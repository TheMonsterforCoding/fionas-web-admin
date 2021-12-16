import { useState, FormEvent } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Modal from 'react-modal'
import { X, UserPlus } from '@styled-icons/feather'

import { Button } from '../../Button'
import { useEmployessType } from '../../../hooks/useEmployeesType'
import styles from './styles.module.scss'

interface CreateEmployeeTypeProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function CreateEmployeeTypeModal({
  isOpen,
  onRequestClose
}: CreateEmployeeTypeProps) {
  const { createEmployeeType } = useEmployessType()

  const [description, setDescription] = useState('')

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const response = await createEmployeeType({ description })

    const status = response.status

    if (status === 200) {
      toast.success('Cargo criado!')

      setDescription('')

      onRequestClose()
    } else {
      toast.error('O cargo não foi criado!')
    }
  }

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
            <h2>Criar Cargo</h2>
            <X className={styles.buttonClose} onClick={onRequestClose} />
          </header>
          <form onSubmit={handleSubmit}>
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
