import { ChartVentas } from '../ChartVentas'
import styles from './styles.module.scss'
import React, { useState } from 'react'
import { useServicesApply } from '../../hooks/useServicesApply'

export function contadorServiciosActivos() {
  const { servicesApply } = useServicesApply()
  var enProceso = 0
  var finalizados = 0
  for (let i = 0; i < servicesApply.length; i++) {
    const element = servicesApply[i]
    if (
      element.services_apply_services_state_id == 1 ||
      element.services_apply_services_state_id == 2 ||
      element.services_apply_services_state_id == 3
    ) {
      enProceso += 1
    } else if (element.services_apply_services_id == 4) {
      finalizados += 1
    }
  }
  return [enProceso, finalizados]
}

export function Estadisticas() {
  var enProcesos = contadorServiciosActivos()[0]
  var finalizados = contadorServiciosActivos()[1]
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Estatisticas</h1>

      <div className={styles.cuboContainer}>
        <div className={styles.cubo}>
          <h1 className={styles.titulo}>Serviços pendentes</h1>
          <span>{enProcesos}</span>
          {/* <div className={styles.block}>
            {finalizados}
          </div> */}
        </div>

        <div className={styles.cubo}>
          <h1 className={styles.titulo}>Serviços concluídos</h1>
          {/* <div className={styles.block}>
            {enProcesos}
          </div> */}
          <span>{finalizados}</span>
        </div>
      </div>

      <div className={styles.chart}>
        <ChartVentas />
      </div>
    </div>
  )
}
