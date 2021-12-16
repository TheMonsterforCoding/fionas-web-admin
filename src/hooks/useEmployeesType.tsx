import {
  ReactNode,
  useState,
  createContext,
  useEffect,
  useContext
} from 'react'
import { AxiosResponse } from 'axios'

import api from '../services/api'

interface EmployeesTypeProviderProps {
  children: ReactNode
}

interface EmployeeType {
  id: number
  description: string
}

type EmployeeTypeCreate = Omit<EmployeeType, 'id'>

interface EmployeesTypeContextData {
  employeesType: EmployeeType[]
  createEmployeeType: (
    employeeType: EmployeeTypeCreate
  ) => Promise<AxiosResponse>
}

export const EmployeesTypeContext = createContext<EmployeesTypeContextData>(
  {} as EmployeesTypeContextData
)

export function EmployeesTypeProvider({
  children
}: EmployeesTypeProviderProps) {
  const [employeesType, setEmployeesType] = useState<EmployeeType[]>([])

  useEffect(() => {
    api.get('/employees_type').then(response => setEmployeesType(response.data))
  }, [])

  async function createEmployeeType(employeeTypeCreate: EmployeeTypeCreate) {
    const response = await api.post('/employees_type', employeeTypeCreate)

    const employeeType = response.data

    setEmployeesType([...employeesType, employeeType])

    return response
  }

  return (
    <EmployeesTypeContext.Provider
      value={{ employeesType, createEmployeeType }}
    >
      {children}
    </EmployeesTypeContext.Provider>
  )
}

export function useEmployessType() {
  const context = useContext(EmployeesTypeContext)

  return context
}
