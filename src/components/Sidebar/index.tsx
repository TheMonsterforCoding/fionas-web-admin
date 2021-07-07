import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import homeImg from '../../../public/home.svg'
import arrowBottomImg from '../../../public/arrowBottom.svg'
import formImg from '../../../public/form.svg'
import statisticsImg from '../../../public/statistics.svg'

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
          <h2>Fiona`s Pet Shop</h2>
        </header>

        <main>
          <span>PANEL</span>

          <ul className={styles.navSideMenu}>
            {/* Home */}
            <li>
              <Link href="/">
                <a>
                  <div className={styles.menuBox}>
                    <Image src={homeImg} alt="Home" />
                    <span>Home</span>
                  </div>
                </a>
              </Link>
            </li>

            {/* Formularios */}
            <li>
              <a href="#" onClick={handleListForm}>
                <div className={styles.menuBox}>
                  <div>
                    <div>
                      <Image src={formImg} alt="Home" />
                      <span>Formularios</span>
                    </div>
                    <Image src={arrowBottomImg} alt="Home" />
                  </div>
                </div>
              </a>

              <ul id="activeForm">
                <Link href="posts/createUser">
                  <a>Adicionar</a>
                </Link>
                <Link href="http://localhost:3000/posts/updateUser">
                  <a>Atualizar</a>
                </Link>
                <Link href="http://localhost:3000/posts/deleteUser">
                  <a>Eliminar</a>
                </Link>
                <Link href="http://localhost:3000/posts/readUser">
                  <a>Buscar</a>
                </Link>
              </ul>
            </li>

            {/* Estadisticas */}
            <li>
              <a href="#" onClick={handleListStatistics}>
                <div className={styles.menuBox}>
                  <div>
                    <div>
                      <Image src={statisticsImg} alt="Home" />
                      <span>Estadísticas</span>
                    </div>
                    <Image src={arrowBottomImg} alt="Home" />
                  </div>
                </div>
              </a>

              <ul id="activeStatistics">
                <Link href="http://localhost:3000/posts/createUser">
                  <a>Usuarios</a>
                </Link>
                <Link href="http://localhost:3000/posts/deleteUser">
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
