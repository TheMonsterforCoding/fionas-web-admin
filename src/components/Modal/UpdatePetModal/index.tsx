import { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
import Modal from 'react-modal'
import Image from 'next/image'

import {
  Edit2,
  X,
  User,
  Mail,
  Users as Gen,
  Watch,
  ToggleLeft,
  UserCheck,
  Upload,
  Phone,
  MapPin
} from '@styled-icons/feather'
import AvatarImg from '../../../../public/avatar.jpg'

import { Button } from '../../Button'

import styles from './styles.module.scss'

import api from '../../../services/api'

interface UpdatePetModalProps {
  isOpen: boolean
  onRequestClose: () => void
}
interface PetType {
  id: string
  cpf: string
  avatar: string
  firstName: string
  lastName: string
  genderId: boolean
  password: string
  yearOfBirth: string
  address: string
  mail: string
  mobileNumber: string
  state: boolean
  admin: boolean
  createdAt: string
  updated_at: string
}

export function UpdatePetModal({ isOpen, onRequestClose }: UpdatePetModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.Modal}
      overlayClassName={styles.Overlay}
    >
      <div className={styles.wrapper}>
        <header>
          <h2>Atualizar Pet</h2>

          <X className={styles.buttonClose} onClick={onRequestClose} />
        </header>
      </div>
    </Modal>
  )
}
