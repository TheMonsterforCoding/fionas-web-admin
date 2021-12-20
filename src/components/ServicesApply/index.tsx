import { useState, useEffect } from 'react'
import { DataGrid, GridColDef } from '@material-ui/data-grid'
import { Edit2 } from '@styled-icons/feather'
import { Button } from '../Button'
import styles from './styles.module.scss'
import { useUsers } from '../../hooks/useUsers'
import { useCustomers } from '../../hooks/useCustomers'
import { useServicesApply } from '../../hooks/useServicesApply'
import { useCustomerHasPets } from '../../hooks/useCustomerHasPets'

interface ServiceApplyProps {
  onOpenUpdateServiceApplyModal: any
}

export function ServiceApply({
  onOpenUpdateServiceApplyModal
}: ServiceApplyProps) {
  const { users } = useUsers()
  const { customers } = useCustomers()
  const { servicesApply } = useServicesApply()
  const { customerHasPets } = useCustomerHasPets()

  let customersTaxiFiltered = servicesApply.filter(service => {
    return (
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


  let customersTaxiFiltered2 = servicesApply.filter(service => {
    return (
      service.services_apply_services_state_id === 2
    )
  })

  let customerHasPetsFiltered2 = customerHasPets.filter(cHPets => {
    return customersTaxiFiltered2.some(customer => {
      return customer.services_apply_customers_has_pets_id === cHPets.id
    })
  })

  let customersF2 = customers.filter(cstmr => {
    return customerHasPetsFiltered2.some(customer => {
      return customer.customers_has_pets_customers_id === (cstmr.id as unknown)
    })
  })

  let customersFiltered2 = users.filter(user => {
    return customersF2.some(customer => {
      return customer.customers_users_id === user.id
    })
  })

  let customersTaxiFiltered3 = servicesApply.filter(service => {
    return (
      service.services_apply_services_state_id === 3
    )
  })

  let customerHasPetsFiltered3 = customerHasPets.filter(cHPets => {
    return customersTaxiFiltered3.some(customer => {
      return customer.services_apply_customers_has_pets_id === cHPets.id
    })
  })

  let customersF3 = customers.filter(cstmr => {
    return customerHasPetsFiltered3.some(customer => {
      return customer.customers_has_pets_customers_id === (cstmr.id as unknown)
    })
  })

  let customersFiltered3 = users.filter(user => {
    return customersF3.some(customer => {
      return customer.customers_users_id === user.id
    })
  })




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
          </>
        )
      }
    }
  ]

  return (
    <div className={styles.container}>
      <div >
        <div >
          <h3>Clientes em espera</h3>
          <div >
            <div className={styles.table}>
              <DataGrid
                rows={customersFiltered}
                rowsPerPageOptions={[5]}
                columns={columns}
                pageSize={5}
                className={styles.datagrid}
                autoHeight
              />
            </div>
          </div>
        </div>
        <br></br>
        <div >
          <h3>Confirmados</h3>
          <div >
            <div className={styles.table}>
              <DataGrid
                rows={customersFiltered2}
                rowsPerPageOptions={[5]}
                columns={columns}
                pageSize={5}
                className={styles.datagrid}
                autoHeight
              />
            </div>
          </div>
        </div>
        <br></br>
        <div >
          <h3>Taxi em ruta</h3>
          <div >
            <div className={styles.table}>
              <DataGrid
                rows={customersFiltered3}
                rowsPerPageOptions={[5]}
                columns={columns}
                pageSize={5}
                className={styles.datagrid}
                autoHeight
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} /* 
<div className={styles.container}>
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
<br></br>
<h3>Confirmados</h3>
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
<br></br>
<h3>Taxi em ruta</h3>
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
<br></br>
<h3>Finalizados</h3>
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
</div> */
