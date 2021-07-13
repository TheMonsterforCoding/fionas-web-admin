import { FeaturedInfo } from '../FeaturedInfo'
import { Header } from '../Header'

import styles from './styles.module.scss'

export function Main() {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.content}>
        <FeaturedInfo title="Receita" amount="1022,42" rate="-1,2" />
        <FeaturedInfo title="Ventas" amount="790,20" rate="-0,3" />
        <FeaturedInfo title="Compras" amount="450,00" rate="-0,1" />
      </div>

      {/* Rechart 44:28*/}
    </div>
  )
}
