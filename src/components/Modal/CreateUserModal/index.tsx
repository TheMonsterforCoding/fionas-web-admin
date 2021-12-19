import React, { useState, FormEvent } from 'react'
import Modal from 'react-modal'
import Image from 'next/dist/client/image'
import toast, { Toaster } from 'react-hot-toast'
import { X, UserPlus } from '@styled-icons/feather'

import WomanImg from '../../../../public/man.png'
import ManImg from '../../../../public/woman.png'
import { Button } from '../../Button'
import { useUsers } from '../../../hooks/useUsers'
import { useEmployees } from '../../../hooks/useEmployees'
import { useEmployessType } from '../../../hooks/useEmployeesType'
import { useCustomers } from '../../../hooks/useCustomers'
import styles from './styles.module.scss'

interface CreateUserModalProps {
  isOpen: boolean
  onRequestClose: () => void
  validarFirstName:(firstName: string) =>any[]
  validarPassword:(password:string, password2:string)=> any[]
  validarMail:(mail:string)=> any[]
  validarMobileNumber:(mobileNumber:string)=> any[]
  validarCpf:(cpf:string)=> any[]
  validarAddress:(address:string)=> any[]
  validarLastName:(lastName:string)=> any[]
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
  const { createUser } = useUsers()
  const { employeesType } = useEmployessType()
  const { createEmployee } = useEmployees()
  const { createCustomer } = useCustomers()

  var [cpf, setCpf] = useState('')
  var [firstName, setFirstName] = useState('')
  var [lastName, setLastName] = useState('')
  var [gender, setGender] = useState(true)
  var [password, setPassword] = useState('')
  var [password2, setPassword2] = useState('')
  const [yearOfBirth, setYearOfBirth] = useState(1900)
  var [address, setAddress] = useState('')
  var [mail, setMail] = useState('')
  var [mobileNumber, setMobileNumber] = useState('')
  const [state, setState] = useState(true)
  const [userType, setUserType] = useState(true)
  const [employeeTypeId, setEmployeeTypeId] = useState(0)


//validaciones
  var mensajePassword="";
  var mensajePassword2="";
  var mensajeFirstName="";
  var mensajeMail="";
  var passwordArray = validarPassword(password, password2)
  password=passwordArray[0]
  password2=passwordArray[1]
  mensajePassword=passwordArray[2]
  mensajePassword2=passwordArray[3]
  var validadorPassword=passwordArray[3]
  //validación nombre
  var firstNameArray=validarFirstName(firstName)
  firstName=firstNameArray[0]
  mensajeFirstName=firstNameArray[1]
  var validadorFirstName=firstNameArray[2]
  //validación mail
  var mailArray=validarMail(mail)
  mail=mailArray[0]
  mensajeMail=mailArray[1]
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
    if(validadorCpf && validadorAddress && validadorFirstName && validadorLastName && validadorMail && validadorMobile && validadorPassword){
    const userData = {
      cpf,
      first_name: firstName,
      last_name: lastName,
      gender,
      password,
      year_of_birth: yearOfBirth,
      address,
      mail,
      mobile_number: mobileNumber,
      state,
      user_type: userType
    }

    const response = await createUser(userData)

    const id = response.data.id

    const employeeData = {
      employees_users_id: id,
      employees_employees_type_id: employeeTypeId
    }

    const customerData = {
      customers_users_id: id
    }

    if (userType) {
      await createEmployee(employeeData)
    } else {
      await createCustomer(customerData)
    }

    const status = response.status

    if (status === 200) {
      toast.success('User registrado!')

      setCpf('')
      setFirstName('')
      setLastName('')
      setGender(true)
      setPassword('')
      setPassword2('')
      setYearOfBirth(1900)
      setAddress('')
      setMail('')
      setMobileNumber('')
      setState(true)
      setUserType(true)

      onRequestClose()
    } else {
      toast.error('Usuario não registrado!')
    }
  }else{
    toast.error('Dados de usuario incorreto!')
    event.preventDefault()
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
            <h2>Criar Usuario</h2>
            <X className={styles.buttonClose} onClick={onRequestClose} />
          </header>

          <form onSubmit={handleSubmit}>
            <fieldset>
              <div className={styles.createLeft}>
                <span className={styles.subtitleUserCreate}>
                  Detalhes do Usuario
                </span>
                {/* --------------- CPF --------------- */}
                <div className={styles.inputBlock}>
                <label id="mensajeCpf">{mensajeCpf}</label>
                  <label htmlFor="cpf">CPF</label>
                  <input
                    type="text"
                    id="cpf"
                    value={cpf}
                    onChange={event => setCpf(event.target.value)}
                    placeholder="CPF"
                    required
                  />
                </div>

                {/* --------------- First Name --------------- */}
                <div className={styles.inputBlock}>
                <label id="mensajeFirstName">{mensajeFirstName}</label>
                  <label htmlFor="firstName">Nome</label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={event => setFirstName(event.target.value)}
                    placeholder="Nome"
                    required
                  />
                </div>

                {/* --------------- Last Name --------------- */}
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

                {/* --------------- Year of Birth --------------- */}
                <div className={styles.inputBlock}>
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

                {/* --------------- Password --------------- */}
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

                {/* --------------- Password Validation --------------- */}
                <div className={styles.inputBlock}>
                  <label>{mensajePassword2}</label>
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

              <div className={styles.createCenter}>
                <span className={styles.subtitleUserCreate}>
                  Contato e localização
                </span>
                {/* --------------- Address --------------- */}
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

                {/* --------------- E-mail --------------- */}
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

                {/* --------------- Mobile Number --------------- */}
                <div className={styles.inputBlock}>
                <label id="mensajeMobileNumber">{mensajeMobileNumber} </label>
                  <label htmlFor="mobileNumber">Número celular</label>
                  <input
                    type="text"
                    id="mobileNumber"
                    value={mobileNumber}
                    onChange={event => setMobileNumber(event.target.value)}
                    placeholder="Número celular"
                    required
                  />
                </div>

                <span className={styles.subtitleUserCreate}>
                  Detalhes da conta
                </span>
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

                {/* --------------- User type --------------- */}
                <div className={styles.inputBlock}>
                  <label htmlFor="userType">Tipo de usuario</label>

                  <div className={styles.selectTypeContainer}>
                    <button
                      type="button"
                      onClick={() => setUserType(true)}
                      className={userType ? styles.active : styles.disabled}
                    >
                      Trabalhador
                    </button>

                    <button
                      type="button"
                      onClick={() => setUserType(false)}
                      className={!userType ? styles.active : styles.disabled}
                    >
                      Cliente
                    </button>
                  </div>
                </div>

                {userType ? (
                  /* --------------- Employees Type --------------- */
                  <div className={styles.inputBlock}>
                    <label htmlFor="employeeType">Tipo de emprego</label>
                    <div className={styles.selectBlock}>
                      <select
                        name="employeeType"
                        id="employeeType"
                        required
                        onChange={event =>
                          setEmployeeTypeId(Number(event.target.value))
                        }
                      >
                        <option value="">Seleccione</option>
                        {employeesType.map(employeeType => {
                          return (
                            <option
                              value={employeeType.id}
                              key={employeeType.id}
                            >
                              {employeeType.description}
                            </option>
                          )
                        })}
                      </select>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>

              <div className={styles.createRight}>
                {/* --------------- Avatar --------------- */}
                <div className={styles.formImgContainer}>
                  {!gender ? (
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
