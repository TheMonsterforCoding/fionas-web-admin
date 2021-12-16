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
}

export function CreateUserModal({
  isOpen,
  onRequestClose
}: CreateUserModalProps) {
  const { createUser } = useUsers()
  const { employeesType } = useEmployessType()
  const { createEmployee } = useEmployees()
  const { createCustomer } = useCustomers()

  const [cpf, setCpf] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [gender, setGender] = useState(true)
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [yearOfBirth, setYearOfBirth] = useState(1900)
  const [address, setAddress] = useState('')
  const [mail, setMail] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const [state, setState] = useState(true)

  const [userType, setUserType] = useState(true)
  const [employeeTypeId, setEmployeeTypeId] = useState(0)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

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
      state
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
      setState(false)

      onRequestClose()
    } else {
      toast.error('Usuario não registrado!')
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

              <div className={styles.createCenter}>
                <span className={styles.subtitleUserCreate}>
                  Contato e localização
                </span>
                {/* --------------- Address --------------- */}
                <div className={styles.inputBlock}>
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
                      Empregado
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
