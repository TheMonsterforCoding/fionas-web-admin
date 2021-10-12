import type { AppProps } from 'next/app'

import { Sidebar } from '../components/Sidebar'
import { Header } from '../components/Header'

import '../styles/global.scss'

import styles from '../styles/app.module.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.wrapper}>
        <Header />
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
