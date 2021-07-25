import { Button } from '../../Button'
import { Header } from '../../Header'

import styles from './styles.module.scss'

export function CreateUser() {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.header}>
        <h1>Usuario</h1>
        <Button>Criar</Button>
      </div>
    </div>
  )
}
