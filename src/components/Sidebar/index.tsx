import { Home, User, Compass, PieChart, Heart, MapPin } from '@styled-icons/feather'
import Link from 'next/link'
import Image from 'next/image'
import LogoImg from '../../../public/fionas.png'

import styles from './styles.module.scss'

export function Sidebar() {
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
                  <div id={styles.menuBox} className={styles.active}>
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
              <Link href="/posts/listUser" passHref>
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


            {/* Pets */}
            <li>
              <Link href="/posts/listPet" passHref>
                <a>
                  <div id={styles.menuBox}>
                    <div className={styles.content}>
                      <div className={styles.contentLeft}>
                        <Heart />
                        <span>Pets</span>
                      </div>
                      <></>
                    </div>
                  </div>
                </a>
              </Link>
            </li>


            <li>
              <Link href="/posts/taxiDog" passHref>
                <a>
                  <div id={styles.menuBox}>
                    <div className={styles.content}>
                      <div className={styles.contentLeft}>
                        <Compass />
                        <span>Taxi Dog</span>
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
                      <PieChart />
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
