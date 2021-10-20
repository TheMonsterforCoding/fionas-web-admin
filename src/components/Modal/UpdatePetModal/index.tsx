import { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
import Modal from 'react-modal'
import Image from 'next/image'

import {
  Edit2,
  X,
  User,
  Mail,
  Users as Gen,
  Watch,
  ToggleLeft,
  UserCheck,
  Upload,
  Phone,
  MapPin
} from '@styled-icons/feather'
import AvatarImg from '../../../../public/avatar.jpg'

import { Button } from '../../Button'

import styles from './styles.module.scss'

import api from '../../../services/api'

interface UpdatePetModalProps {
  isOpen: boolean
  onRequestClose: () => void
}
interface PetType {
  petId: string
  name: string
  gender: string
  dateBirth: string
  size: string
  breed: string
  state: string
  createAt: string
  dueñoMascota:string
}

export function UpdatePetModal({ isOpen, onRequestClose }: UpdatePetModalProps) {
  
  const [pets, setPets] = useState<PetType>({
    petId: 'loading',
    name: 'loading',
    gender: 'loading',
    dateBirth: 'loading',
    size: 'loading',
    breed: 'loading',
    state: 'loading',
    createAt: 'loading',
    dueñoMascota:'loading'
  })
  
  
  useEffect(() => {
    async function loadPetsData() {
      await api.get(`/users/7cf281d4-ce39-4373-ba18-2e346881bdbf`)
        .then(response => {setPets(response.data)
      })
    }

    loadPetsData()
  }, [])
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.Modal}
      overlayClassName={styles.Overlay}
    >
      <div className={styles.wrapper}>
        <div className={styles.userHeader}>
          <h2>Editar Mascota</h2>
          <X className={styles.buttonClose} onClick={onRequestClose} />
        </div>

        <div className={styles.userContainer}>
          <div className={styles.userShow}>
            <header>
              <div className={styles.userShowHeaderInfo}>
                <span className={styles.name}> de {pets.dueñoMascota}</span>
              </div>
            </header>

            <main>
              <span className={styles.titleMain}>Detalhes do Usuario</span>
              <div className={styles.userInfo}>
                <User />
                <span>
                  {pets.name} de {pets.dueñoMascota}
                </span>
              </div>
              <div className={styles.userInfo}>
                <Gen />
                {pets.gender ? (
                  <span>masculino</span>
                ) : (
                  <span>Femenino</span>
                )}
              </div>
              <div className={styles.userInfo}>
                <Watch />
                <span>{pets.dateBirth}</span>
              </div>
              <div className={styles.userInfo}>
                <MapPin />
                <span>{pets.createAt}</span>
              </div>
              <div className={styles.userInfo}>
                <Mail />
                <span>{pets.breed}</span>
              </div>
              <div className={styles.userInfo}>
                <Phone />
                <span>{pets.size}</span>
              </div>
              <span className={styles.titleMain}>Detalhes da Conta</span>
              <div className={styles.userInfo}>
                <ToggleLeft />
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
            <form>
              <div className={styles.formLeft}>
                <div className={styles.updateItem}>
                  <label>Nome</label>
                  <input type="text" placeholder={pets.name} />
                </div>
                <div className={styles.updateItem}>
                  <label>Raza</label>
                  <input type="text" placeholder={pets.breed} />
                </div>
                <div className={styles.updateItem}>
                  <label>Gênero</label>
                  <div className={styles.selectTypeContainer}>
                    <button onClick={() => {}}>
                      <span>Masculino</span>
                    </button>
                    <button onClick={() => {}} className={styles.active}>
                      <span>Feminino</span>
                    </button>
                  </div>
                </div>
                <div className={styles.updateItem}>
                  <label>Fecha de nacimiento</label>
                  <input type="date"/>
                </div>
                <div className={styles.updateItem}>
                  <label>Dueño</label>
                  <input type="text" placeholder="Juan" />
                </div>
                <div className={styles.updateItem}>
                  <label>Estado</label>
                  <div className={styles.selectTypeContainer}>
                    <button onClick={() => {}}>
                      <span>Ativo</span>
                    </button>
                    <button onClick={() => {}} className={styles.active}>
                      <span>Inativo</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className={styles.formRight}>
                <Button type="submit">
                  <Edit2 />
                  Atualizar
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  )
}