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
    Ativos: 15000
  },
  {
    name: 'Fev',
    Ativos: 3000
  },
  {
    name: 'Mar',
    Ativos: 2000
  },
  {
    name: 'Abr',
    Ativos: 2700
  },
  {
    name: 'Mai',
    Ativos: 1800
  },
  {
    name: 'Jun',
    Ativos: 2300
  },
  {
    name: 'Jul',
    Ativos: 3400
  },
  {
    name: 'Ago',
    Ativos: 300
  },
  {
    name: 'Set',
    Ativos: 1000
  },
  {
    name: 'Out',
    Ativos: 2000
  },
  {
    name: 'Nov',
    Ativos: 2444
  },
  {
    name: 'Dez',
    Ativos: 855
  }
]

export function ChartVentas() {
  return (
    <div className={styles.container}>
      <h3>Ventas</h3>

      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="var(--pink-300)" />
          <Line type="monotone" dataKey="Ativos" stroke="var(--pink-300)" />
          <Tooltip labelStyle={{ fontSize: '10px' }} />
          <CartesianGrid stroke="var(--separator)" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>

      <h3>Ventas totales: </h3>
    </div>
    
  )
}
