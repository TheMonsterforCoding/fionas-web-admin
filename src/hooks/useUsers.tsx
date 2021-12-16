import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useContext
} from 'react'
import { AxiosResponse } from 'axios'

import api from '../services/api'

interface UsersProviderProps {
  children: ReactNode
}

interface User {
  id: string
  cpf: string
  first_name: string
  last_name: string
  gender: boolean
  password: string
  year_of_birth: number
  address: string
  mail: string
  mobile_number: string
  state: boolean
  created_at: string
  updated_at: string
}

type UserCreate = Omit<User, 'id' | 'created_at' | 'updated_at'>
// type UserCreate = Pick<User, 'id' | 'created_at' | 'updated_at'>

interface UsersContextData {
  users: User[]
  createUser: (user: UserCreate) => Promise<AxiosResponse>
}

export const UsersContext = createContext<UsersContextData>(
  {} as UsersContextData
)

export function UsersProvider({ children }: UsersProviderProps) {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    api.get('/users').then(response => {
      setUsers(response.data)
    })
  }, [])

  async function createUser(userCreate: UserCreate) {
    const response = await api.post('/users', userCreate)

    const user = response.data

    setUsers([...users, user])

    return response
  }

  return (
    <UsersContext.Provider value={{ users, createUser }}>
      {children}
    </UsersContext.Provider>
  )
}

export function useUsers() {
  const context = useContext(UsersContext)

  return context
}
