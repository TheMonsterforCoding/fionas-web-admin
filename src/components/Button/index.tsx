import { ReactNode } from 'react'

import styles from './styles.module.scss'

interface ButtonProps {
  children: ReactNode
}

export function Button({ children }: ButtonProps) {
  return <button className={styles.button}>{children}</button>
}
