import type { AppProps } from 'next/app'

import { Sidebar } from '../components/Sidebar'

import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div style={{ display: 'flex' }}>
      <main>
        <Sidebar />
      </main>

      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
