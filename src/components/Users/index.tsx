import Link from 'next/link'
import { useState, useEffect } from 'react'

import { DataGrid, GridColDef } from '@material-ui/data-grid'
import { Edit2, UserPlus } from '@styled-icons/feather'

import { Button } from '../Button'

import styles from './styles.module.scss'

import api from '../../services/api'

interface UsersProps {
  onOpenUpdateUserModal: () => void
  onOpenCreateUserModal: () => void
}

interface UserType {
  // id: string
  cpf: string
  // avatar: string
  firstName: string
  lastName: string
  // genderId: boolean
  // password: string
  // yearOfBirth: string
  // address: string
  // mail: string
  // mobileNumber: string
  state: boolean
  admin: boolean
  // createdAt: string
  // updated_at: string
}

export function Users({
  onOpenUpdateUserModal,
  onOpenCreateUserModal
}: UsersProps) {
  const [users, setUsers] = useState<UserType[]>([])

  useEffect(() => {
    api.get('/users').then((response) => {
      setUsers(response.data)
    })
    // .then((response => console.log(response.data)))
  }, [])

  const columns: GridColDef[] = [
    {
      field: 'cpf',
      headerName: 'CPF',
      width: 125
    },
    {
      field: 'firstName',
      headerName: 'Nome',
      type: 'number',
      width: 125
    },
    {
      field: 'lastName',
      headerName: 'Sobrenome',
      width: 150
    },
    {
      field: 'admin',
      headerName: 'Admin',
      width: 150
    },
    {
      field: 'state',
      headerName: 'Estado',
      width: 150
    },
    {
      field: 'action',
      headerName: 'Ação',
      width: 150,
      renderCell: () => {
        return (
          <>
            <Link passHref href="#">
              <Button onClick={onOpenUpdateUserModal}>
                <Edit2 className={styles.columnUserButtonEdit} />
                Editar
              </Button>
            </Link>
          </>
        )
      }
    }
  ]

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={9}
          checkboxSelection
          disableSelectionOnClick
          className={styles.datagrid}
        />

        <Button onClick={onOpenCreateUserModal}>
          <UserPlus />
          Criar
        </Button>
      </div>
    </div>
  )
}
