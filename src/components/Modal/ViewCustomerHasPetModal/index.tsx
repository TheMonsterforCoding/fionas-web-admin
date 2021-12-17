import { useEffect, useState } from 'react'
import { DataGrid, GridColDef } from '@material-ui/data-grid'
import toast from 'react-hot-toast'
import Modal from 'react-modal'
import Image from 'next/image'
import {
  Edit2,
  X,
  User,
  Mail,
  Users as Gen,
  Watch,
  UserCheck,
  Phone,
  MapPin
} from '@styled-icons/feather'

import { Button } from '../../Button'
import ManImg from '../../../../public/man.png'
import WomanImg from '../../../../public/woman.png'
import api from '../../../services/api'
import styles from './styles.module.scss'
import { useCustomerHasPets } from '../../../hooks/useCustomerHasPets'
import { usePets } from '../../../hooks/usePets'
import { useCustomers } from '../../../hooks/useCustomers'
import { Customers } from '../../Customers'


type ViewCustomerHasPetModalProps = {
  isOpen: boolean
  onRequestClose: () => void
  idUser: string
}

type UserType = {
  id: string
  cpf: string
  first_name: string
  last_name: string
  gender: boolean
  password: string
  year_of_birth: number
  address: string
  mail: string
  mobile_number: string
  state: boolean
  created_at: string
  updated_at: string
}

export function ViewCustomerHasPetModal({
  isOpen,
  onRequestClose,
  idUser
}: ViewCustomerHasPetModalProps) {
  const [user, setUser] = useState<UserType>({
    id: 'loading',
    cpf: 'loading',
    first_name: 'loading',
    last_name: 'loading',
    gender: true,
    password: 'loading',
    year_of_birth: 0,
    address: 'loading',
    mail: 'loading',
    mobile_number: 'loading',
    state: false,
    created_at: 'loading',
    updated_at: 'loading'
  })

  const { customerHasPets } = useCustomerHasPets()
  const { pets } = usePets()
  const { customers } = useCustomers()

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Nombre de mascota',
      width: 125
    },
    {
      field: 'year_of_birth',
      headerName: 'Nacimiento',
      width: 150
    },
    {
      field: 'breed',
      headerName: 'Raza',
      width: 150
    },
    {
      field: 'state',
      headerName: 'Estado',
      width: 150
    }
  ]
  useEffect(() => {
    async function selectUserById() {
      await api.get(`/users/${idUser}`).then(response => {
        setUser(response.data)
      })
    }

    selectUserById()
  }, [idUser])


  const customersFiltered = customers.filter((user) => {
    return idUser === user.customers_users_id;
  });
  let petsNoFiltered = pets;
  
  if (customersFiltered.length > 0) {

    const customerHasPetsFiltered = customerHasPets.filter((cHasPets) => {
      return customersFiltered[0].id === cHasPets.customers_has_pets_customers_id;
  });
  const petFiltered = pets.filter((pet) => {
    return customerHasPetsFiltered.some((customer) => {
    return customer.customers_has_pets_pets_id === pet.id as unknown as number;
    });
  });

  petsNoFiltered = petFiltered;
  }

  async function handleSubmit() {
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.Modal}
      overlayClassName={styles.Overlay}
    >
      <div className={styles.wrapper}>
        <div className={styles.userHeader}>
          <h2>Editar Usuario</h2>
          <X className={styles.buttonClose} onClick={onRequestClose} />
        </div>

        <div className={styles.userContainer}>
          <div className={styles.userShow}>
            <header>
              {/* ---------- User Header ---------- */}
              {user.gender ? (
                <Image src={ManImg} alt="Avatar" />
              ) : (
                <Image src={WomanImg} alt="Avatar" />
              )}
              <div className={styles.userShowHeaderInfo}>
                <span className={styles.name}>{user.first_name}</span>
                <span className={styles.moreInfo}>{user.cpf}</span>
              </div>
            </header>

            <main>
              <span className={styles.titleMain}>Detalhes do Usuario</span>{' '}
              {/* ---------- Nome ---------- */}
              <div className={styles.userInfo}>
                <User />
                <span>
                  {user.first_name} {user.last_name}
                </span>
              </div>
              {/* ---------- Gênero ---------- */}
              <div className={styles.userInfo}>
                <Gen />
                {user.gender ? <span>masculino</span> : <span>Femenino</span>}
              </div>
              {/* ---------- Ano de nascimento ---------- */}
              <div className={styles.userInfo}>
                <Watch />
                <span>{user.year_of_birth}</span>
              </div>
              <span className={styles.titleMain}>Contato</span>{' '}
              {/* ---------- Endereço ---------- */}
              <div className={styles.userInfo}>
                <MapPin />
                <span>{user.address}</span>
              </div>
              {/* ---------- Email ---------- */}
              <div className={styles.userInfo}>
                <Mail />
                <span>{user.mail}</span>
              </div>
              {/* ---------- Número celular ---------- */}
              <div className={styles.userInfo}>
                <Phone />
                <span>{user.mobile_number}</span>
              </div>
              <span className={styles.titleMain}>Detalhes da Conta</span>{' '}
              {/* ---------- Estado ---------- */}
              <div className={styles.userInfo}>
                <UserCheck />
                {user.state ? (
                  <span>estado: Ativo</span>
                ) : (
                  <span>estado: Inativo</span>
                )}
              </div>
            </main>
          </div>
          <div  className={styles.container} >
          <h3>Animais de estimação</h3>
            <form onSubmit={handleSubmit}>
              <div className={styles.content}>
                <DataGrid
                  rows={petsNoFiltered}
                  columns={columns}
                  rowsPerPageOptions={[9]}
                  pageSize={9}
                  checkboxSelection
                  disableSelectionOnClick
                  className={styles.datagrid}
                />

              </div>
              <footer>
                <Button type="submit">
                  Salir
                </Button>
              </footer>
            </form>

          </div>
           
        </div>
      </div>
    </Modal>
  )
}
