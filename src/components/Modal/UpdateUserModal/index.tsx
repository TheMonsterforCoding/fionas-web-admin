import { useEffect, useState, FormEvent } from 'react'
import toast from 'react-hot-toast'
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

import { Button } from '../../Button'
import AvatarImg from '../../../../public/avatar.jpg'

import api from '../../../services/api'
import styles from './styles.module.scss'

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
  year_of_birth: number
  address: string
  mail: string
  mobile_number: number
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
    year_of_birth: 0,
    address: 'loading',
    mail: 'loading',
    mobile_number: 0,
    state: false,
    created_at: 'loading',
    updated_at: 'loading'
  })

  const [cpf, setCpf] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [mail, setMail] = useState('')
  const [mobileNumber, setMobileNumber] = useState(0)
  const [state, setState] = useState(false)

  useEffect(() => {
    async function selectUserById() {
      await api.get(`/users/${idUser}`).then(response => {
        setUser(response.data)
      })
    }

    selectUserById()
  }, [idUser])

  async function handleSubmit() {
    let newCpf = ''
    let newFirstName = ''
    let newLastName = ''
    let newMail = ''
    let newMobileNumber = 0
    let newState = true

    if (cpf === '') {
      newCpf = user.cpf
    } else {
      newCpf = cpf
    }
    if (firstName === '') {
      newFirstName = user.first_name
    } else {
      newFirstName = firstName
    }
    if (lastName === '') {
      newLastName = user.last_name
    } else {
      newLastName = lastName
    }
    if (mail === '') {
      newMail = user.mail
    } else {
      newMail = mail
    }
    if (mobileNumber === 0) {
      newMobileNumber = user.mobile_number
    } else {
      newMobileNumber = mobileNumber
    }
    if (state === user.state) {
      newState = user.state
    } else {
      newState = state
    }

    try {
      const response = await api.put(`/users/${idUser}`, {
        cpf: newCpf,
        first_name: newFirstName,
        last_name: newLastName,
        mail: newMail,
        mobile_number: newMobileNumber,
        state: newState
      })

      const status = response.status

      if (status === 200) {
        toast.success('Usuário atualizado com susseso!')

        setCpf('')
        setFirstName('')
        setLastName('')
        setMail('')
        setMobileNumber(0)
        setState(true)

        onRequestClose()
      } else {
        toast.error('Usuário no fue atualizado!')
      }
    } catch (err) {
      console.log(err)
    }
  }

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
              {/* ---------- User Header ---------- */}
              <Image src={AvatarImg} alt="Avatar" />
              <div className={styles.userShowHeaderInfo}>
                <span className={styles.name}>{user.first_name}</span>
                <span className={styles.moreInfo}>{user.cpf}</span>
              </div>
            </header>

            <main>
              <span className={styles.titleMain}>Detalhes do Usuario</span>{' '}
              {/* ---------- Nome ---------- */}
              <div className={styles.userInfo}>
                <User />
                <span>
                  {user.first_name} {user.last_name}
                </span>
              </div>
              {/* ---------- Gênero ---------- */}
              <div className={styles.userInfo}>
                <Gen />
                {user.gender ? <span>masculino</span> : <span>Femenino</span>}
              </div>
              {/* ---------- Ano de nascimento ---------- */}
              <div className={styles.userInfo}>
                <Watch />
                <span>{user.year_of_birth}</span>
              </div>
              <span className={styles.titleMain}>Contato</span>{' '}
              {/* ---------- Endereço ---------- */}
              <div className={styles.userInfo}>
                <MapPin />
                <span>{user.address}</span>
              </div>
              {/* ---------- Email ---------- */}
              <div className={styles.userInfo}>
                <Mail />
                <span>{user.mail}</span>
              </div>
              {/* ---------- Número celular ---------- */}
              <div className={styles.userInfo}>
                <Phone />
                <span>{user.mobile_number}</span>
              </div>
              <span className={styles.titleMain}>Detalhes da Conta</span>{' '}
              {/* ---------- Estado ---------- */}
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

            <form onSubmit={handleSubmit}>
              <fieldset>
                <div className={styles.formLeft}>
                  {/* ---------- CPF ---------- */}
                  <div className={styles.updateItem}>
                    <label>CPF</label>
                    <input
                      type="text"
                      value={cpf}
                      placeholder={user.cpf}
                      onChange={event => setCpf(event.target.value)}
                    />
                  </div>

                  {/* ---------- Nome ---------- */}
                  <div className={styles.updateItem}>
                    <label>Nome</label>
                    <input
                      type="text"
                      value={firstName}
                      placeholder={user.first_name}
                      onChange={event => setFirstName(event.target.value)}
                    />
                  </div>

                  {/* ---------- Sobrenome ---------- */}
                  <div className={styles.updateItem}>
                    <label>Sobrenome</label>
                    <input
                      type="text"
                      value={lastName}
                      placeholder={user.last_name}
                      onChange={event => setLastName(event.target.value)}
                    />
                  </div>

                  {/* ---------- Email ---------- */}
                  <div className={styles.updateItem}>
                    <label>Email</label>
                    <input
                      type="email"
                      value={mail}
                      placeholder={user.mail}
                      onChange={event => setMail(event.target.value)}
                    />
                  </div>

                  {/* ---------- Telefone ---------- */}
                  <div className={styles.updateItem}>
                    <label>Telefone</label>
                    <input
                      type="number"
                      value={mobileNumber}
                      onChange={event =>
                        setMobileNumber(Number(event.target.value))
                      }
                    />
                  </div>

                  {/* ---------- Estado ---------- */}
                  <div className={styles.updateItem}>
                    <label>Estado</label>

                    <div className={styles.selectTypeContainer}>
                      <button
                        type="button"
                        onClick={() => setState(true)}
                        className={state ? styles.active : styles.disabled}
                      >
                        <span>Ativo</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setState(false)}
                        className={!state ? styles.active : styles.disabled}
                      >
                        <span>Inativo</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className={styles.formRight}>
                  {/* ---------- Avatar ---------- */}
                  <div className={styles.formImgContainer}>
                    <Image src={AvatarImg} alt="Avatar" />
                  </div>
                </div>
              </fieldset>
              <footer>
                <Button type="submit">
                  <Edit2 />
                  Atualizar
                </Button>
              </footer>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  )
}
