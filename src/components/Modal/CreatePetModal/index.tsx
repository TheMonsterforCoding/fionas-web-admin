import { useState, FormEvent } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Modal from 'react-modal'
import { X, UserPlus } from '@styled-icons/feather'

import { usePets } from '../../../hooks/usePets'
import { Button } from '../../Button'

import styles from './styles.module.scss'

interface CreatePetModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function CreatePetModal({
  isOpen,
  onRequestClose
}: CreatePetModalProps) {
  const { createPet } = usePets()

  const [name, setName] = useState('')
  const [size, setSize] = useState('')
  const [gender, setGender] = useState(false)
  const [yearOfBirth, setYearOfBirth] = useState(1900)
  const [breed, setBreed] = useState('')
  const [state, setState] = useState(false)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const data = {
      name,
      size,
      gender,
      year_of_birth: yearOfBirth,
      breed,
      state
    }

    await createPet(data)

    onRequestClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.Modal}
      overlayClassName={styles.Overlay}
    >
      <div className={styles.wrapper}>
        <div>
          <Toaster position="top-center" reverseOrder={false} />
        </div>

        <header>
          <h2>Criar Pet</h2>
          <X className={styles.buttonClose} onClick={onRequestClose} />
        </header>

        <form onSubmit={handleSubmit}>
          <fieldset>
            <div className={styles.userCreateLeft}>
              <span className={styles.subtitleUserCreate}>Detalhes do Pet</span>

              <div className={styles.inputBlock}>
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={event => setName(event.target.value)}
                  placeholder="Nome Pet"
                  required
                />
              </div>

              <div className={styles.inputBlock}>
                <label htmlFor="yearOfBirth">Ano de Nacimento</label>
                <input
                  type="number"
                  id="yearOfBirth"
                  value={yearOfBirth}
                  onChange={event => setYearOfBirth(Number(event.target.value))}
                  placeholder="Ano de nascimento"
                  required
                />
              </div>

              <div className={styles.inputBlock}>
                <label htmlFor="genderId">Gênero</label>
                <div className={styles.selectTypeContainer}>
                  <button
                    type="button"
                    onClick={() => setGender(true)}
                    className={gender ? styles.active : styles.disabled}
                  >
                    Macho
                  </button>

                  <button
                    type="button"
                    onClick={() => setGender(false)}
                    className={!gender ? styles.active : styles.disabled}
                  >
                    Femea
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.userCreateCenter}>
              <div className={styles.inputBlock}>
                <label htmlFor="breed">Raça</label>
                <input
                  type="text"
                  id="breed"
                  value={breed}
                  onChange={event => setBreed(event.target.value)}
                  placeholder="Raza"
                  required
                />
              </div>

              <div className={styles.inputBlock}>
                <label htmlFor="size">Tamanho</label>
                <div className={styles.selectBlock}>
                  <select
                    name="size"
                    id="size"
                    required
                    onChange={event => setSize(event.target.value)}
                  >
                    <option value="">Seleccione</option>
                    <option value="Grande">Grande</option>
                    <option value="Mediano">Mediano</option>
                    <option value="Pequeño">Pequeño</option>
                  </select>
                </div>
              </div>

              <div className={styles.inputBlock}>
                <label htmlFor="state">Estado</label>
                <div className={styles.selectTypeContainer}>
                  <button
                    type="button"
                    onClick={() => setState(true)}
                    className={state ? styles.active : styles.disabled}
                  >
                    Ativo
                  </button>

                  <button
                    type="button"
                    onClick={() => setState(false)}
                    className={!state ? styles.active : styles.disabled}
                  >
                    Inativo
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.userCreateRight}>
              <Button type="submit">
                <UserPlus />
                Criar
              </Button>
            </div>
          </fieldset>
        </form>
      </div>
    </Modal>
  )
}
