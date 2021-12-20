import {
  LineChart,
  Line,
  Bar,
  BarChart,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'
import { useServicesApply } from '../../hooks/useServicesApply'
import styles from './styles.module.scss'
import React, { useState, FormEvent } from 'react'


// id: number
// price: string
// description: string
// created_at: string
// updated_at: string


export function serviceContadorDinero(anioActual) {
console.log(anioActual)
if(anioActual === ''){
  anioActual = new Date().getFullYear()
}
const {servicesApply} = useServicesApply()
var precioTotalAnio=0

var precios=[0,0,0,0,0,0,0,0,0,0,0,0,0]

if(servicesApply.length>0){
for (let i = 0; i < servicesApply.length; i++) {
  const element = servicesApply[i];
  if(element.services_apply_services_id==1){
    precioTotalAnio= precioTotalAnio + 45
  }else if(element.services_apply_services_id==2){
    precioTotalAnio= precioTotalAnio + 15
  }
  var fecha=element.created_at.split('-')
  fecha[2]=fecha[2].split('T')[0]
  for (let j = 1; j < 12; j++) {
    if(fecha[0]==anioActual && fecha[1]==(j+1).toString()){
      if(element.services_apply_services_id==1){
        precios[j]=precios[j]+45
      }else if(element.services_apply_services_id==2){
        precios[j]=precios[j]+15
      }
    }
  }
}
}
return precios
}



export function ChartVentas() {
  var [anio, setAnio] = useState('')
  var precios = serviceContadorDinero(anio)
  var today = new Date();
  var anioActual = today.getFullYear();
  const data = [
    {
      name: 'Jan',
      Ativos: precios[1]
    },
    {
      name: 'Fev',
      Ativos: precios[2]
    },
    {
      name: 'Mar',
      Ativos: precios[3]
    },
    {
      name: 'Abr',
      Ativos: precios[4]
    },
    {
      name: 'Mai',
      Ativos: precios[5]
    },
    {
      name: 'Jun',
      Ativos: precios[6]
    },
    {
      name: 'Jul',
      Ativos: precios[7]
    },
    {
      name: 'Ago',
      Ativos: precios[8]
    },
    {
      name: 'Set',
      Ativos: precios[9]
    },
    {
      name: 'Out',
      Ativos: precios[10]
    },
    {
      name: 'Nov',
      Ativos: precios[11]
    },
    {
      name: 'Dez',
      Ativos: precios[12]
    }
  ]
  return (
    
    <div className={styles.container}>
      <h3>Ventas de servicios</h3>
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
          <Line type="monotone" dataKey="Ativos" stroke="var(--pink-300)" />
          <Tooltip labelStyle={{ fontSize: '10px' }} />
          <CartesianGrid stroke="var(--separator)" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>

      <h3>Ventas totales: {precios[0]} BRL </h3>
    </div>
    
  )
}
