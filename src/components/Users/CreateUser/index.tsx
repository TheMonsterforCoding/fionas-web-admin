import { useState } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import Modal from 'react-modal'

// import { Button } from '../../Button'
import { Header } from '../../Header'

import styles from './styles.module.scss'

// interface ParamsProps {
//   params: HTMLAttributes
// }

export function CreateUser() {
  const [ isNewUserModalOpen, setIsNewUserModalOpen ] = useState(false)

  function handleOpenCreateUserModal() {
    setIsNewUserModalOpen(true)
  }

  function handleCloseCreateUserModal() {
    setIsNewUserModalOpen(false)
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'user',
      headerName: 'Usuario',
      width: 200,
      renderCell: params => {
        return (
          <div className={styles.user}>
            <img src={params.row.avatar} alt="" />
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
    }
  ]

  const rows = [
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
    },
    {
      id: 4,
      avatar:
        'https://avatars.githubusercontent.com/u/59587859?s=400&u=e2c61934c682f1bc9a5d07dfb9cb172bf3cf8b9c&v=4',
      name: 'Alexandra Laroca',
      email: 'alelaroca@hotmail.com',
      age: 22,
      status: 'active'
    },
    {
      id: 5,
      avatar:
        'https://avatars.githubusercontent.com/u/59587859?s=400&u=e2c61934c682f1bc9a5d07dfb9cb172bf3cf8b9c&v=4',
      name: 'Jaqueline Laroca',
      email: 'jaqlaroca@hotmail.com',
      age: 32,
      status: 'active'
    },
    {
      id: 6,
      avatar:
        'https://avatars.githubusercontent.com/u/59587859?s=400&u=e2c61934c682f1bc9a5d07dfb9cb172bf3cf8b9c&v=4',
      name: 'Adriele Laroca',
      email: 'adrilaroca@hotmail.com',
      age: 17,
      status: 'active'
    },
    {
      id: 7,
      avatar:
        'https://avatars.githubusercontent.com/u/59587859?s=400&u=e2c61934c682f1bc9a5d07dfb9cb172bf3cf8b9c&v=4',
      name: 'Jordani Laroca',
      email: 'jorlaroca@hotmail.com',
      age: 27,
      status: 'active'
    },
    {
      id: 8,
      avatar:
        'https://avatars.githubusercontent.com/u/59587859?s=400&u=e2c61934c682f1bc9a5d07dfb9cb172bf3cf8b9c&v=4',
      name: 'Bruno Marinho',
      email: 'bmarinho@hotmail.com',
      age: 34,
      status: 'active'
    },
    {
      id: 9,
      avatar:
        'https://avatars.githubusercontent.com/u/59587859?s=400&u=e2c61934c682f1bc9a5d07dfb9cb172bf3cf8b9c&v=4',
      name: 'Tito Saavedra',
      email: 'tsaavedra@hotmail.com',
      age: 25,
      status: 'active'
    },
    {
      id: 10,
      avatar:
        'https://avatars.githubusercontent.com/u/59587859?s=400&u=e2c61934c682f1bc9a5d07dfb9cb172bf3cf8b9c&v=4',
      name: 'Hector Barrios',
      email: 'hbarrios@hotmail.com',
      age: 24,
      status: 'active'
    },
    {
      id: 11,
      avatar:
        'https://avatars.githubusercontent.com/u/59587859?s=400&u=e2c61934c682f1bc9a5d07dfb9cb172bf3cf8b9c&v=4',
      name: 'Joaquin Diaz',
      email: 'jdiaz@hotmail.com',
      age: 23,
      status: 'active'
    }
  ]

  return (
    <div className={styles.container}>
      <Header />

      <Modal
        isOpen={isNewUserModalOpen}
      >
        <h1>Criar usuario</h1>
      </Modal>

      <div className={styles.content}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={9}
          checkboxSelection
        />

        <button onClick={handleOpenCreateUserModal} >Criar</button>
        {/* <Button onClick={haNewenCreateUserModal} >Crear</Button> */}
        </div>
    </div>
  )
}
