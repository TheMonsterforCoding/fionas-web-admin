import { createContext, ReactNode, useEffect, useState } from "react"
import toast from "react-hot-toast"
import api from '../services/api'

interface UsersProviderProps {
  children: ReactNode
}

interface User {
  id: string
  cpf: string
  avatar: string
  first_name: string
  last_name: string
  gender: boolean
  password: string
  year_of_birth: number
  address: string
  mail: string
  mobile_number: number
  state: boolean
  created_at: string
  updated_at: string
}

type UserCreate = Omit<User, 'id' | 'created_at' | 'updated_at'>

interface UsersContextData {
  users: User[]
  createUser: (user: UserCreate) => Promise<void>
}

export const UsersContext = createContext<UsersContextData>({} as UsersContextData)

export function UsersProvider({ children }: UsersProviderProps) {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    api.get('/users').then(response => {
      setUsers(response.data)
    })
  }, [])

  async function createUser(userCreate: UserCreate) {
    try {
      const response = await api.post('/users', userCreate)
      const { user } = response.data

      setUsers([...users, user])

      toast.success('Usuário cadastrado com susseso!')
    } catch(err) {
        console.log(err)
        toast.error('Dados de usuario incorreto!')
    }
  }

  return (
    <UsersContext.Provider value={{users, createUser}}>
      {children}
    </UsersContext.Provider>
  )
}

