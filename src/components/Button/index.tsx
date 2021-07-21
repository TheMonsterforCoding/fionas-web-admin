import { ReactNode } from 'react'

import styles from './styles.module.scss'

interface ButtonProps {
  children: ReactNode
  color: string
}

export function Button({ children, color }: ButtonProps) {
  return (
    <button id={color} className={styles.button}>
      {children}
    </button>
  )
}
