import { useEffect, useState } from 'react'
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
  Phone,
  MapPin
} from '@styled-icons/feather'

import { Button } from '../../Button'
import ManImg from '../../../../public/man.png'
import WomanImg from '../../../../public/woman.png'
import api from '../../../services/api'
import styles from './styles.module.scss'

type UpdateUserModalProps = {
  isOpen: boolean
  onRequestClose: () => void
  idUser: string
  validarFirstName: (firstName: string) => any[]
  validarPassword: (password: string, password2: string) => any[]
  validarMail: (mail: string) => any[]
  validarMobileNumber: (mobileNumber: string) => any[]
  validarCpf: (cpf: string) => any[]
  validarAddress: (address: string) => any[]
  validarLastName: (lastName: string) => any[]
  validarYear: (year: string) => any[]
}

type UserType = {
  id: string
  cpf: string
  first_name: string
  last_name: string
  gender: boolean
  password: string
  year_of_birth: number
  address: string
  mail: string
  mobile_number: string
  state: boolean
  user_type: boolean
  created_at: string
  updated_at: string
}

export function UpdateUserModal({
  isOpen,
  onRequestClose,
  idUser,
  validarCpf,
  validarFirstName,
  validarLastName,
  validarMail,
  validarMobileNumber,
  validarYear
}: UpdateUserModalProps) {
  const [user, setUser] = useState<UserType>({
    id: 'loading',
    cpf: 'loading',
    first_name: 'loading',
    last_name: 'loading',
    gender: true,
    password: 'loading',
    year_of_birth: 0,
    address: 'loading',
    mail: 'loading',
    mobile_number: 'loading',
    state: false,
    user_type: false,
    created_at: 'loading',
    updated_at: 'loading'
  })

  var [cpf, setCpf] = useState('')
  var [firstName, setFirstName] = useState('')
  var [lastName, setLastName] = useState('')
  var [mail, setMail] = useState('')
  var [mobileNumber, setMobileNumber] = useState('')
  var [state, setState] = useState(false)
  var [userType, setUserType] = useState(false)

  //validación nombre
  var firstNameArray = validarFirstName(firstName)
  firstName = firstNameArray[0]
  var mensajeFirstName = firstNameArray[1]
  var validadorFirstName = firstNameArray[2]
  //validación cpf
  var mensajeCpf = ''
  var cpfArray = validarCpf(cpf)
  cpf = cpfArray[0]
  mensajeCpf = cpfArray[1]
  var validadorCpf = cpfArray[2]
  //validación mobile
  var mensajeMobileNumber = ''
  var mobileNumberArray = validarMobileNumber(mobileNumber.toString())
  mobileNumber = mobileNumberArray[0]
  mensajeMobileNumber = mobileNumberArray[1]
  var validadorMobile = mobileNumberArray[2]
  //validación mail
  var mailArray = validarMail(mail)
  mail = mailArray[0]
  var mensajeMail = mailArray[1]
  var validadorMail = mailArray[2]
  //validación lasName
  var mensajeLastName = ''
  var lastNameArray = validarLastName(lastName)
  lastName = lastNameArray[0]
  mensajeLastName = lastNameArray[1]
  var validadorLastName = lastNameArray[2]

  useEffect(() => {
    async function selectUserById() {
      await api.get(`/users/${idUser}`).then(response => {
        setUser(response.data)
      })
    }

    selectUserById()
  }, [idUser])

  // Teste
  if (user.user_type === true) {
    console.log('Ativo')
  } else {
    console.log('Innativo')
  }

  async function handleSubmit() {
    if (firstName === '') {
      validadorFirstName = true
    }
    if (lastName === '') {
      validadorLastName = true
    }
    if (cpf === '') {
      validadorCpf = true
    }
    if (mail === '') {
      validadorMail = true
    }
    if (mobileNumber === '') {
      validadorMobile = true
    }
    if (
      validadorFirstName == true &&
      validadorLastName == true &&
      validadorCpf == true &&
      validadorMail == true &&
      validadorMobile == true
    ) {
      let newCpf = ''
      let newFirstName = ''
      let newLastName = ''
      let newMail = ''
      let newMobileNumber = ''
      let newState = true
      let newUserType = true

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
      if (mobileNumber === '') {
        newMobileNumber = user.mobile_number
      } else {
        newMobileNumber = mobileNumber
      }
      if (state === user.state) {
        newState = user.state
      } else {
        newState = state
      }
      if (userType === user.user_type) {
        newUserType = user.user_type
      } else {
        newUserType = userType
      }

      try {
        const response = await api.put(`/users/${idUser}`, {
          cpf: newCpf,
          first_name: newFirstName,
          last_name: newLastName,
          mail: newMail,
          mobile_number: newMobileNumber,
          state: newState,
          user_type: newUserType
        })

        const status = response.status

        if (status === 200) {
          toast.success('Usuário atualizado com susseso!')

          setCpf('')
          setFirstName('')
          setLastName('')
          setMail('')
          setMobileNumber('')
          setState(true)
          setUserType(true)

          onRequestClose()
        } else {
          toast.error('Usuário no fue atualizado!')
        }
      } catch (err) {
        console.log(err)
      }
    } else {
      toast.error('Por favor, verifique os campos em vermelho!')
      event.preventDefault()
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
              {user.gender ? (
                <Image src={ManImg} alt="Avatar" />
              ) : (
                <Image src={WomanImg} alt="Avatar" />
              )}
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
                {user.gender ? <span>Masculino</span> : <span>Femenino</span>}
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
              {/* ---------- Tipo Usuario ---------- */}
              <div className={styles.userInfo}>
                <UserCheck />
                {user.user_type ? (
                  <span>Trabalhador</span>
                ) : (
                  <span>Cliente</span>
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
                    <label>{mensajeCpf}</label>
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
                    <label>{mensajeFirstName}</label>
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
                    <label>{mensajeLastName}</label>
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
                    <label>{mensajeMail}</label>
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
                    <label>{mensajeMobileNumber}</label>
                    <label>Telefone</label>
                    <input
                      type="text"
                      value={mobileNumber}
                      placeholder={user.mobile_number}
                      onChange={event => setMobileNumber(event.target.value)}
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

                  {/* --------------- User type --------------- */}
                  {/* <div className={styles.updateItem}>
                    <label>Tipo de usuario</label>

                    <div className={styles.selectTypeContainer}>
                      <button
                        type="button"
                        onClick={() => setUserType(true)}
                        className={userType ? styles.active : styles.disabled}
                      >
                        <span>Trabalhador</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setUserType(false)}
                        className={!userType ? styles.active : styles.disabled}
                      >
                        <span>Cliente</span>
                      </button>
                    </div>
                  </div> */}
                </div>

                <div className={styles.formRight}>
                  {/* ---------- Avatar ---------- */}
                  <div className={styles.formImgContainer}>
                    {user.gender ? (
                      <>
                        <Image src={ManImg} alt="Avatar" />
                      </>
                    ) : (
                      <>
                        <Image src={WomanImg} alt="Avatar" />
                      </>
                    )}
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
