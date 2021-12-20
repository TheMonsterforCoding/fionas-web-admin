import React from 'react'
import type { AppProps } from 'next/app'
import Modal from 'react-modal'

import { Sidebar } from '../components/Sidebar'
import { Header } from '../components/Header'

import '../styles/global.scss'

import styles from '../styles/app.module.scss'
import { UsersProvider } from '../hooks/useUsers'
import { PetsProvider } from '../hooks/usePets'
import { ServicesProvider } from '../hooks/useServices'
import { ServicesApplyProvider } from '../hooks/useServicesApply'
import { EmployeesTypeProvider } from '../hooks/useEmployeesType'
import { EmployeesProvider } from '../hooks/useEmployees'
import { CustomersProvider } from '../hooks/useCustomers'
import { CustomerHasPetsProvider } from '../hooks/useCustomerHasPets'

Modal.setAppElement('#__next')

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UsersProvider>
      <EmployeesProvider>
        <EmployeesTypeProvider>
          <CustomersProvider>
            <PetsProvider>
              <ServicesProvider>
               <ServicesApplyProvider>
              <CustomerHasPetsProvider>
                <div className={styles.container}>
                  <Sidebar />
                  <div className={styles.wrapper}>
                    <Header />
                    <Component {...pageProps} />
                  </div>
                </div>
              </CustomerHasPetsProvider>
            </ServicesApplyProvider>
            </ServicesProvider>
            </PetsProvider>
          </CustomersProvider>
        </EmployeesTypeProvider>
      </EmployeesProvider>
    </UsersProvider>
  )
}

export default MyApp
