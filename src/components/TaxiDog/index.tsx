import styles from './styles.module.scss'
import {
  DirectionsRenderer,
  DirectionsService,
  DistanceMatrixService,
  GoogleMap,
  LoadScript,
  Marker
} from '@react-google-maps/api'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Button } from '../Button'
import { Edit } from '@styled-icons/feather'
import { DataGrid, GridColDef } from '@material-ui/data-grid'
import { useUsers } from '../../hooks/useUsers'
import { useCustomers } from '../../hooks/useCustomers'
import { useServicesApply } from '../../hooks/useServicesApply'
import { useCustomerHasPets } from '../../hooks/useCustomerHasPets'
import toast, { Toaster } from 'react-hot-toast'

const containerStyle = {
  width: '100%',
  height: '500px'
}
const center = {
  lat: -25.074948,
  lng: -50.129583
}
let customersFilter = []
const waypt: google.maps.DirectionsWaypoint[] = []

let ApiKey = 'AIzaSyDbq1JX-Wx8o_FpYKaDV-Xu7_t_m28VlPI'

export function TaxiDog() {
  const [response, setResponse] = useState(null)
  const [travelMode, setTravelMode] = useState('DRIVING')
  const [origin, setOrigin] = useState('-25.074948,-50.129583')
  const [destination, setDestination] = useState('')
  const [route, setRoute] = useState('')
  const { users } = useUsers()
  const { customers } = useCustomers()
  const { servicesApply } = useServicesApply()
  const { customerHasPets } = useCustomerHasPets()
  let gerarRouta = 'No'
  let customersTaxiFiltered = servicesApply.filter(service => {
    return (
      service.services_apply_services_id === 2 &&
      service.services_apply_services_state_id === 1
    )
  })

  let customerHasPetsFiltered = customerHasPets.filter(cHPets => {
    return customersTaxiFiltered.some(customer => {
      return customer.services_apply_customers_has_pets_id === cHPets.id
    })
  })

  let customersF = customers.filter(cstmr => {
    return customerHasPetsFiltered.some(customer => {
      return customer.customers_has_pets_customers_id === (cstmr.id as unknown)
    })
  })

  let customersFiltered = users.filter(user => {
    return customersF.some(customer => {
      return customer.customers_users_id === user.id
    })
  })

  const directionsCallback = React.useCallback(res => {
    console.log(res)

    if (res !== null) {
      if (res.status === 'OK') {
        setResponse(res)
        gerarRouta = 'Si'
      } else {
        console.log('response: ', res)
      }
    }
  }, [])

  function addWaypoint(id) {
    if (customersFiltered.some(e => e.id === id)) {
      const newList2 = customersFiltered.filter(item => item.id === id)
      const newList = customersFiltered.filter(item => item.id !== id)
      customersFiltered = newList
      toast.success('Usuário selecionado com susseso!')
      if (destination === '') {
        setDestination(newList2[0].address)
      } else {
        customersFilter.push(newList2[0])
      }
    } else {
      toast.error('Usuário ya selecionado!')
    }
  }

  const onClick = useCallback(() => {
    console.log(customersFilter)
    for (let i = 0; i < customersFilter.length; i++) {
      waypt.push({
        location: customersFilter[i].address,
        stopover: true
      })
    }
    setRoute('go')

  }, [])

  const onClick2 = useCallback(() => {
    if (gerarRouta === 'No' ) {
      toast.error('Debe gerar routa')
    } else {
      toast.success('Routa confirmada')


      
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
      field: 'address',
      headerName: 'Endereço',
      width: 250
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
      <LoadScript googleMapsApiKey={ApiKey}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={20}>
          {route !== '' && (
            <DirectionsService
              options={{
                destination: destination,
                origin: origin,
                travelMode: travelMode as any,
                waypoints: waypt
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

      <table className={styles.center}>
        <tbody>
          <tr>
            <td>
              &nbsp;
              <button type="submit" className={styles.button} onClick={onClick}>
                Gerar Rota
              </button>
            </td>
            <td>
              &nbsp;
              <button
                type="submit"
                className={styles.button}
                onClick={onClick2}
              >
                Confirmar Rota
              </button>
            </td>
          </tr>
        </tbody>
      </table>

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
/*   const checkboxArray = document.getElementById(
    'waypoints'
  ) as HTMLSelectElement */

/*       for (let i = 0; i < checkboxArray.length; i++) {
        if (checkboxArray.options[i].selected) {
          waypts.push({
            location: (checkboxArray[i] as HTMLOptionElement).value,
            stopover: true,
          });
        }
      } */

{
  /*       <input
        id="DESTINATION"
        className="form-control"
        type="text"
        ref={destinationRef}
      />
 */
}
