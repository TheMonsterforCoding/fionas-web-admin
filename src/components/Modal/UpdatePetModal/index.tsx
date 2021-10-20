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
                <span>{users.yearOfBirth}</span>
              </div>
              <span className={styles.titleMain}>Contato</span>
              <div className={styles.userInfo}>
                <MapPin />
                <span>{users.address}</span>
              </div>
              <div className={styles.userInfo}>
                <Mail />
                <span>{users.mail}</span>
              </div>
              <div className={styles.userInfo}>
                <Phone />
                <span>{users.mobileNumber}</span>
              </div>
              <span className={styles.titleMain}>Detalhes da Conta</span>
              <div className={styles.userInfo}>
                <ToggleLeft />
                {users.state ? (
                  <span>estado: Ativo</span>
                ) : (
                  <span>estado: Inativo</span>
                )}
              </div>
              <div className={styles.userInfo}>
                <UserCheck />
                {users.admin ? (
                  <span>admin: Sim</span>
                ) : (
                  <span>admin: Não</span>
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
                  <input type="text" placeholder={users.firstName} />
                </div>
                <div className={styles.updateItem}>
                  <label>Sobrenome</label>
                  <input type="text" placeholder={users.lastName} />
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
                  <label>Edade</label>
                  <input type="number" placeholder="12" />
                </div>
                <div className={styles.updateItem}>
                  <label>Email</label>
                  <input type="text" placeholder="maria.silveira@hotmai.com" />
                </div>
                <div className={styles.updateItem}>
                  <label>Contrasenha</label>
                  <input type="password" placeholder="********" />
                </div>
                <div className={styles.updateItem}>
                  <label>Admin</label>
                  <div className={styles.selectTypeContainer}>
                    <button onClick={() => {}}>
                      <span>Sim</span>
                    </button>
                    <button onClick={() => {}} className={styles.active}>
                      <span>Não</span>
                    </button>
                  </div>
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
                <div className={styles.formImgContainer}>
                  <Image src={AvatarImg} alt="Avatar" />
                  <label htmlFor="file">
                    <Upload />
                  </label>
                  <input type="file" id="file" style={{ display: 'none' }} />
                </div>

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