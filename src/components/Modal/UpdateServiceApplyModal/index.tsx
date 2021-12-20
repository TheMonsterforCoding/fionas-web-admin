import { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Modal from 'react-modal'
import { X, Edit2 } from '@styled-icons/feather'

import { Button } from '../../Button'
import styles from './styles.module.scss'
import api from '../../../services/api'

interface UpdateServiceProps {
  isOpen: boolean
  onRequestClose: () => void
  idServiceApply: string
}

interface UpdateService {
  description: string
}

export function UpdateServiceApplyModal({
  isOpen,
  onRequestClose,
  idServiceApply
}: UpdateServiceProps) {


  

  return (
    <>
   
    </>
  )
}
