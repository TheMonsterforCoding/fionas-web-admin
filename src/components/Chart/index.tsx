import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

import styles from './styles.module.scss'

const data = [
  {
    name: 'Jan',
    Usuarios: 10
  },
  {
    name: 'Fev',
    Usuarios: 30
  },
  {
    name: 'Mar',
    Usuarios: 20
  },
  {
    name: 'Abr',
    Usuarios: 27
  },
  {
    name: 'Mai',
    Usuarios: 18
  },
  {
    name: 'Jun',
    Usuarios: 23
  },
  {
    name: 'Jul',
    Usuarios: 34
  },
  {
    name: 'Ago',
    Usuarios: 29
  },
  {
    name: 'Set',
    Usuarios: 30
  },
  {
    name: 'Out',
    Usuarios: 37
  },
  {
    name: 'Nov',
    Usuarios: 34
  },
  {
    name: 'Dez',
    Usuarios: 30
  }
]

export function Chart() {
  return (
    <div className={styles.container}>
      <h3>Análises de usuarios ativos</h3>

      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="var(--pink-300)" />
          <Line type="monotone" dataKey="Usuarios" stroke="var(--pink-300)" />
          <Tooltip />
          <CartesianGrid stroke="var(--separator)" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
