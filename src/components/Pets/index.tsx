import { DataGrid, GridColDef } from '@material-ui/data-grid'
import { Edit2 } from '@styled-icons/feather'
import { usePets } from '../../hooks/usePets'

import { Button } from '../Button'

import styles from './styles.module.scss'

interface PetsProps {
  onOpenUpdatePetModal: any
  onOpenCreatePetModal: () => void
}
interface PetType {
  petId: string
  name: string
  gender: string
  year_of_birth: string
  size: string
  breed: string
  state: boolean
  createAt: string
  dueñoMascota: string
}

export function Pets({
  onOpenUpdatePetModal,
  onOpenCreatePetModal
}: PetsProps) {
  const { pets } = usePets()
  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Nombre de mascota',
      width: 125
    },
    {
      field: 'gender',
      headerName: 'Genero',
      type: 'text',
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
    },
    {
      field: 'action',
      headerName: 'Ação',
      width: 150,
      renderCell: pet => {
        return (
          <>
            <Button onClick={() => onOpenUpdatePetModal(pet.row.id)}>
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
          rows={pets}
          columns={columns}
          rowsPerPageOptions={[9]}
          pageSize={9}
          checkboxSelection
          disableSelectionOnClick
          className={styles.datagrid}
        />

        <Button onClick={onOpenCreatePetModal}>Criar</Button>
      </div>
    </div>
  )
}
