import { FeaturedInfo } from '../FeaturedInfo'
import { Chart } from '../Chart'
import { WidgetSmall } from '../WidgetSmall'
import { WidgetLarge } from '../WidgetLarge'

import styles from './styles.module.scss'

export function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.featuredInfo}>
          <FeaturedInfo title="Receita" amount="1022,42" rate="-1,2" />
          <FeaturedInfo title="Ventas" amount="790,20" rate="-0,3" />
          <FeaturedInfo title="Compras" amount="450,00" rate="-0,1" />
        </div>

        <div className={styles.repositionWidgetSmall}>
          <WidgetSmall />
        </div>

      </div>

    <div className={styles.chart}>
      <Chart />
    </div>

      <div className={styles.widget}>
        <div className={styles.temporalWidgetSmall}>
          <WidgetSmall />
        </div>
        <WidgetLarge />
      </div>
    </div>
  )
}
