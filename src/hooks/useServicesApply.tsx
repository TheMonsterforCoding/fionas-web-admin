import {
    createContext,
    ReactNode,
    useState,
    useEffect,
    useContext
  } from 'react'
  import { AxiosResponse } from 'axios'
  
  import api from '../services/api'
  
  interface ServicesApplyProviderProps {
    children: ReactNode
  }
  
  interface ServicesApply {
    id: number
    created_at: string
    services_apply_customers_has_pets_id: number
    services_apply_employees_id: number
    services_apply_services_state_id: number
    services_apply_services_id: number
    part_day: number
    date: Date
  }
  
  type ServicesApplyCreate = Omit<ServicesApply, 'id' | 'created_at' | 'services_apply_employees_id'>
  
  interface ServicesApplyContextData {
    servicesApply: ServicesApply[]
    createServicesApply: (service: ServicesApplyCreate) => Promise<AxiosResponse>
  }
  
  export const ServicesApplyContext = createContext<ServicesApplyContextData>({} as ServicesApplyContextData)
  
  export function ServicesApplyProvider({ children }: ServicesApplyProviderProps) {
    const [servicesApply, setServicesApply] = useState<ServicesApply[]>([])
  
    useEffect(() => {
      api.get('/services_apply').then(response => setServicesApply(response.data))
    }, [])
  
    async function createServicesApply(servicesApplyCreate: ServicesApplyCreate) {
      const response = await api.post('/services_apply', servicesApplyCreate)
  
      const service = response.data
  
      setServicesApply([...servicesApply, service])
  
      return response
    }
  
    return (
      <ServicesApplyContext.Provider value={{ servicesApply, createServicesApply }}>
        {children}
      </ServicesApplyContext.Provider>
    )
  }
  
  export function useServicesApply() {
    const context = useContext(ServicesApplyContext)
  
    return context
  }