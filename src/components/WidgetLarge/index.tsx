import Image from 'next/image'

import AvatarImg from '../../../public/avatar.jpg'

import styles from './styles.module.scss'
import { useUsers } from '../../hooks/useUsers'
import { useServicesApply } from '../../hooks/useServicesApply'
import { useEffect, useState } from 'react'

export function WidgetLarge() {
  const {servicesApply} = useServicesApply()
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);

    }, 2000);
  }, [])

  return (
    
    <div className={styles.container}>
      <h3>Ultimas Transações</h3>
      {!isLoading ? (
      <div className={styles.table}>
        <div className={styles.lineTitle}>
          <h4>Cliente</h4>
          <h4>Data</h4>
          <h4>Hora</h4>
          <h4>Valor</h4>
        </div>

        <div className={styles.line}>
          <div>
            <Image src={AvatarImg} alt="Avatar" />

            <div className={styles.info}>
              <span className={styles.name}>Tito Saavedra</span>
              <span className={styles.moreInfo}>Software Enginner</span>
            </div>
          </div>
          <span>2 Jun 2021</span>
          <span>10:45</span>
          <span>R$ 1096,12</span>
        </div>

        <div className={styles.line}>
          <div>
            <Image src={AvatarImg} alt="Avatar" />

            <div className={styles.info}>
              <span className={styles.name}>Hector Barrios</span>
              <span className={styles.moreInfo}>Software Enginner</span>
            </div>
          </div>
          <span>4 Jun 2021</span>
          <span>12:05</span>
          <span>R$ 122,00</span>
        </div>

        <div className={styles.line}>
          <div>
            <Image src={AvatarImg} alt="Avatar" />

            <div className={styles.info}>
              <span className={styles.name}>Leandro Cruz</span>
              <span className={styles.moreInfo}>Software Enginner</span>
            </div>
          </div>
          <span>4 Jun 2021</span>
          <span>20:12</span>
          <span>R$ 97,30</span>
        </div>
      </div>
          ) : (
            <>
              <span>Carregando...</span>
            </>)}
    </div>
  )
}
