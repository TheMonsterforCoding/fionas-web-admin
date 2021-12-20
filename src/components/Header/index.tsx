import { Button } from '@material-ui/core'
import { Bell, Globe, Settings, LogOut } from '@styled-icons/feather'
import Link from 'next/link'

import AvatarImg from '../../../public/avatar.jpg'

import styles from './styles.module.scss'

export function Header() {
  return (
    <div className={styles.container}>
      <header>
        {/* <div className={styles.iconContainer}>
          <Bell />
          <span className={styles.topIconBadge}>2</span>
        </div> */}
        {/*    <Image src={AvatarImg} alt="Avatar" />

        <div className={styles.iconContainer}>
          <Settings />
        </div>
           */}

        <div className={styles.iconContainer}>
          <Link href={'http://localhost:3000/'}>
            <LogOut />
          </Link>
        </div>
      </header>
    </div>
  )
}
