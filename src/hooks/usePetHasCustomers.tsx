import {
    createContext,
    ReactNode,
    useState,
    useEffect,
    useContext
  } from 'react'
  import { AxiosResponse } from 'axios'
  
  import api from '../services/api'
  
  interface CustomerHasPetsProviderProps {
    children: ReactNode
  }
  
  interface CustomerHasPet {
    id: number
    customers_has_pets_pets_id: number
    customers_has_pets_customers_id: number
  }
  
  type CustomerHasPetCreate = Omit<CustomerHasPet, 'id'>
  
  interface CustomerHasPetsContextData {
    customerhaspets: CustomerHasPet[]
    createCustomerHasPet: (customerHasPet: CustomerHasPetCreate) => Promise<AxiosResponse>
  }
  
  export const CustomerHasPetsContext = createContext<CustomerHasPetsContextData>({} as CustomerHasPetsContextData)
  
  export function CustomerHasPetsProvider({ children }: CustomerHasPetsProviderProps) {
    const [customerHasPets, setCustomerHasPets] = useState<CustomerHasPet[]>([])
  
    useEffect(() => {
      api.get('/customers_has_pets').then(response => setCustomerHasPets(response.data))
    }, [])
  
    async function createCustomerHasPet(customerHasPetCreate: CustomerHasPetCreate) {
      const response = await api.post('/customers_has_pets', customerHasPetCreate)
  
      const customerHasPet = response.data
  
      setCustomerHasPets([...customerHasPets, customerHasPet])
  
      return response
    }
  
    return (
      <CustomerHasPetsContext.Provider value={{ customerHasPet, createCustomerHasPet }}>
        {children}
      </CustomerHasPetsContext.Provider>
    )
  }
  
  export function useCustomerHasPets() {
    const context = useContext(CustomerHasPetsContext)
  
    return context
  }
  