import { DataGrid, GridColDef } from '@material-ui/data-grid'
import { Edit2, UserPlus } from '@styled-icons/feather'

import { Button } from '../Button'

import { useUsers } from '../../hooks/useUsers'
import { useCustomers } from '../../hooks/useCustomers'

import styles from './styles.module.scss'

interface UsersProps {
  onOpenUpdateUserModal: any
  onOpenCreateUserModal: () => void
}



export function Customers({
  onOpenUpdateUserModal,
  onOpenCreateUserModal
}: UsersProps) {
  const { users } = useUsers()
  const { customers } = useCustomers()
  
  const customersFiltered = users.filter((user) => {
    return customers.some((customer) => {
      return customer.customers_users_id === user.id;
    });
  });

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
      field: 'actionDog',
      headerName: 'Animais de estimação',
      width: 220,
      renderCell: user => {
        return (
          <>
            <Button onClick={() => onOpenUpdateUserModal(user.row.id)}>
              <Edit2 className={styles.columnUserButtonEdit} />
              Ver
            </Button>
          </>
        )
      }
    },
    {
      field: 'action',
      headerName: 'Ação',
      width: 150,
      renderCell: user => {
        return (
          <>
            <Button onClick={() => onOpenUpdateUserModal(user.row.id)}>
              <Edit2 className={styles.columnUserButtonEdit} />
              Editar
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
          rows={customersFiltered}
          rowsPerPageOptions={[9]}
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
