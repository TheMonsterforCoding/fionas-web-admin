import { useEffect, useState, FormEvent } from 'react'
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
import toast from 'react-hot-toast'

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

  var [cpf, setCpf] = useState(null)
  var [firstName, setFirstName] = useState('')
  var [lastName, setLastName] = useState('')
  var [mail, setMail] = useState('')
  var [mobileNumber, setMobileNumber] = useState('')
  var [state, setState] = useState(false)

  //  var [newCpf, setNewCpf] = useState(null)
  // var [newFirstName, setNewFirstName] = useState('')
  // var [newLastName, setNewLastName] = useState('')
  // var [newMail, setNewMail] = useState('')
  // var [newMobileNumber, setNewMobileNumber] = useState('')
  // var [newState, setNewState] = useState(false)

  async function handleSubmit(event: FormEvent) {
   event.preventDefault()

    // if (Object.keys(cpf).length === 0) {
    //    setNewCpf(user.cpf)
    //  } else {
    //    setNewCpf(cpf)
    //  }

    //  console.log(newCpf)
    // if(firstName.length === 0) {
    //   setNewFirstName(user.first_name)
    // } else {
    //   setNewFirstName(firstName)
    // }

    // if(lastName.length === 0) {
    //   setNewLastName(user.last_name)
    // } else {
    //   setNewLastName(lastName)
    // }

    // if(mail.length === 0) {
    //   setNewMail(user.mail)
    // } else {
    //   setNewMail(mail)
    // }

    // if(mobileNumber.length === 0) {
    //   setNewMobileNumber(user.mobile_number)
    // } else {
    //   setNewMobileNumber(mobileNumber)
    // }
    // if(state != null) {
    //   setNewState(user.state)
    // } else {
    //   setNewState(state)
    // }


    // console.log(newFirstName)
    // console.log(newLastName)
    // console.log(newMail)
    // console.log(newMobileNumber)
    // console.log(newState)

    // console.log(cpf)
    // console.log(firstName)
    // console.log(lastName)
    // console.log(mail)
    // console.log(mobileNumber)
    // console.log(state)
    /*await api
    .put(`/users/${idUser}`, {
      cpf: cpf,
      first_name: firstName,
      last_name: lastName,
      mail: mail,
      mobile_number: mobileNumber,
      state: state
    })
    .then((response) => {
      console.log(response)
      toast.success('Usuário atualizado com susseso!')

      setCpf('')
      setFirstName('')
      setLastName('')
      setMail('')
      setMobileNumber('')
      setState(false)

      onRequestClose()
    })*/
  }

  useEffect(() => {
    async function loadUserData() {
      await api.get(`/users/${idUser}`)
        .then(response => {
          setUser(response.data)
      })
    }


    loadUserData()
  }, [idUser])

  function loadQlos(){
    setCpf(user.cpf);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.Modal}
      overlayClassName={styles.Overlay}
    >
      <div className={styles.wrapper}>
        {/******************************** Header Modal ********************************/}
        <div className={styles.userHeader}>
          <h2>Editar Usuario</h2>
          <X className={styles.buttonClose} onClick={onRequestClose} />
        </div>

        <div className={styles.userContainer}>
          {/******************************** User Info ********************************/}
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
              <span className={styles.titleMain}>Detalhes do Usuario</span> {/* - Detalhes do Usuario - */}
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
                {user.gender ? (
                  <span>masculino</span>
                ) : (
                  <span>Femenino</span>
                )}
              </div>
              {/* ---------- Ano de nascimento ---------- */}
              <div className={styles.userInfo}>
                <Watch />
                <span>{user.year_of_birth}</span>
              </div>

              <span className={styles.titleMain}>Contato</span> {/* - Contato - */}
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

              <span className={styles.titleMain}>Detalhes da Conta</span> {/* - Detalhes da Conta - */}
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
              {/******************************** Form Left ********************************/}
              <div className={styles.formLeft}>
                {/* ---------- CPF ---------- */}
                <div className={styles.updateItem}>
                  <label>CPF</label>
                  <input
                    type="text"
                    defaultValue={user.cpf}
                    onChange={event => setCpf(event.target.value)}
                    placeholder={user.cpf}
                  />
                </div>
                {/* ---------- Nome ---------- */}
                <div className={styles.updateItem}>
                  <label>Nome</label>
                  <input
                    type="text"
                    defaultValue={user.first_name}
                    onChange={event => setFirstName(event.target.value)}
                    placeholder={user.first_name}
                  />
                </div>
                {/* ---------- Sobrenome ---------- */}
                <div className={styles.updateItem}>
                  <label>Sobrenome</label>
                  <input
                    type="text"
                    defaultValue={user.last_name}
                    onChange={event => setLastName(event.target.value)}
                    placeholder={user.last_name}
                  />
                </div>
                {/* ---------- Email ---------- */}
                <div className={styles.updateItem}>
                  <label>Email</label>
                  <input
                    type="email"
                    defaultValue={user.mail}
                    onChange={event => setMail(event.target.value)}
                    placeholder={user.mail}
                  />
                </div>
                {/* ---------- Telefone ---------- */}
                <div className={styles.updateItem}>
                  <label>Telefone</label>
                  <input
                    type="number"
                    defaultValue={user.mobile_number}
                    onChange={event => setMobileNumber(event.target.value)}
                    placeholder={user.mobile_number}
                  />
                </div>
                {/* ---------- Estado ---------- */}
                <div className={styles.updateItem}>
                  <label>Estado</label>

                  <div className={styles.selectTypeContainer}>
                    <button
                      type="button"
                      onClick={() => setState(true)}
                      className={user.state ? styles.active : styles.disabled}
                    >
                      <span>Ativo</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setState(false)}
                      className={!user.state ? styles.active : styles.disabled}
                    >
                      <span>Inativo</span>
                    </button>
                  </div>
                </div>
              </div>

              {/******************************** Form Right ********************************/}
              <div className={styles.formRight}>
                {/* ---------- Avatar ---------- */}
                <div className={styles.formImgContainer}>
                  <Image src={AvatarImg} alt="Avatar" />
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
