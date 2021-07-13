import { ArrowDown } from '@styled-icons/feather'

import styles from './styles.module.scss'

interface FeatureInfoProps {
  title: string
  amount: string
  rate: string
}

export function FeaturedInfo({ title, amount, rate }: FeatureInfoProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3>{title}</h3>

        <div className={styles.moneyContainer}>
          <h2>R${amount}</h2>
          <span className={styles.moneyRate}>
            {rate} <ArrowDown />
          </span>
        </div>

        <span className={styles.subtitle}>Comparado ao ultimo mes</span>
      </div>
    </div>
  )
}
