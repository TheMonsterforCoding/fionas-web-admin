import { useState, FormEvent, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Modal from 'react-modal'
import { X, UserPlus } from '@styled-icons/feather'

import { usePets } from '../../../hooks/usePets'
import { useUsers } from '../../../hooks/useUsers'
import { useCustomers } from '../../../hooks/useCustomers'
import { useCustomerHasPets } from '../../../hooks/useCustomerHasPets'
import { Button } from '../../Button'

import styles from './styles.module.scss'

interface CreatePetModalProps {
  isOpen: boolean
  onRequestClose: () => void
  validarNombreMascota:(nombreMascota: string) => any[]
  validarBreed:(breed: string)=> any[]
  validarYear:(year: string)=> any[]
}

export function CreatePetModal({
  isOpen,
  onRequestClose,
  validarNombreMascota,
  validarBreed,
  validarYear
}: CreatePetModalProps) {
  const { createPet } = usePets()
  const { createCustomerHasPet } = useCustomerHasPets()
  const { users } = useUsers()
  const { customers } = useCustomers()
  const { pets } = usePets()
  const customersFiltered = users.filter(user => {
    return customers.some(customer => {
      return customer.customers_users_id === user.id
    })
  })

  const [name, setName] = useState('')
  const [size, setSize] = useState('')
  const [gender, setGender] = useState(true)
  var [yearOfBirth, setYearOfBirth] = useState(1980)
  const [breed, setBreed] = useState('')
  const [state, setState] = useState(false)
  let customers_has_pets_pets_id
  let customers_has_pets_customers_id
  const [owner, setOwner] = useState('')
//validaciones
//nombre
  var arrayValidarNombreMascota= validarNombreMascota(name);
  var nombreMascota=arrayValidarNombreMascota[0];
  var mensajeNombreMascota=arrayValidarNombreMascota[1];
  var validadorNombreMascota=arrayValidarNombreMascota[2];
  //validar raza
  var arrayValidarBreed= validarBreed(breed);
  var raza=arrayValidarBreed[0];
  var mensajeBreed=arrayValidarBreed[1];
  var validadorBreed=arrayValidarBreed[2];
  //validar año
  var arrayValidarYear= validarYear(yearOfBirth.toString());
  yearOfBirth=arrayValidarYear[0];
  var mensajeYearMascota=arrayValidarYear[1];
  var validadorYearMascota=arrayValidarYear[2];


  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    if(validadorNombreMascota && validadorYearMascota){
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
      setName('')
      setSize('')
      setGender(true)
      setYearOfBirth(1900)
      setBreed('')
      setState(false)
      customers_has_pets_pets_id =
        (pets[pets.length - 1].id as unknown as number) + 1

      var customerId = customers.filter(user => {
        return user.customers_users_id === owner
      })
      customers_has_pets_customers_id = customerId[0].id
      handleCreateCustomerHasPet()
    } else {
      toast.error('Pet não registrado!')
    }  
  } else {
    toast.error('Pet não registrado!')
    event.preventDefault()
  }  

  }

  async function handleCreateCustomerHasPet() {
    const data = {
      customers_has_pets_pets_id,
      customers_has_pets_customers_id
    }
    const response = await createCustomerHasPet(data)

    const status = response.status
    if (status === 200) {
      toast.success('Pet registrado!')
      onRequestClose()
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
                  <label>{mensajeNombreMascota}</label>
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
                      onChange={event => setOwner(event.target.value)}
                    >
                      <option>Seleccione</option>
                      {customersFiltered.map(user => {
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
                  <label>{mensajeYearMascota}</label>
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
                  <label>{mensajeBreed}</label>
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
                      <option value="Pequeño">Pequeno</option>
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
