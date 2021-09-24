import Image from 'next/image'

import { Button } from '../Button'

import { Eye } from '@styled-icons/feather'
import AvatarImg from '../../../public/avatar.jpg'

import styles from './styles.module.scss'

export function WidgetSmall() {
  return (
    <div className={styles.container}>
      <h3>Novos Clientes Registrados</h3>

      <ul className={styles.list}>
        <li className={styles.item}>
          <div>
            <Image src={AvatarImg} alt="Avatar" />

            <div className={styles.info}>
              <span className={styles.name}>Leandro Cruz</span>
              <span className={styles.moreInfo}>Software Enginner</span>
            </div>
          </div>

          <Button>
            <Eye />
            Ver
          </Button>
        </li>

        <li className={styles.item}>
          <div>
            <Image src={AvatarImg} alt="Avatar" />

            <div className={styles.info}>
              <span className={styles.name}>Tito Saavedra</span>
              <span className={styles.moreInfo}>Software Enginner</span>
            </div>
          </div>

          <Button>
            <Eye />
            Ver
          </Button>
        </li>

        <li className={styles.item}>
          <div>
            <Image src={AvatarImg} alt="Avatar" />

            <div className={styles.info}>
              <span className={styles.name}>Hector Barrios</span>
              <span className={styles.moreInfo}>Software Enginner</span>
            </div>
          </div>

          <Button>
            <Eye />
            Ver
          </Button>
        </li>

        <li className={styles.item}>
          <div>
            <Image src={AvatarImg} alt="Avatar" />

            <div className={styles.info}>
              <span className={styles.name}>Alex Barrera</span>
              <span className={styles.moreInfo}>Prof. Inacap</span>
            </div>
          </div>

          <Button>
            <Eye />
            Ver
          </Button>
        </li>

        <li className={styles.item}>
          <div>
            <Image src={AvatarImg} alt="Avatar" />

            <div className={styles.info}>
              <span className={styles.name}>Jorge Penka</span>
              <span className={styles.moreInfo}>Prof. Inacap</span>
            </div>
          </div>

          <Button>
            <Eye />
            Ver
          </Button>
        </li>
      </ul>
    </div>
  )
}
