import { Bell, Globe, Settings } from '@styled-icons/feather'
import Image from 'next/image'

import AvatarImg from '../../../public/avatar.jpg'

import styles from './styles.module.scss'

export function Header() {
  return (
    <div className={styles.container}>
      <header>
        <div className={styles.iconContainer}>
          <Bell />
          <span className={styles.topIconBadge}>2</span>
        </div>
        <div className={styles.iconContainer}>
          <Globe />
        </div>
        <div className={styles.iconContainer}>
          <Settings />
        </div>

        <Image src={AvatarImg} alt="Avatar" />
      </header>
    </div>
  )
}
