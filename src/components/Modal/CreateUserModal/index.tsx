import React, { useState, FormEvent } from 'react'
import Modal from 'react-modal'
import Image from 'next/dist/client/image'
import toast, { Toaster } from 'react-hot-toast'

import { Button } from '../../Button'

import { X, Upload, UserPlus } from '@styled-icons/feather'
import UserDefault from '../../../../public/userDefault.png'

import styles from './styles.module.scss'

import api from '../../../services/api'

interface CreateUserModalProps {
  isOpen: boolean
  onRequestClose: () => void
  validarFirstName(value:string):()=> []
  validarPassword(password:string, password2:string):()=> []
  validarMail(mail:string):()=> []
  validarMobileNumber(mobileNumber:string):()=> []
  validarCpf(cpf:string):()=> []
  validarAddress(address:string):()=> []
  validarLastName(lastName:string):()=> []
}

export function CreateUserModal({
  isOpen,
  onRequestClose,
  validarFirstName,
  validarPassword,
  validarMail,
  validarCpf,
  validarMobileNumber,
  validarAddress,
  validarLastName
}: CreateUserModalProps) {
  var [cpf, setCpf] = useState('')
  // const [avatar, setAvatar] = useState('')
  var [firstName, setFirstName] = useState('')
  var [lastName, setLastName] = useState('')
  const [gender, setGender] = useState(false)
  var [password, setPassword] = useState('')
  var [password2, setPassword2] = useState('')
  const [yearOfBirth, setYearOfBirth] = useState(1900)

  var [address, setAddress] = useState('')
  var [mail, setMail] = useState('')
  var [mobileNumber, setMobileNumber] = useState(0)

  const [state, setState] = useState(false)
  
  //validación password
  var mensajePassword="";
  var mensajePassword2="";
  var mensajeFirstName="";
  var mensajeMail="";
  var passwordArray = validarPassword(password, password2)
  password=passwordArray[0]
  password2=passwordArray[1]
  mensajePassword=passwordArray[2]
  var validadorPassword=passwordArray[3]
  //validación nombre
  var firstNameArray=validarFirstName(firstName)
  firstName=firstNameArray[0]
  mensajeFirstName=firstNameArray[1]
  var validadorFirstName=firstNameArray[2]
  //validación mail
  var mailArray=validarMail(mail)
  mail=mailArray[0]
  var mensajeMail=mailArray[1]
  var validadorMail=mailArray[2]

  //validación mobile
  var mensajeMobileNumber="";
  var mobileNumberArray=validarMobileNumber(mobileNumber.toString())
  mobileNumber=mobileNumberArray[0]
  mensajeMobileNumber=mobileNumberArray[1]
  var validadorMobile=mobileNumberArray[2]
  //validación cpf
  var mensajeCpf="";
  var cpfArray=validarCpf(cpf)
  cpf=cpfArray[0]
  mensajeCpf=cpfArray[1]
  var validadorCpf=cpfArray[2]
//validación address
  var mensajeAddress="";
  var addressArray=validarAddress(address)
  address=addressArray[0]
  mensajeAddress=addressArray[1]
  var validadorAddress=addressArray[2]
  //validación lasName
  var mensajeLastName="";
  var lastNameArray=validarLastName(lastName)
  lastName=lastNameArray[0]
  mensajeLastName=lastNameArray[1]
  var validadorLastName=lastNameArray[2]


  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    if(validadorAddress && validadorFirstName && validadorLastName && validadorMail && validadorMobile && validadorPassword){
    await api
    .post('/users', {
      cpf: cpf,
      avatar: 'https://lh3.googleusercontent.com/a-/AOh14GgJDGOETWdTK25Wqtaed4UofMsYehhJCk1TrGfElg=s360-p-rw-no',
      first_name: firstName,
      last_name: lastName,
      gender: gender,
      password: password,
      year_of_birth: yearOfBirth,
      address: address,
      mail: mail,
      mobile_number: parseInt(mobileNumber.toString()),
      state: state
    })
    .then(function (response) {
      console.log(response)
      toast.success('Usuário cadastrado com susseso!')

      setCpf('')
      setFirstName('')
      setLastName('')
      setGender(true)
      setPassword('')
      setPassword2('')
      setYearOfBirth(1900)
      setAddress('')
      setMail('')
      setMobileNumber(0)
      setState(false)

      onRequestClose()
    })
    .catch(function (error) {
      console.log(error)
      toast.error('Dados de usuario incorreto!')
    })
  }else{
    toast.error('Dados de usuario incorreto!')
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
        <div>
          <Toaster position="top-center" reverseOrder={false} />
        </div>

        <header>
          <h2>Criar Usuario</h2>
          <X className={styles.buttonClose} onClick={onRequestClose} />
        </header>

        <form onSubmit={handleSubmit}>
          <fieldset>
            <div className={styles.userCreateLeft}>
              <span className={styles.subtitleUserCreate}>Detalhes do Usuario</span>
              <div className={styles.inputBlock}>
                <label id="mensajeCpf">{mensajeCpf}</label>
                <label htmlFor="cpf">CPF</label>
                <input
                  type="text"
                  id="cpf"
                  value={cpf}
                  onChange={event => setCpf(event.target.value)}
                  placeholder="CPF"
                  // required
                />
              </div>

              <div className={styles.inputBlock}>
                <label id="mensajeFirstName">{mensajeFirstName}</label>
                <label htmlFor="firstName">Nome</label>
                <input
                  type="text"
                  onBlur={e => {console.log("hola")}}
                  id="firstName"
                  value={firstName}
                  onChange={event => setFirstName(event.target.value)}
                  placeholder="Nome"
                  required
                />
              </div>

              <div className={styles.inputBlock}>
                <label id="mensajeLastName">{mensajeLastName}</label>
                <label htmlFor="lastName">Sobrenome</label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={event => setLastName(event.target.value)}
                  placeholder="Sobrenome"
                  required
                />
              </div>

              <div className={styles.inputBlock}>
                <label htmlFor="yearOfBirth">Ano de Nacimento</label>
                <input
                  type="number"
                  id="yearOfBirth"
                  value={yearOfBirth}
                  onChange={event => setYearOfBirth(Number(event.target.value))}
                  placeholder="Ano de nascimento"
                  required
                />
              </div>

              <div className={styles.inputBlock}>
                <label htmlFor="genderId">Gênero</label>

                <div className={styles.selectTypeContainer}>
                  <button
                    type="button"
                    onClick={() => setGender(true)}
                    className={gender ? styles.active : styles.disabled}
                  >
                    Masculino
                  </button>

                  <button
                    type="button"
                    onClick={() => setGender(false)}
                    className={!gender ? styles.active : styles.innactive}
                  >
                    Femenino
                  </button>
                </div>
              </div>

              <div className={styles.inputBlock}>
                <label id="mensajePassword">{mensajePassword}</label>
                <label htmlFor="password">Contrasenha</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={event => setPassword(event.target.value)}
                  placeholder="Contrasenha"
                  required
                />
              </div>

              <div className={styles.inputBlock}>
                <label id="mensajePasword2"></label>
                <label htmlFor="password2">Repetir contrasenha</label>
                <input
                  type="password"
                  id="password2"
                  value={password2}
                  onChange={event => setPassword2(event.target.value)}
                  placeholder="Contrasenha"
                  required
                />
              </div>
            </div>

            <div className={styles.userCreateCenter}>
              <span className={styles.subtitleUserCreate}>Contato e localização</span>
              <div className={styles.inputBlock}>
                <label id="mensajeAddress">{mensajeAddress}</label>
                <label htmlFor="address">Endereço</label>
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={event => setAddress(event.target.value)}
                  placeholder="Endereço"
                  required
                />
              </div>

              <div className={styles.inputBlock}>
                <label id="mensajeMail"> {mensajeMail} </label>
                <label htmlFor="mail">Email</label>
                <input
                  type="email"
                  id="mail"
                  value={mail}
                  onChange={event => setMail(event.target.value)}
                  placeholder="Email"
                  required
                />
              </div>

              <div className={styles.inputBlock}>
                <label id="mensajeMobileNumber">{mensajeMobileNumber} </label>
                <label htmlFor="mobileNumber">Número celular</label>
                <input
                  id="mobileNumber"
                  value={mobileNumber}
                  onChange={event => setMobileNumber(Number(event.target.value))}
                  placeholder="Número celular"
                  required
                />
              </div>

              <span className={styles.subtitleUserCreate}>Detalhes da conta</span>
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
              <div className={styles.formImgContainer}>
                <Image src={UserDefault} alt="Avatar" />
                <label htmlFor="file">
                  <Upload />
                </label>
                <input
                  type="file"
                  id="file"
                  style={{ display: 'none' }}
                />
              </div>

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
