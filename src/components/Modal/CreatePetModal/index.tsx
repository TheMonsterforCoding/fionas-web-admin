import React, { useState, FormEvent } from 'react'
import Modal from 'react-modal'
import toast, { Toaster } from 'react-hot-toast'

import { Button } from '../../Button'

import { X, Upload, UserPlus, Target } from '@styled-icons/feather'

import styles from './styles.module.scss'

import api from '../../../services/api'
import ReactDOM from 'react-dom';

interface CreatePetModalProps {
  isOpen: boolean
  onRequestClose: () => void
  validarNombreMascota(nombreMascota: string):() => []
  validarBreed(breed: string):() => []
  validarSize(size: string):() => []
}




export function CreatePetModal({ isOpen, onRequestClose, validarNombreMascota,validarBreed,validarSize }: CreatePetModalProps) {
  const [ id, setId] = useState('')
  // const [avatar, setAvatar] = useState('')
  var [nombreMascota, setNombreMascota] = useState('')
  var [size, setSize] = useState('')
  const [genderId, setGenderId] = useState(false)
  const [yearOfBirth, setYearOfBirth] = useState('')
  var [breed, setBreed] = useState('')
  const [createdAt, setCreatedAt] = useState('')
  const [dueño, setDueño] = useState('')
  const [state, setState] = useState(false)
  
  
  var arrayValidarNombreMascota= validarNombreMascota(nombreMascota);
  nombreMascota=arrayValidarNombreMascota[0];
  var mensajeNombreMascota=arrayValidarNombreMascota[1];
  //validar raza
  var arrayValidarBreed= validarBreed(breed);
  breed=arrayValidarBreed[0];
  var mensajeBreed=arrayValidarBreed[1];
  //validar tamaño
  var arrayValidarSize= validarSize(size);
  size=arrayValidarSize[0];
  var mensajeSize=arrayValidarSize[1];
  
  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    await api
    .post('/users', {
      id: id,
      nombreMascota: nombreMascota,
      size: size,
      genderId: genderId,
      yearOfBirth: yearOfBirth,
      breed: breed,
      createdAt: createdAt,
      dueño: dueño,
      state: state,
    })
    .then(function (response) {
      console.log(response)
      toast.success('Pet cadastrado com susseso!')

      setId('')
      setNombreMascota('')
      setSize('')
      setGenderId(false)
      setYearOfBirth('')
      setBreed('')
      setCreatedAt('')
      setDueño('')
      setState(false)

      onRequestClose()
    })
    .catch(function (error) {
      console.log(error)
      toast.error('Dados de Pet incorreto!')
    })
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
                <label id="mensajeNombreMascota">{mensajeNombreMascota}</label> 
                <label htmlFor="nombreMascota">Nome Pet</label>
                <input
                  type="text"
                  id="nombreMascota"
                  value={nombreMascota}
                  onChange={event => setNombreMascota(event.target.value)}
                  placeholder="Nome Pet"
                  required
                />
              </div>

              <div className={styles.inputBlock}>
              <label id="mensajeSize">{mensajeSize}</label> 
                <label htmlFor="size">Size</label>
                <input
                  type="text"
                  id="size"
                  value={size}
                  onChange={event => setSize(event.target.value)}
                  placeholder="Size"
                  required
                />
              </div>

              <div className={styles.inputBlock}>
              <label id="mensajeYearOfBirth"></label> 
                <label htmlFor="yearOfBirth">Ano de Nacimento</label>
                <input
                  type="date"
                  id="yearOfBirth"
                  value={yearOfBirth}
                  onChange={event => setYearOfBirth(event.target.value)}
                  placeholder="Ano de nascimento"
                  required
                />
              </div>


            </div>

            <div className={styles.userCreateCenter}>
              <span className={styles.subtitleUserCreate}>Pet</span>
              <div className={styles.inputBlock}>
              <label id="mensajeBreed">{mensajeBreed}</label> 
                <label htmlFor="breed">Raza</label>
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
                <label htmlFor="dueño">Dueño</label>
                <div className={styles.selectBlock}>
                 <select name="dueño" id="dueño" onChange={event => setDueño(event.target.value)}required>
                  <option value="">Selecione</option>
                  <option value="">Selecione</option>
                  <option value="">Selecione</option>
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

