import styles from './styles.module.scss'
import {
  DirectionsRenderer,
  DirectionsService,
  GoogleMap,
  LoadScript,
  Marker
} from '@react-google-maps/api'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Button } from '../Button'
import { Edit, Users } from '@styled-icons/feather'
import { DataGrid, GridColDef } from '@material-ui/data-grid'
import { useUsers } from '../../hooks/useUsers'
import { useCustomers } from '../../hooks/useCustomers'
import { randomInt } from 'crypto'
import toast, { Toaster } from 'react-hot-toast'

const containerStyle = {
  width: '100%',
  height: '500px'
}
const center = {
  lat: -25.074948,
  lng: -50.129583
}

let ApiKey = 'AIzaSyDbq1JX-Wx8o_FpYKaDV-Xu7_t_m28VlPI'

export function TaxiDog() {
  const [response, setResponse] = useState(null)
  const [travelMode, setTravelMode] = useState('DRIVING')
  const [origin, setOrigin] = useState('-25.074948,-50.129583')
  const [destination, setDestination] = useState('')
  const destinationRef = useRef(null)
  const waypts: google.maps.DirectionsWaypoint[] = []
  const { users } = useUsers()
  const { customers } = useCustomers()
  let customersFiltered = users.filter(user => {
    return customers.some(customer => {
      return customer.customers_users_id === user.id
    })
  })

  const directionsCallback = React.useCallback(res => {
    console.log(res)

    if (res !== null) {
      if (res.status === 'OK') {
        setResponse(res)
      } else {
        console.log('response: ', res)
      }
    }
  }, [])

  /*   const checkboxArray = document.getElementById(
    'waypoints'
  ) as HTMLSelectElement */
  function addWaypoint(id) {
    if (customersFiltered.some(e => e.id === id)) {
      const newList = customersFiltered.filter(item => item.id !== id)
      customersFiltered = newList
      console.log(customersFiltered)
      toast.success('Usuário selecionado com susseso!')
    } else {
      toast.error('Usuário ya selecionado!')
    }
  }

  const onClick = useCallback(() => {
    if (destinationRef.current.value !== '') {
      /*       for (let i = 0; i < checkboxArray.length; i++) {
        if (checkboxArray.options[i].selected) {
          waypts.push({
            location: (checkboxArray[i] as HTMLOptionElement).value,
            stopover: true,
          });
        }
      } */
      setDestination(destinationRef.current.value)
      console.log(waypts)
    }
  }, [])

  const columns: GridColDef[] = [
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
      field: 'mobile_number',
      headerName: 'Celular',
      width: 150
    },
    {
      field: 'actionDog',
      headerName: 'Selecionar',
      width: 190,
      align: 'center',
      renderCell: user => {
        return (
          <>
            <Button onClick={() => addWaypoint(user.row.id)}>
              <Edit className={styles.columnUserButtonEdit} />
              Selecionar
            </Button>
          </>
        )
      }
    }
  ]

  return (
    <div className={styles.container}>
      <input
        id="DESTINATION"
        className="form-control"
        type="text"
        ref={destinationRef}
      />

      <div className={styles.chart}>
        <LoadScript googleMapsApiKey={ApiKey}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={20}
          >
            {destination !== '' && (
              <DirectionsService
                options={{
                  destination: destination,
                  origin: origin,
                  travelMode: travelMode as any,
                  waypoints: waypts
                }}
                callback={directionsCallback}
              />
            )}

            {response !== null && (
              <DirectionsRenderer
                options={{
                  directions: response
                }}
              />
            )}
            <Marker
              position={center}
              icon={'https://i.ibb.co/k2dJnTw/icono-fionas.png'}
            />
          </GoogleMap>
        </LoadScript>
        <br></br>
        <button className={styles.button} type="button" onClick={onClick}>
          Gerar Rota
        </button>
        <h3>Clientes em espera</h3>
        <div className={styles.widget}>
          <div className={styles.table}>
            <DataGrid
              rows={customersFiltered}
              rowsPerPageOptions={[3]}
              columns={columns}
              pageSize={3}
              className={styles.datagrid}
              autoHeight
            />
          </div>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={true} />
    </div>
  )
}

{
  /* <DataGrid
rows={users}
rowsPerPageOptions={[4]}
columns={columns}
pageSize={4}
disableSelectionOnClick
className={styles.datagrid}
/> */
}
