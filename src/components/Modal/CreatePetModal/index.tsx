import { useState, FormEvent } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Modal from 'react-modal'
import { X, UserPlus } from '@styled-icons/feather'

import { usePets } from '../../../hooks/usePets'
import { useUsers } from '../../../hooks/useUsers'
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
  const { users } = useUsers()

  const [name, setName] = useState('')
  const [size, setSize] = useState('')
  const [gender, setGender] = useState(true)
  const [yearOfBirth, setYearOfBirth] = useState(1900)
  const [breed, setBreed] = useState('')
  const [state, setState] = useState(false)

  const [owner, setOwner] = useState(0)

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

    const response = await createPet(data)

    const status = response.status

    if (status === 200) {
      toast.success('Pet registrado!')

      setName('')
      setSize('')
      setGender(true)
      setYearOfBirth(1900)
      setBreed('')
      setState(false)

      onRequestClose()
    } else {
      toast.error('Pet não registrado!')
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
            <h2>Criar Pet</h2>
            <X className={styles.buttonClose} onClick={onRequestClose} />
          </header>

          <form onSubmit={handleSubmit}>
            <fieldset>
              <div className={styles.createLeft}>
                <span className={styles.subtitleUserCreate}>
                  Detalhes do Pet
                </span>
                {/* --------------- Name --------------- */}
                <div className={styles.inputBlock}>
                  <label htmlFor="name">Nome</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={event => setName(event.target.value)}
                    required
                  />
                </div>

                {/* --------------- Owner --------------- */}
                <div className={styles.inputBlock}>
                  <label htmlFor="owner">Dono</label>
                  <div className={styles.selectBlock}>
                    <select
                      name="owner"
                      id="owner"
                      required
                      onChange={event => setOwner(Number(event.target.value))}
                    >
                      <option value="">Seleccione</option>
                      {users.map(user => {
                        return (
                          <option value={user.id} key={user.id}>
                            {user.first_name} {user.last_name} ({user.cpf})
                          </option>
                        )
                      })}
                    </select>
                  </div>
                </div>

                {/* --------------- Year of Birth --------------- */}
                <div className={styles.inputBlock}>
                  <label htmlFor="yearOfBirth">Ano de Nacimento</label>
                  <input
                    type="number"
                    id="yearOfBirth"
                    value={yearOfBirth}
                    onChange={event =>
                      setYearOfBirth(Number(event.target.value))
                    }
                    placeholder="Ano de nascimento"
                    required
                  />
                </div>

                {/* --------------- Gender --------------- */}
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
                      Fêmea
                    </button>
                  </div>
                </div>
              </div>

              <div className={styles.createCenter}>
                <span className={styles.subtitleUserCreate}>
                  Detalhes Especificos
                </span>
                {/* --------------- Breed --------------- */}
                <div className={styles.inputBlock}>
                  <label htmlFor="breed">Raça</label>
                  <div className={styles.selectBlock}>
                    <select
                      name="breed"
                      id="breed"
                      required
                      onChange={event => setBreed(event.target.value)}
                    >
                      <option value="">Seleccione</option>
                      <option value="buldogue">Buldogue</option>
                      <option value="pastor_alemao">Pastor Alemão</option>
                      <option value="labrador">Labrador</option>
                      <option value="husky_siberiano">Husky Siberiano</option>
                      <option value="dachshund">Dachshund</option>
                      <option value="yorkshire">Yorkshire</option>
                      <option value="pug">Pug</option>
                      <option value="maltes">Maltês</option>
                      <option value="border_collie">Border Collie</option>
                      <option value="cocker_spaniel">Cocker Spaniel</option>
                      <option value="other">Outro..</option>
                    </select>
                  </div>
                </div>

                {/* --------------- Size --------------- */}
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

                {/* --------------- State --------------- */}
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
