import { useState } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'
import { useUsers } from '../../hooks/useUsers'

import styles from './styles.module.scss'


export function serviceContadorDinero(anioActual) {
  if(anioActual === ''){
    anioActual = new Date().getFullYear()
  }
  const {users} = useUsers()
  var usuarioCreadoTotal=0
  var usuariosAnual=0
  var usuariosCreados=[0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  if(users.length>0){
  for (let i = 0; i < users.length; i++) {
    const element = users[i];
    usuarioCreadoTotal=usuarioCreadoTotal+1
    var fecha=element.created_at.split('-')
    fecha[2]=fecha[2].split('T')[0]
    for (let j = 1; j < 12; j++) {
      if(fecha[0]==anioActual && fecha[1]==(j+1).toString()){
          usuariosCreados[j]=usuariosCreados[j]+1
          usuariosAnual=usuariosAnual+1
      }
    }
  }
  }
  usuariosCreados[0]=usuarioCreadoTotal
  usuariosCreados[13]=usuariosAnual
  return usuariosCreados
  }
  




export function Chart() {
  var [anio, setAnio] = useState('')
  var usuariosCreados = serviceContadorDinero(anio)
  var today = new Date();
  var anioActual = today.getFullYear();
  const data = [
    {
      name: 'Jan',
      USERS: usuariosCreados[1] 
    },
    {
      name: 'Fev',
      USERS: usuariosCreados[2]
    },
    {
      name: 'Mar',
      USERS: usuariosCreados[3]
    },
    {
      name: 'Abr',
      USERS: usuariosCreados[4]
    },
    {
      name: 'Mai',
      USERS: usuariosCreados[5]
    },
    {
      name: 'Jun',
      USERS: usuariosCreados[6]
    },
    {
      name: 'Jul',
      USERS: usuariosCreados[7]
    },
    {
      name: 'Ago',
      USERS: usuariosCreados[8]
    },
    {
      name: 'Set',
      USERS: usuariosCreados[9]
    },
    {
      name: 'Out',
      USERS: usuariosCreados[10]
    },
    {
      name: 'Nov',
      USERS: usuariosCreados[11]
    },
    {
      name: 'Dez',
      USERS: usuariosCreados[12]
    }
  ]
  var usuariosAnual=usuariosCreados[13].toString()


  return (
    <div className={styles.container}>
      <h3>Análises de usuarios</h3>
      <div className={styles.selectBlock}>
        <select
          name="anioActual"
          id="anioActual"
          onChange={event => setAnio(event.target.value)}
        >
          <option value={anioActual}>{anioActual}</option>
          <option value={anioActual-1}>{anioActual-1}</option>
          <option value={anioActual+1}>{anioActual+1}</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="var(--pink-300)" />
          <Line type="monotone" dataKey="USERS" stroke="var(--pink-300)" />
          <Tooltip labelStyle={{ fontSize: '10px' }} />
          <CartesianGrid stroke="var(--separator)" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
      <h3>usuários criados nos últimos 3 anos: {usuariosCreados[0]} </h3>
      <h3>usuários anuais criados: {usuariosAnual} </h3>
    </div>
  )
}
