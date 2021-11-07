import { useState } from 'react'

import { EmployeesType } from '../../components/EmployeesType'
import { CreateEmployeeTypeModal } from '../../components/Modal/CreateEmployeeType'
import { UpdateEmployeeTypeModal } from '../../components/Modal/UpdateEmployeeType'

export default function listEmployeeType() {
  const [isUpdateEmployeeTypeModal, setIsUpdateEmployeeTypeModal] =
    useState(false)
  const [isCreateEmployeeTypeModal, setIsCreateEmployeeTypeModal] =
    useState(false)
  const [idEmployeeTypeToUpdate, setIdEmployeeTypeToUpdate] = useState('')

  function handleOpenUpdateEmployeeTypeModal(id: string) {
    setIsUpdateEmployeeTypeModal(true)

    setIdEmployeeTypeToUpdate(id)
  }

  function handleCloseUpdateEmployeeTypeModal() {
    setIsUpdateEmployeeTypeModal(false)
  }

  function handleOpenCreateEmployeeTypeModal() {
    setIsCreateEmployeeTypeModal(true)
  }

  function handleCloseCreateEmployeeTypeModal() {
    setIsCreateEmployeeTypeModal(false)
  }

  return (
    <>
      <EmployeesType
        onOpenCreateEmployeeTypeModal={handleOpenCreateEmployeeTypeModal}
        onOpenUpdateEmployeeTypeModal={handleOpenUpdateEmployeeTypeModal}
      />

      <CreateEmployeeTypeModal
        isOpen={isCreateEmployeeTypeModal}
        onRequestClose={handleCloseCreateEmployeeTypeModal}
      />

      <UpdateEmployeeTypeModal
        isOpen={isUpdateEmployeeTypeModal}
        onRequestClose={handleCloseUpdateEmployeeTypeModal}
      />
    </>
  )
}
