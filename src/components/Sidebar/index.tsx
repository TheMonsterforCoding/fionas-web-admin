import { Home, User, Compass } from '@styled-icons/feather'
import Link from 'next/link'
import Image from 'next/image'

import LogoImg from '../../../public/dog.svg'

import styles from './styles.module.scss'

export function Sidebar() {
  // function handleListForm() {
  //   let active = document.getElementById('activeForm')

  //   if (active.style.display === 'grid') {
  //     return (active.style.display = 'none')
  //   } else {
  //     return (active.style.display = 'grid')
  //   }
  // }

  // function handleListStatistics() {
  //   let active = document.getElementById('activeStatistics')

  //   if (active.style.display === 'grid') {
  //     return (active.style.display = 'none')
  //   } else {
  //     return (active.style.display = 'grid')
  //   }
  // }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <header>
          <Image src={LogoImg} alt="Logo" />
          <h3>Fiona`s Pet Shop</h3>
        </header>

        <main>
          <span className={styles.title}>PAINEL</span>

          <ul className={styles.containerNavigator}>
            {/* Home */}
            <li>
              <Link href="/" passHref>
                <a>
                  {/* <div id={styles.menuBox} className={styles.active}> */}
                  <div id={styles.menuBox}>
                    <div className={styles.content}>
                      <div className={styles.contentLeft}>
                        <Home />
                        <span>Home</span>
                      </div>
                      <></>
                    </div>
                  </div>
                </a>
              </Link>
            </li>

            {/* Users */}
            <li>
              <Link href="#">
                <a>
                  <div id={styles.menuBox}>
                    <div className={styles.content}>
                      <div className={styles.contentLeft}>
                        <User />
                        <span>Users</span>
                      </div>
                      <></>
                    </div>
                  </div>
                </a>
              </Link>
            </li>

            {/* Statics */}
            <li>
              <Link href="#">
              <a href="#">
                <div id={styles.menuBox}>
                  <div className={styles.content}>
                    <div className={styles.contentLeft}>
                      <Compass />
                      <span>Estadísticas</span>
                    </div>
                  </div>
                </div>
              </a>
              </Link>
            </li>

          </ul>
        </main>
      </div>
    </div>
  )
}
