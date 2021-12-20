import { ChartVentas } from '../ChartVentas'
import styles from './styles.module.scss'
export function Estadisticas() {
    return (
      <div className={styles.container} >
        <h1 className={styles.h1}>Estadisticas</h1>
        <div className={styles.chart}>
            <ChartVentas />
        </div>
      </div>
    )
  }
  