import Link from 'next/link'

import { DataGrid, GridRowsProp, GridColDef } from '@material-ui/data-grid'
import { Edit2, Heart } from '@styled-icons/feather'

import { Button } from '../Button'

import styles from './styles.module.scss'

interface PetsProps {
  onOpenUpdatePetModal: () => void
}

export function Pets({ onOpenUpdatePetModal }: PetsProps) {
  const rows: GridRowsProp = [
    {
      id: 1,
      avatar:
        'https://avatars.githubusercontent.com/u/59587859?s=400&u=e2c61934c682f1bc9a5d07dfb9cb172bf3cf8b9c&v=4',
      name: 'Leandro Cruz',
      email: 'lcruz@hotmail.com',
      age: 24,
      status: 'active'
    },
    {
      id: 2,
      avatar:
        'https://avatars.githubusercontent.com/u/59587859?s=400&u=e2c61934c682f1bc9a5d07dfb9cb172bf3cf8b9c&v=4',
      name: 'Kevin Cruz',
      email: 'kcruz@hotmail.com',
      age: 25,
      status: 'active'
    },
    {
      id: 3,
      avatar:
        'https://avatars.githubusercontent.com/u/59587859?s=400&u=e2c61934c682f1bc9a5d07dfb9cb172bf3cf8b9c&v=4',
      name: 'Jonathan Cruz',
      email: 'jcruz@hotmail.com',
      age: 27,
      status: 'active'
    }
  ]

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'user',
      headerName: 'Usuario',
      width: 250,
      renderCell: params => {
        return (
          <div className={styles.columnUserName}>
            <img src={params.row.avatar} alt="Avatar" />
            {params.row.name}
          </div>
        )
      }
    },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 100
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

        <Button onClick={onOpenUpdatePetModal}>
          <Heart />
          Criar
        </Button>
      </div>
    </div>
  )
}
