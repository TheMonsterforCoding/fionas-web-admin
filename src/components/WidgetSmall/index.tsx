import Image from 'next/image'


import { useUsers } from '../../hooks/useUsers'

import styles from './styles.module.scss'
import { useEffect, useState } from 'react'
import ManImg from '../../../public/man.png'

import WomanImg from '../../../public/woman.png'


//class usuarioClase{ first_name: string; }
//  function obtenerUltimosUsuarios() {
//   const { users } =   useUsers()
//   if(usuarios.length>0){
//     var usuarios = users
//   }else{
//    var user1= new usuarioClase()
//    user1.first_name="No hay usuarios"
//    var user2= new usuarioClase()
//    user2.first_name="No hay usuarios"
//    var user3= new usuarioClase()
//    user3.first_name="No hay usuarios"
//    usuarios = [user1,user2,user3]
//   }
//   return usuarios
//}




// type UserProps = {
//   id: string
//   cpf: string
//   first_name: string
//   last_name: string
//   gender: boolean
//   password: string
//   year_of_birth: number
//   address: string
//   mail: string
//   mobile_number: string
//   state: boolean
//   created_at: string
//   updated_at: string
// }

export function WidgetSmall() {
  const { users } = useUsers()
  const [isLoading, setIsLoading] = useState(true)

  // const users  = obtenerUltimosUsuarios()

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);

    }, 2000);
  }, [])

  
  const lenght = users.length

  return (
    <div className={styles.container}>
      <h3>Último cliente registrado</h3>

    {!isLoading ? (
    <>
      <ul className={styles.list}>
        <li className={styles.item}>
          <div>
          {users[lenght-1].gender ? (
                <Image src={ManImg} alt="Avatar" />
              ) : (
                <Image src={WomanImg} alt="Avatar" />
              )}

            <div className={styles.info}>
              <span className={styles.name}>{users[lenght-1].first_name}</span>
              
              <span className={styles.moreInfo}>{users[lenght-1].cpf}</span>
            </div>
          </div>


        </li>

        <li className={styles.item}>
          <div>
          {users[lenght-1].gender ? (
                <Image src={ManImg} alt="Avatar" />
              ) : (
                <Image src={WomanImg} alt="Avatar" />
              )}

            <div className={styles.info}>
              <span className={styles.name}>{users[lenght-2].first_name}</span>
              <span className={styles.moreInfo}>{users[lenght-2].cpf}</span>
            </div>
          </div>


        </li>

        <li className={styles.item}>
          <div>
          {users[lenght-1].gender ? (
                <Image src={ManImg} alt="Avatar" />
              ) : (
                <Image src={WomanImg} alt="Avatar" />
              )}

            <div className={styles.info}>
              <span className={styles.name}>{users[lenght-3].first_name}</span>
              <span className={styles.moreInfo}>{users[lenght-3].cpf}</span>
            </div>
          </div>


        </li>

        <li className={styles.item}>
          <div>
          {users[lenght-1].gender ? (
                <Image src={ManImg} alt="Avatar" />
              ) : (
                <Image src={WomanImg} alt="Avatar" />
              )}

            <div className={styles.info}>
              <span className={styles.name}>{users[lenght-4].first_name}</span>
              <span className={styles.moreInfo}>{users[lenght-4].cpf}</span>
            </div>
          </div>

        </li>

        <li className={styles.item}>
          <div>
          {users[lenght-1].gender ? (
                <Image src={ManImg} alt="Avatar" />
              ) : (
                <Image src={WomanImg} alt="Avatar" />
              )}

            <div className={styles.info}>
              <span className={styles.name}>{users[lenght-5].first_name}</span>
              <span className={styles.moreInfo}>{users[lenght-5].cpf}</span>
            </div>
          </div>


        </li>
      </ul>
    </>
    ) : (
    <>
      <span>Carregando...</span>
    </>)}
      
    </div>
  )
}
