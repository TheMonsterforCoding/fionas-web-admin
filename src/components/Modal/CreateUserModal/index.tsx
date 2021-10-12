import { useState, FormEvent } from 'react'
import Modal from 'react-modal'
import Image from 'next/dist/client/image'

import { Button } from '../../Button'

import { X, Upload, UserPlus } from '@styled-icons/feather'
import UserDefault from '../../../../public/userDefault.png'

import styles from './styles.module.scss'

interface CreateUserModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

interface GenderProps {
  isActive: boolean
  activeColor: 'blue' | 'pink'
}

export function CreateUserModal({
  isOpen,
  onRequestClose
}: CreateUserModalProps) {
  const [toggleGender, setToggleGender] = useState(false)
  const [toggleState, setToggleState] = useState(false)

  const [cpf, setCpf] = useState('')
  const [avatar, setAvatar] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [genderId, setGenderId] = useState(false)
  const [address, setAddress] = useState('')
  const [mail, setMail] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [state, setState] = useState(false)

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const data = {
      cpf: cpf,
      avatar: avatar,
      firstName: firstName,
      lastName: lastName,
      genderId: genderId,
      address: address,
      mail: mail,
      mobileNumber: mobileNumber,
      password: password,
      password2: password2,
      state: state
    }

    console.log(data)

  }

  return (
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
            <div className={styles.userCreateLeft}>
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

              <div className={styles.inputBlock}>
                <label htmlFor="genderId">Gênero</label>

                <div className={styles.selectTypeContainer}>
                  <button
                    type="button"
                    onClick={() => setGenderId(true)}
                    className={genderId ? styles.active : styles.disabled}
                  >
                    Masculino
                  </button>

                  <button
                    type="button"
                    onClick={() => setGenderId(false)}
                    className={!genderId ? styles.active : styles.innactive}
                  >
                    Femenino
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.userCreateRight}>
              <div className={styles.inputBlock}>
                <label htmlFor="mail">Email</label>
                <input
                  type="text"
                  id="mail"
                  value={mail}
                  onChange={event => setMail(event.target.value)}
                  placeholder="Email"
                  required
                />
              </div>

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

              <div className={styles.inputBlock}>
                <label htmlFor="password2">Repetir contrasenha</label>
                <input
                  type="password"
                  id="password"
                  value={password2}
                  onChange={event => setPassword2(event.target.value)}
                  placeholder="Contrasenha"
                  required
                />
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

            <div className={styles.formRight}>
              <div className={styles.formImgContainer}>
                <Image src={UserDefault} alt="Avatar" />
                <label htmlFor="file">
                  <Upload />
                </label>
                <input type="file" id="file" style={{ display: 'none' }} />
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
