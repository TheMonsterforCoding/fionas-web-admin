import Image from 'next/image'

import ManImg from '../../../public/man.png'
import WomanImg from '../../../public/woman.png'
import { useUsers } from '../../hooks/useUsers'
import styles from './styles.module.scss'

export function WidgetSmall() {
  const { users } = useUsers()

  return (
    <div className={styles.container}>
      <h3>Último cliente registrado</h3>

      {users.slice(0, 6).map(user => {
        return (
          <ul>
            <li className={styles.item}>
              <div>
                {user.gender ? (
                  <Image src={ManImg} alt="Avatar" />
                ) : (
                  <Image src={WomanImg} alt="Avatar" />
                )}

                <div className={styles.info}>
                  <span className={styles.name}>{user.first_name}</span>

                  <span className={styles.moreInfo}>{user.cpf}</span>
                </div>
              </div>
            </li>
          </ul>
        )
      })}
    </div>
  )
}
