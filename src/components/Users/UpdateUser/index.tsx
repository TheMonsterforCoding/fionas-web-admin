import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

import api from '../../../services/api'

import styles from './styles.module.scss'

export function UpdateUser() {
  const router = useRouter()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [admin, setAdmin] = useState(false)

  async function handleSubmit(event: FormEvent) {
    // Prever que la app no haga reload al mandar el formulario
    event.preventDefault()

    await api
      .post('users', {
        name: name,
        email: email,
        password: password,
        admin: admin
      })
      .then(function (response) {
        console.log(response)
        toast.success('Usuario cadastrado com susseso!')
        router.push('/')
      })
      .catch(function (error) {
        console.log(error)
        toast.error('Dados de usuario incorreto!')
      })
  }

  return (
    <div className={styles.container}>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>

      <h3>Adicionar um usuario</h3>

      <div className={styles.wrapper}>
        <span>Dados de usuario</span>

        <form onSubmit={handleSubmit}>
          <fieldset>
            <div className={styles.inputBlock}>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={event => setName(event.target.value)}
                placeholder="Nome Completo"
                required
              />
            </div>

            <div className={styles.inputBlock}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
                placeholder="exemplo@exemplo.com"
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
                placeholder="**********"
                required
              />
            </div>

            <div className={styles.inputBlock}>
              <label htmlFor="admin">É admin?</label>

              <div className={styles.buttonSelect}>
                <button
                  type="button"
                  onClick={() => setAdmin(true)}
                  className={admin ? styles.active : styles.disabled}
                >
                  Sim
                </button>

                <button
                  type="button"
                  onClick={() => setAdmin(false)}
                  className={!admin ? styles.active : styles.disabled}
                >
                  Não
                </button>
              </div>
            </div>
          </fieldset>

          <button type="submit">Adicionar</button>
        </form>
      </div>
    </div>
  )
}
