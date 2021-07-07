import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'

import api from '../../../services/api'

import styles from './styles.module.scss'

export function CreateUser() {
  const router = useRouter()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [admin, setAdmin] = useState(false)

  async function handleSubmit(event: FormEvent) {
    // Prever que la app no haga reload al mandar el formulario
    event.preventDefault()

    const data = new FormData()

    console.log(name)

    data.append('name', name)
    data.append('email', email)
    data.append('password', password)
    data.append('admin', String(admin))

    await api.post('users', data)

    alert('Cadastro realizado com susseso')

    // router.push('/')
  }

  return (
    <div className={styles.container}>
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
                  className={`${admin ? styles.active : ''}`}
                  onClick={() => setAdmin(true)}
                >
                  Sim
                </button>

                <button
                  type="button"
                  className={`${!admin ? styles.active : ''}`}
                  onClick={() => setAdmin(false)}
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
