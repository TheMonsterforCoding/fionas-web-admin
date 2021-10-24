import { useEffect, useState } from 'react'
import Modal from 'react-modal'
import Image from 'next/image'

import {
  Edit2,
  X,
  User,
  Mail,
  Users as Gen,
  Watch,
  UserCheck,
  Upload,
  Phone,
  MapPin
} from '@styled-icons/feather'
import AvatarImg from '../../../../public/avatar.jpg'

import { Button } from '../../Button'

import styles from './styles.module.scss'

import api from '../../../services/api'

interface UpdateUserModalProps {
  isOpen: boolean
  onRequestClose: () => void
  idUser: string
}

interface UserType {
  id: string
  cpf: string
  avatar: string
  first_name: string
  last_name: string
  gender: boolean
  password: string
  year_of_birth: string
  address: string
  mail: string
  mobile_number: string
  state: boolean
  created_at: string
  updated_at: string
}

export function UpdateUserModal({
  isOpen,
  onRequestClose,
  idUser
}: UpdateUserModalProps) {
  const [user, setUser] = useState<UserType>({
    id: 'loading',
    cpf: 'loading',
    avatar: 'loading',
    first_name: 'loading',
    last_name: 'loading',
    gender: true,
    password: 'loading',
    year_of_birth: 'loading',
    address: 'loading',
    mail: 'loading',
    mobile_number: 'loading',
    state: false,
    created_at: 'loading',
    updated_at: 'loading',
  })

  useEffect(() => {
    async function loadUserData() {
      await api.get(`/users/${idUser}`)
        .then(response => {setUser(response.data)
      })
    }

    loadUserData()
  }, [idUser])

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.Modal}
      overlayClassName={styles.Overlay}
    >
      <div className={styles.wrapper}>
        <div className={styles.userHeader}>
          <h2>Editar Usuario</h2>
          <X className={styles.buttonClose} onClick={onRequestClose} />
        </div>

        <div className={styles.userContainer}>
          <div className={styles.userShow}>
            <header>
              <Image src={AvatarImg} alt="Avatar" />
              <div className={styles.userShowHeaderInfo}>
                <span className={styles.name}>{user.first_name}</span>
                <span className={styles.moreInfo}>{user.cpf}</span>
              </div>
            </header>

            <main>
              <span className={styles.titleMain}>Detalhes do Usuario</span>
              <div className={styles.userInfo}>
                <User />
                <span>
                  {user.first_name} {user.last_name}
                </span>
              </div>
              <div className={styles.userInfo}>
                <Gen />
                {user.gender ? (
                  <span>masculino</span>
                ) : (
                  <span>Femenino</span>
                )}
              </div>
              <div className={styles.userInfo}>
                <Watch />
                <span>{user.year_of_birth}</span>
              </div>
              <span className={styles.titleMain}>Contato</span>
              <div className={styles.userInfo}>
                <MapPin />
                <span>{user.address}</span>
              </div>
              <div className={styles.userInfo}>
                <Mail />
                <span>{user.mail}</span>
              </div>
              <div className={styles.userInfo}>
                <Phone />
                <span>{user.mobile_number}</span>
              </div>
              <span className={styles.titleMain}>Detalhes da Conta</span>
              <div className={styles.userInfo}>
                <UserCheck />
                {user.state ? (
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
                  <input type="text" placeholder={user.first_name} />
                </div>
                <div className={styles.updateItem}>
                  <label>Sobrenome</label>
                  <input type="text" placeholder={user.last_name} />
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
