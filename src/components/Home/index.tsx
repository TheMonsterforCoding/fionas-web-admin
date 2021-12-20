import { FeaturedInfo } from '../FeaturedInfo'
import { Chart } from '../Chart'
import { WidgetSmall } from '../WidgetSmall'
import { WidgetLarge } from '../WidgetLarge'
import { useUsers } from '../../hooks/useUsers'

import styles from './styles.module.scss'

export function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>


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
