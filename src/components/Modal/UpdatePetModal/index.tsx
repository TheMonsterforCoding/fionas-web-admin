import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Modal from 'react-modal'
import { X } from '@styled-icons/feather'

import api from '../../../services/api'
import { Button } from '../../Button'

import styles from './styles.module.scss'

type UpdatePetModalProps = {
  isOpen: boolean
  onRequestClose: () => void
  idPet: string
}

type PetType = {
  petId: string
  name: string
  gender: boolean
  year_of_birth: string
  size: string
  breed: string
  state: boolean
  createAt: string
  dueñoMascota: string
}

export function UpdatePetModal({
  isOpen,
  onRequestClose,
  idPet
}: UpdatePetModalProps) {
  const [pets, setPets] = useState<PetType>({
    petId: 'loading',
    name: 'loading',
    gender: true,
    year_of_birth: 'loading',
    size: 'loading',
    breed: 'loading',
    state: true,
    createAt: 'loading',
    dueñoMascota: 'loading'
  })

  const [name, setName] = useState('')
  const [gender, setGender] = useState(true)
  const [yearOfBirth, setYearOfBirth] = useState('')
  const [size, setSize] = useState('')
  const [breed, setBreed] = useState('')
  const [state, setState] = useState(true)

  useEffect(() => {
    async function loadPetsData() {
      await api.get(`/pets/${idPet}`).then(response => {
        setPets(response.data)
      })
    }

    loadPetsData()
  }, [idPet])

  async function handleSubmit() {
    let newName = ''
    let newGender = true
    let newYearOfBirth = ''
    let newSize = ''
    let newBreed = ''
    let newState = true

    if (name === '') {
      newName = pets.name
    } else {
      newName = name
    }

    if (gender === pets.gender) {
      newGender = pets.gender
    } else {
      newGender = gender
    }

    if (yearOfBirth === '') {
      newYearOfBirth = pets.year_of_birth
    } else {
      newYearOfBirth = yearOfBirth
    }

    if (size === '') {
      newSize = pets.size
    } else {
      newSize = size
    }

    if (breed === '') {
      newBreed = pets.breed
    } else {
      newBreed = breed
    }

    if (state === pets.state) {
      newState = pets.state
    } else {
      newState = state
    }

    try {
      const response = await api.put(`/pets/${idPet}`, {
        name: newName,
        gender: newGender,
        year_of_birth: newYearOfBirth,
        size: newSize,
        breed: newBreed,
        state: newState
      })

      const status = response.status

      if (status === 200) {
        toast.success('Pet atualizado com susseso!')

        setName('')
        setGender(true)
        setYearOfBirth('')
        setSize('')
        setBreed('')
        setState(true)

        onRequestClose()
      } else {
        toast.error('Pet não atualizado!')
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
            <h2>Editar Mascota</h2>
            <X className={styles.buttonClose} onClick={onRequestClose} />
          </header>

          <div className={styles.userContainer}>
            <div className={styles.userShow}>
              <header>
                <div className={styles.userShowHeaderInfo}>
                  <span className={styles.name}> {pets.dueñoMascota}</span>
                </div>
              </header>

              <main>
                <span className={styles.titleMain}>Detalhes do Pet</span>
                <div className={styles.userInfo}>
                  <span>
                    {pets.name} de {pets.dueñoMascota}
                  </span>
                </div>
                <div className={styles.userInfo}>
                  {pets.gender ? <span>masculino</span> : <span>Femenino</span>}
                </div>
                <div className={styles.userInfo}>
                  <span>{pets.year_of_birth}</span>
                </div>
                <div className={styles.userInfo}>
                  <span>{pets.createAt}</span>
                </div>
                <div className={styles.userInfo}>
                  <span>{pets.breed}</span>
                </div>
                <div className={styles.userInfo}>
                  <span>{pets.size}</span>
                </div>
                <div className={styles.userInfo}>
                  {pets.state ? (
                    <span>estado: Ativo</span>
                  ) : (
                    <span>estado: Inativo</span>
                  )}
                </div>
              </main>
            </div>

            <div className={styles.userUpdate}>
              <h3>Atualizar Dados</h3>

              <form onSubmit={handleSubmit}>
                <fieldset>
                  <div className={styles.fieldsetLeft}>
                    {/* --------------- Name --------------- */}
                    <div className={styles.inputBlock}>
                      <label htmlFor="name">Nome</label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        placeholder={pets.name}
                        onChange={event => setName(event.target.value)}
                      />
                    </div>

                    {/* --------------- Gender --------------- */}
                    <div className={styles.inputBlock}>
                      <label htmlFor="gender">Gênero</label>
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

                    {/* --------------- Year Of Birth --------------- */}
                    <div className={styles.inputBlock}>
                      <label htmlFor="yearOfBirth">Ano de Nacimento</label>
                      <input
                        type="text"
                        id="yearOfBirth"
                        value={yearOfBirth}
                        placeholder={pets.year_of_birth}
                        onChange={event => setYearOfBirth(event.target.value)}
                      />
                    </div>
                  </div>

                  <div className={styles.fieldsetRight}>
                    {/* --------------- Size --------------- */}
                    <div className={styles.inputBlock}>
                      <label htmlFor="size">Tamanho</label>
                      <div className={styles.selectBlock}>
                        <select
                          name="size"
                          id="size"
                          onChange={event => setSize(event.target.value)}
                        >
                          <option value="">Seleccione</option>
                          <option value="Grande">Grande</option>
                          <option value="Mediano">Mediano</option>
                          <option value="Pequeño">Pequeno</option>
                        </select>
                      </div>
                    </div>

                    {/* --------------- Breed --------------- */}
                    <div className={styles.inputBlock}>
                      <label htmlFor="breed">Raça</label>
                      <div className={styles.selectBlock}>
                        <select
                          name="breed"
                          id="breed"
                          onChange={event => setBreed(event.target.value)}
                        >
                          <option value="">Seleccione</option>
                          <option value="buldogue">Buldogue</option>
                          <option value="pastor_alemao">Pastor Alemão</option>
                          <option value="labrador">Labrador</option>
                          <option value="husky_siberiano">
                            Husky Siberiano
                          </option>
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
                    <Button type="submit">Criar</Button>
                  </div>
                </footer>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}
