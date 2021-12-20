import { useState } from 'react'

import { ServiceApply } from '../../components/ServicesApply'
import { UpdateServiceApplyModal } from '../../components/Modal/UpdateServiceApplyModal'
import { TaxiDog } from '../../components/TaxiDog'

export default function listServiceApply() {
  const [isUpdateServiceApplyModal, setIsUpdateServiceApplyModal] =
    useState(false)
  const [idServiceApply, setServiceApply] = useState('')

  function handleOpenUpdateServiceApplyModal(id: string) {
    setIsUpdateServiceApplyModal(true)
    setServiceApply(id)
  }

  function handleCloseUpdateServiceApplyModal() {
    setIsUpdateServiceApplyModal(false)
  }

  return (
    <>
      <ServiceApply
        onOpenUpdateServiceApplyModal={handleOpenUpdateServiceApplyModal}
      />

      <UpdateServiceApplyModal
        idServiceApply={idServiceApply}
        isOpen={isUpdateServiceApplyModal}
        onRequestClose={handleCloseUpdateServiceApplyModal}
      />
    </>
  )
}
