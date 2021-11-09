import {
  ReactNode,
  useState,
  createContext,
  useEffect,
  useContext
} from 'react'
// import { AxiosResponse } from 'axios'

import api from '../services/api'

interface EmployeesProviderProps {
  children: ReactNode
}

interface Employee {
  id: number
  description: string
  employees_users_id: string
  employees_employees_type_id: number
}

// type CreateEmployee = Omit<Employee, 'id'>

interface EmployeesContextData {
  employees: Employee[]
  // createEmployee: (employee: CreateEmployee) => Promise<AxiosResponse>
}

export const EmployeesContext = createContext<EmployeesContextData>(
  {} as EmployeesContextData
)

export function EmployeesProvider({ children }: EmployeesProviderProps) {
  const [employees, setEmployees] = useState<Employee[]>([])

  useEffect(() => {
    api.get('/employees').then(response => setEmployees(response.data))
  }, [])

  // async function createEmployee(employeeCreate: CreateEmployee) {
  //   const response = await api.post('/employees', employeeCreate)

  //   const employee = response.data

  //   setEmployees([...employees, employee])

  //   return response
  // }

  return (
    // <EmployeesContext.Provider value={{ employees, createEmployee }}>
    <EmployeesContext.Provider value={{ employees }}>
      {children}
    </EmployeesContext.Provider>
  )
}

export function useEmployees() {
  const context = useContext(EmployeesContext)

  return context
}
