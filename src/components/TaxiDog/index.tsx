import { WidgetSmall } from '../WidgetSmall'
import MapTaxiDog from "../MapTaxiDog"
import styles from './styles.module.scss'

export function TaxiDog() {
    return (
      <div className={styles.container}>
          
      <div>
      <MapTaxiDog />
      </div>
  
        <div className={styles.widget}>
          <div className={styles.temporalWidgetSmall}>
            <WidgetSmall />
          </div>

        </div>
      </div>
    )
  }
  