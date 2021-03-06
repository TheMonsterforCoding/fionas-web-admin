import { DataGrid, GridColDef } from '@material-ui/data-grid'
import { Edit2, UserPlus } from '@styled-icons/feather'

import { Button } from '../Button'

import { useUsers } from '../../hooks/useUsers'
import { useEmployees } from '../../hooks/useEmployees'

import styles from './styles.module.scss'

interface UsersProps {
  onOpenUpdateUserModal: any
  onOpenCreateUserModal: () => void
}

export function Users({
  onOpenUpdateUserModal,
  onOpenCreateUserModal
}: UsersProps) {
  const { users } = useUsers()
  const { employees } = useEmployees()

  const employeFiltered = users.filter((user) => {
    return employees.some((employee) => {
      return employee.employees_users_id === user.id;
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
          rows={employeFiltered}
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
