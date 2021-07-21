import Image from 'next/image'

import { Button } from '../../Button'

import AvatarImg from '../../../../public/avatar.jpg'

import styles from './styles.module.scss'

export function WidgetLarge() {
  return (
    <div className={styles.container}>
      <h3>Novos Clientes Registrados</h3>

      <table className="table">
        <tr>
          <th>Custumer</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>

        <tr>
          <td>
            <Image src={AvatarImg} alt="Avatar" />

            <span>Leandro Cruz</span>
          </td>
          <td>2 Jun 2021</td>
          <td>$122.00</td>
          <td>
            <Button color="white">Aprovar</Button>
          </td>
        </tr>
      </table>
    </div>
  )
}
