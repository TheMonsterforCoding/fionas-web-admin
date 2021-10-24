import { useState, useEffect } from 'react'

import { DataGrid, GridColDef } from '@material-ui/data-grid'
import { Edit2, UserPlus } from '@styled-icons/feather'

import { Button } from '../Button'

import styles from './styles.module.scss'

import api from '../../services/api'

interface UsersProps {
  onOpenUpdateUserModal: any
  onOpenCreateUserModal: () => void
}

interface UserType {
  id: string
  cpf: string
  first_name: string
  last_name: string
  mobile_number: number
  state: boolean
}

export function Users({
  onOpenUpdateUserModal,
  onOpenCreateUserModal
}: UsersProps) {
  const [users, setUsers] = useState<UserType[]>([])

  useEffect(() => {
    api.get('/users').then(response => {
      setUsers(response.data)
      console.log(response.data)
    })
  }, [])

  const columns: GridColDef[] = [
    {
      field: 'cpf',
      headerName: 'CPF',
      width: 125
    },
    {
      field: 'first_name',
      headerName: 'Nome',
      type: 'number',
      width: 125
    },
    {
      field: 'last_name',
      headerName: 'Sobrenome',
      width: 150
    },
    {
      field: 'mobile_number',
      headerName: 'Celular',
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
      renderCell: (user) => {
        return (
          <>
            <Button onClick={() => onOpenUpdateUserModal(user.row.id)} >
              <Edit2 className={styles.columnUserButtonEdit} />
              {user.row.id}
            </Button>
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
