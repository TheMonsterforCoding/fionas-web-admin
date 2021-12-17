import { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Modal from 'react-modal'
import { X, UserPlus, Edit2 } from '@styled-icons/feather'

import { Button } from '../../Button'
import styles from './styles.module.scss'
import api from '../../../services/api'

interface UpdateEmployeeTypeProps {
  isOpen: boolean
  onRequestClose: () => void
  idEmployeeType: string
}

interface EmployeeType {
  description: string
}

export function UpdateEmployeeTypeModal({
  isOpen,
  onRequestClose,
  idEmployeeType
}: UpdateEmployeeTypeProps) {
  const [employeeType, setEmployeeType] = useState<EmployeeType>({
    description: 'loading'
  })
  const [description, setDescription] = useState('')

  useEffect(() => {
    async function loadPetsData() {
      await api.get(`/employees_type/${idEmployeeType}`).then(response => {
        setEmployeeType(response.data)
      })
    }

    loadPetsData()
  }, [idEmployeeType])

  async function handleSubmit() {
    let newDescription = ''

    if (description === '') {
      newDescription = employeeType.description
    } else {
      newDescription = description
    }

    try {
      const response = await api.put(`/employees_type/${idEmployeeType}`, {
        description: newDescription
      })

      const status = response.status

      if (status === 200) {
        toast.success('Cargo atualizado com susseso!')

        setDescription('')

        onRequestClose()
      } else {
        toast.error('Cargo não atualizado!')
      }
    } catch (err) {
      console.log(err)
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
            <h2>Actualizar Cargo</h2>
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
                  placeholder={employeeType.description}
                  onChange={event => setDescription(event.target.value)}
                  required
                />
              </div>
            </fieldset>
            <footer>
              <div className={styles.ButtonAction}>
                <Button type="submit">
                  <Edit2 />
                  Editar
                </Button>
              </div>
            </footer>
          </form>
        </div>
      </Modal>
    </>
  )
}
