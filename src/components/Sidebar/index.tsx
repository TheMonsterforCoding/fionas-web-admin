import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react';

import styles from './styles.module.scss'


export function Sidebar() {
  const router = useRouter();

  function openForm() {
    let active = document.getElementById("activeForm");

    if (active.style.display === "block"){
      return active.style.display = "none"
    } else {
      return active.style.display = "block"
    }

  }

  function openHome() {
    let active = document.getElementById("activeHome");

    if (active.style.display === "block"){
      return active.style.display = "none"
    } else {
      return active.style.display = "block"
    }
  }

  function openStatistics() {
    let active = document.getElementById("activeStatistics");

    if (active.style.display === "block"){
      return active.style.display = "none"
    } else {
      return active.style.display = "block"
    }
  }

  return (
    <div className={styles.sideBar}>
      <div className={styles.adminBarSection}>
        <h3> Kevin</h3>
      </div>

      <div className={styles.menuBarSection}>
        <h3>Dashboard</h3>

        <ul className={styles.navSideMenu}>
          <li>
            <a 
            href="#" 
            onClick={openHome}
            className={styles.navTitle}
            >
              <div className={styles.menuBox}>
                <img className={styles.homeImg} src="home.svg" alt="Home" />
                <span>Home</span>
                <img className={styles.arrowBottomImg} src="arrowBottom.svg" alt="Home" />
              </div>
            </a>
            <ul id="activeHome">
              <li><a href="/">Pagina Principal</a></li>
              <li><a href="">2</a></li>
              <li><a href="">3</a></li>
            </ul>
          </li>

          <li>
            <a
            href="#"
              onClick={openForm}
              className={styles.navTitle}
            >
              <div className={styles.menuBox}>
                <img className={styles.homeImg} src="form.svg" alt="Home" />
                <span>
                  Formularios
                </span>
                <img className={styles.arrowBottomImg} src="arrowBottom.svg" alt="Home" />
              </div>
            </a>
            <ul id="activeForm">
              <li>
                <Link href="http://localhost:3000/posts/createUser">
                  <a>Adicionar</a>
                </Link>
              </li>
              <li>
                <Link href="http://localhost:3000/posts/updateUser">
                  <a onClick={() => router.push('/posts/updateUser')}>Atualizar</a>
                </Link>
              </li>
              <li>
                <Link href="http://localhost:3000/posts/deleteUser">
                  <a>Eliminar</a>
                </Link>
              </li>
              <li>
                <Link href="http://localhost:3000/posts/readUser">
                  <a>Buscar</a>
                </Link>
              </li>
            </ul>

          </li>

          <li>
            <a 
            href="#" 
            onClick={openStatistics}
            className={styles.navTitle}
            >
              <div className={styles.menuBox}>
                <img className={styles.homeImg} src="statistics.svg" alt="Home" />
                <span>
                  Estadísticas
                </span>
                <img className={styles.arrowBottomImg} src="arrowBottom.svg" alt="Home" />
              </div>
            </a>
            <ul id="activeStatistics">
              <li><a href="">1</a></li>
              <li><a href="">2</a></li>
              <li><a href="">3</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}