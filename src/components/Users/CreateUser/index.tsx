import { Button } from '../../Button'

import styles from './styles.module.scss'

export function CreateUser() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Usuario</h1>
        <Button>Criar</Button>
      </div>
    </div>
  )
}
