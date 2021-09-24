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
    Ativos: 10
  },
  {
    name: 'Fev',
    Ativos: 30
  },
  {
    name: 'Mar',
    Ativos: 20
  },
  {
    name: 'Abr',
    Ativos: 27
  },
  {
    name: 'Mai',
    Ativos: 18
  },
  {
    name: 'Jun',
    Ativos: 23
  },
  {
    name: 'Jul',
    Ativos: 34
  },
  {
    name: 'Ago',
    Ativos: 29
  },
  {
    name: 'Set',
    Ativos: 30
  },
  {
    name: 'Out',
    Ativos: 37
  },
  {
    name: 'Nov',
    Ativos: 34
  },
  {
    name: 'Dez',
    Ativos: 30
  }
]

export function Chart() {
  return (
    <div className={styles.container}>
      <h3>Análises de usuarios</h3>

      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="var(--pink-300)" />
          <Line type="monotone" dataKey="Ativos" stroke="var(--pink-300)" />
          <Tooltip labelStyle={{ fontSize: '10px' }} />
          <CartesianGrid stroke="var(--separator)" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
