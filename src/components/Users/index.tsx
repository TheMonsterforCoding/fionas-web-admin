import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Modal from 'react-modal'

import { DataGrid } from '@material-ui/data-grid'
import { Edit2, X, User, Mail, Users as Gen, Watch, ToggleLeft, UserCheck } from '@styled-icons/feather'

import { Button } from '../Button'
import { Header } from '../Header'
import AvatarImg from '../../../public/avatar.jpg'

import styles from './styles.module.scss'

type RowProps = {
  id: number
  avatar: string
  name: string
  email: string
  age: number
  status: string
}

interface ActionProps {
  displayName: string
  children: React.ReactNode
  row: RowProps
}

export function Users() {
  const columns = [
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
      renderCell: (params: ActionProps) => {
        return (
          <>
            {/* <Link passHref href={'/user/' + params.row.id}> */}
            <Link passHref href="#">
              <Button>
                <Edit2 className={styles.columnUserButtonEdit} />
                Editar
              </Button>
            </Link>
          </>
        )
      }
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

  const [isOpenModalUser, setIsOpenModalUser] = useState(false)

  function handleOpenModal() {
    setIsOpenModalUser(true)
  }

  function handleCloseModal() {
    setIsOpenModalUser(false)
  }

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.content}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={9}
          checkboxSelection
          disableSelectionOnClick
        />

        <Button onClick={handleOpenModal}>Crear</Button>

        <Modal isOpen={isOpenModalUser} onRequestClose={handleCloseModal}>
          <div className={styles.user}>
            <header>
              <h1>Edit User</h1>
              <X className={styles.buttonClose} onClick={handleCloseModal} />
            </header>
          </div>

          <div className={styles.userContainer}>
            <div className={styles.userShow}>
              <header>
                <Image src={AvatarImg} alt="Avatar" />
                <div className={styles.userShowHeaderInfo}>
                  <span className={styles.name}>Leandro Cruz</span>
                  <span className={styles.moreInfo}>Software Engineer</span>
                </div>
              </header>

              <main>
                <span className={styles.titleMain}>Account Details</span>
                <div className={styles.userInfo}>
                  <User />
                  <span>Leandro Cruz</span>
                </div>
                <div className={styles.userInfo}>
                  <Gen />
                  <span>masculino</span>
                </div>
                <div className={styles.userInfo}>
                  <Watch />
                  <span>24 anos</span>
                </div>
                <span className={styles.titleMain}>Contact Details</span>
                <div className={styles.userInfo}>
                  <Mail />
                  <span>leandro.cruz@hotmail.com</span>
                </div>
                <div className={styles.userInfo}>
                  <UserCheck />
                  <span>admin: sim</span>
                </div>
                <div className={styles.userInfo}>
                  <ToggleLeft />
                  <span>estado: activo</span>
                </div>
              </main>
            </div>

            <div className={styles.userUpdate}></div>
          </div>
        </Modal>
      </div>
    </div>
  )
}
