import { useState } from 'react'

import { EmployeesType } from '../../components/EmployeesType'
import { CreateEmployeeTypeModal } from '../../components/Modal/CreateEmployeeTypeModal'
import { UpdateEmployeeTypeModal } from '../../components/Modal/UpdateEmployeeTypeModal'

export default function listEmployeeType() {
  const [isUpdateEmployeeTypeModal, setIsUpdateEmployeeTypeModal] =
    useState(false)
  const [isCreateEmployeeTypeModal, setIsCreateEmployeeTypeModal] =
    useState(false)
  const [idEmployeeType, setIdEmployeeType] = useState('')

  function handleOpenUpdateEmployeeTypeModal(id: string) {
    setIsUpdateEmployeeTypeModal(true)

    setIdEmployeeType(id)
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

      <UpdateEmployeeTypeModal
        idEmployeeType={idEmployeeType}
        isOpen={isUpdateEmployeeTypeModal}
        onRequestClose={handleCloseUpdateEmployeeTypeModal}
      />

      <CreateEmployeeTypeModal
        isOpen={isCreateEmployeeTypeModal}
        onRequestClose={handleCloseCreateEmployeeTypeModal}
      />
    </>
  )
}
