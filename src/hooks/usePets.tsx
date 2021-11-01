import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useContext
} from 'react'
import toast from 'react-hot-toast'

import api from '../services/api'

interface PetsProviderProps {
  children: ReactNode
}

interface Pet {
  id: string
  name: string
  size: string
  gender: boolean
  year_of_birth: number
  breed: string
  state: boolean
  created_at: string
  updated_at: string
}

type PetCreate = Omit<Pet, 'id' | 'created_at' | 'updated_at'>

interface PetsContextData {
  pets: Pet[]
  createPet: (pet: PetCreate) => Promise<void>
}

export const PetsContext = createContext<PetsContextData>({} as PetsContextData)

export function PetsProvider({ children }: PetsProviderProps) {
  const [pets, setPets] = useState<Pet[]>([])

  useEffect(() => {
    api.get('/pets').then(response => setPets(response.data))
  }, [])

  async function createPet(petCreate: PetCreate) {
    const response = await api.post('/pets', petCreate)

    const pet = response.data

    setPets([...pets, pet])
  }

  return (
    <PetsContext.Provider value={{ pets, createPet }}>
      {children}
    </PetsContext.Provider>
  )
}

export function usePets() {
  const context = useContext(PetsContext)

  return context
}
