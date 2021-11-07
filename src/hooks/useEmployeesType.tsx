import {
  ReactNode,
  useState,
  createContext,
  useEffect,
  useContext
} from 'react'

import api from '../services/api'

interface EmployeesTypeProviderProps {
  children: ReactNode
}

interface employeeType {
  id: number
  description: string
}

interface EmployeesTypeContextData {
  employeesType: employeeType[]
}

export const EmployeesTypeContext = createContext<EmployeesTypeContextData>(
  {} as EmployeesTypeContextData
)

export function EmployeesTypeProvider({
  children
}: EmployeesTypeProviderProps) {
  const [employeesType, setEmployeesType] = useState<employeeType[]>([])

  useEffect(() => {
    api.get('/employees_type').then(response => setEmployeesType(response.data))
  }, [])

  return (
    <EmployeesTypeContext.Provider value={{ employeesType }}>
      {children}
    </EmployeesTypeContext.Provider>
  )
}

export function useEmployessType() {
  const context = useContext(EmployeesTypeContext)

  return context
}
