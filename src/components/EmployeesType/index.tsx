import { useState, useEffect } from 'react'
import { DataGrid, GridColDef } from '@material-ui/data-grid'
import { Edit2 } from '@styled-icons/feather'

import { Button } from '../Button'

import { useEmployessType } from '../../hooks/useEmployeesType'
import styles from './styles.module.scss'

interface EmployeesTypeProps {
  onOpenUpdateEmployeeTypeModal: any
  onOpenCreateEmployeeTypeModal: () => void
}

export function EmployeesType({
  onOpenCreateEmployeeTypeModal,
  onOpenUpdateEmployeeTypeModal
}: EmployeesTypeProps) {
  const { employeesType } = useEmployessType()

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      width: 125
    },
    {
      field: 'description',
      headerName: 'Descrição',
      type: 'text',
      width: 250
    },
    {
      field: 'action',
      headerName: 'Ação',
      width: 150,
      renderCell: employeeType => {
        return (
          <>
            <Button
              onClick={() => onOpenUpdateEmployeeTypeModal(employeeType.row.id)}
            >
              <Edit2 className={styles.columnButtonEdit} />
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
          rows={employeesType}
          columns={columns}
          rowsPerPageOptions={[9]}
          pageSize={9}
          checkboxSelection
          disableSelectionOnClick
          className={styles.datagrid}
        />

        <Button onClick={onOpenCreateEmployeeTypeModal}>Criar</Button>
      </div>
    </div>
  )
}
