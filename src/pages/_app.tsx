import React from 'react'
import type { AppProps } from 'next/app'
import Modal from 'react-modal'

import { Sidebar } from '../components/Sidebar'
import { Header } from '../components/Header'

import '../styles/global.scss'

import styles from '../styles/app.module.scss'
import { UsersProvider } from '../hooks/useUsers'
import { PetsProvider } from '../hooks/usePets'
import { EmployeesTypeProvider } from '../hooks/useEmployeesType'

Modal.setAppElement('#__next')

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UsersProvider>
      <EmployeesTypeProvider>
        <PetsProvider>
          <div className={styles.container}>
            <Sidebar />
            <div className={styles.wrapper}>
              <Header />
              <Component {...pageProps} />
            </div>
          </div>
        </PetsProvider>
      </EmployeesTypeProvider>
    </UsersProvider>
  )
}

export default MyApp
