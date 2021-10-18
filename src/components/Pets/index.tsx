import Link from 'next/link'

import { DataGrid, GridRowsProp, GridColDef } from '@material-ui/data-grid'
import { Edit2, Heart } from '@styled-icons/feather'

import { Button } from '../Button'

import styles from './styles.module.scss'

interface PetsProps {
  onOpenUpdatePetModal: () => void
  onOpenCreatePetModal: () => void
}

export function Pets({ onOpenUpdatePetModal, onOpenCreatePetModal }: PetsProps) {
  const rows: GridRowsProp = [
    {
      id: 1,
      avatar:
        'https://e7.pngegg.com/pngimages/623/575/png-clipart-bulldog-computer-icons-pet-others-miscellaneous-pet.png',
      nombreMascota: 'jordan',
      generoMascota:'M',
      nacimientoMascota: '24/10/1943',
      age: 24,
      status: 'active'
    },
    {
      id: 2,
      avatar:
        'https://e7.pngegg.com/pngimages/623/575/png-clipart-bulldog-computer-icons-pet-others-miscellaneous-pet.png',
      nombreMascota: 'Negra',
      generoMascota:'F',
      nacimientoMascota: '24/10/1943',
      age: 25,
      status: 'active'
    },
    {
      id: 3,
      avatar:
        'https://e7.pngegg.com/pngimages/623/575/png-clipart-bulldog-computer-icons-pet-others-miscellaneous-pet.png',
      nombreMascota: 'Kin',
      generoMascota:'M',
      nacimientoMascota: '24/10/1943',
      age: 27,
      status: 'active'
    }
  ]

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'nombreMascota',
      headerName: 'Nombre',
      width: 250,
      renderCell: params => {
        return (
          <div className={styles.columnUserName}>
            <img src={params.row.avatar} alt="Avatar" />
            {params.row.nombreMascota}
          </div>
        )
      }
    },
    { field: 'generoMascota', headerName: 'Genero', width: 130, align:'center' },
    {
      field: 'nacimientoMascota',
      headerName: 'Nacimiento',
      type: 'date',
      width: 180,

    },
    {
      field: 'dueñoMascota',
      headerName: 'Dueño',
      width: 150
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: props => {
        return (
          <>
            {/* <Link passHref href={'/user/' + props.row.id}> */}
            <Link passHref href="#">
              <Button onClick={onOpenUpdatePetModal}>
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
          rows={rows}
          columns={columns}
          pageSize={9}
          checkboxSelection
          disableSelectionOnClick
          className={styles.datagrid}
        />

        <Button onClick={onOpenCreatePetModal}>
          <Heart />
          Criar
        </Button>
      </div>
    </div>
  )
}
