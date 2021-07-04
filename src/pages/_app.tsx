import React from 'react'
import { Sidebar } from '../components/Sidebar'
import '../styles/global.scss'

import styles from '../styles/app.module.scss'

function MyApp({ Component, pageProps }) {
  return (

    <div className={styles.containerApp}>
      <main>
        <Sidebar />
      </main>
      <Component {...pageProps} />
      

    </div>
  )
}

export default MyApp
