import Link from 'next/link'

import { DataGrid, GridRowsProp, GridColDef } from '@material-ui/data-grid'
import { Edit2, Heart } from '@styled-icons/feather'

import { Button } from '../Button'

import styles from './styles.module.scss'
import { useEffect, useState } from 'react'
import api from '../../services/api'

interface PetsProps {
  onOpenUpdatePetModal: any
  onOpenCreatePetModal: () => void
}
interface PetType{
  petId: string
  name: string
  gender: string
  dateBirth: string
  size: string
  breed: string
  state: boolean
  createAt: string
  dueñoMascota:string
}

export function Pets({ onOpenUpdatePetModal, onOpenCreatePetModal }: PetsProps) {
  const [pets, setPets] = useState<PetType[]>([])

  useEffect(() => {
    api.get('/pets').then(response => {
      setPets(response.data)
      console.log(response.data)
    })
  }, [])

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
      field: 'dateBirth',
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
      renderCell: (pet) => {
        return (
          <>
            <Button onClick={() => onOpenUpdatePetModal(pet.row.id)} >
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
          pageSize={9}
          checkboxSelection
          disableSelectionOnClick
          className={styles.datagrid}
        />

        <Button onClick={onOpenCreatePetModal}>
          Criar
        </Button>
      </div>
    </div>
  )
}
