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
import React, { useState } from 'react'
import { useServicesApply } from '../../hooks/useServicesApply'
import styles from './styles.module.scss'




export function serviceContadorDinero(anioActual) {
if(anioActual === ''){
  anioActual = new Date().getFullYear()
}
const {servicesApply} = useServicesApply()
var precioTotalAnio=0
var precioAnual=0
var precios=[0,0,0,0,0,0,0,0,0,0,0,0,0,0]
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
        precioAnual=precioAnual+45
      }else if(element.services_apply_services_id==2){
        precios[j]=precios[j]+15
        precioAnual=precioAnual+15
      }
    }
  }
}
}
precios[0]=precioTotalAnio
precios[13]=precioAnual
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
      BRL: precios[1] 
    },
    {
      name: 'Fev',
      BRL: precios[2]
    },
    {
      name: 'Mar',
      BRL: precios[3]
    },
    {
      name: 'Abr',
      BRL: precios[4]
    },
    {
      name: 'Mai',
      BRL: precios[5]
    },
    {
      name: 'Jun',
      BRL: precios[6]
    },
    {
      name: 'Jul',
      BRL: precios[7]
    },
    {
      name: 'Ago',
      BRL: precios[8]
    },
    {
      name: 'Set',
      BRL: precios[9]
    },
    {
      name: 'Out',
      BRL: precios[10]
    },
    {
      name: 'Nov',
      BRL: precios[11]
    },
    {
      name: 'Dez',
      BRL: precios[12]
    }
  ]
  var precioAnual=precios[13].toString()
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
          <Line type="monotone" dataKey="BRL" stroke="var(--pink-300)" />
          <Tooltip labelStyle={{ fontSize: '10px' }} />
          <CartesianGrid stroke="var(--separator)" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>

      <h3>Vendas totais nos últimos 3 anos: {precios[0]} BRL </h3>
      <h3>Vendas anuais: {precioAnual} BRL</h3>
    </div>
    
  )
}
