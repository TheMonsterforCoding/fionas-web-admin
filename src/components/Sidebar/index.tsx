import { Home, Figma, Compass, ChevronDown } from '@styled-icons/feather'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import LogoImg from '../../../public/dog.svg'

import styles from './styles.module.scss'

export function Sidebar() {
  const router = useRouter()

  function handleListForm() {
    let active = document.getElementById('activeForm')

    if (active.style.display === 'grid') {
      return (active.style.display = 'none')
    } else {
      return (active.style.display = 'grid')
    }
  }

  function handleListStatistics() {
    let active = document.getElementById('activeStatistics')

    if (active.style.display === 'grid') {
      return (active.style.display = 'none')
    } else {
      return (active.style.display = 'grid')
    }
  }

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
            <li className={styles.active}>
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

            {/* Formularios */}
            <li>
              <Link href="#">
                <a onClick={handleListForm}>
                  <div id={styles.menuBox}>
                    <div className={styles.content}>
                      <div className={styles.contentLeft}>
                        <Figma />
                        <span>Formularios</span>
                      </div>
                      <ChevronDown />
                    </div>
                  </div>
                </a>
              </Link>

              <ul id="activeForm" className={styles.form}>
                <Link href="posts/createUser">
                  <a>Adicionar</a>
                </Link>
                <Link href="/posts/updateUser">
                  <a>Atualizar</a>
                </Link>
                <Link href="/posts/deleteUser">
                  <a>Eliminar</a>
                </Link>
                <Link href="/posts/readUser">
                  <a>Buscar</a>
                </Link>
              </ul>
            </li>

            {/* Estadisticas */}
            <li>
              <a href="#" onClick={handleListStatistics}>
                <div id={styles.menuBox}>
                  <div className={styles.content}>
                    <div className={styles.contentLeft}>
                      <Compass />
                      <span>Estadísticas</span>
                    </div>
                    <ChevronDown />
                  </div>
                </div>
              </a>

              <ul id="activeStatistics" className={styles.form}>
                <Link href="/posts/createUser">
                  <a>Usuarios</a>
                </Link>
                <Link href="/posts/deleteUser">
                  <a>Tags</a>
                </Link>
              </ul>
            </li>
          </ul>
        </main>
      </div>
    </div>
  )
}
