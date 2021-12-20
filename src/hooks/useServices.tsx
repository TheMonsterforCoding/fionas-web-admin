import {
    createContext,
    ReactNode,
    useState,
    useEffect,
    useContext
  } from 'react'
  import { AxiosResponse } from 'axios'
  
  import api from '../services/api'
  
  interface ServicesProviderProps {
    children: ReactNode
  }
  
  interface Service {
    id: number
    price: string
    description: string
    created_at: string
    updated_at: string
  }
  
  type ServiceCreate = Omit<Service, 'id' | 'created_at' | 'updated_at'>
  
  interface ServicesContextData {
    services: Service[]
    createService: (service: ServiceCreate) => Promise<AxiosResponse>
  }
  
  export const ServicesContext = createContext<ServicesContextData>({} as ServicesContextData)
  
  export function ServicesProvider({ children }: ServicesProviderProps) {
    const [services, setServices] = useState<Service[]>([])
  
    useEffect(() => {
      api.get('/services').then(response => setServices(response.data))
    }, [])
  
    async function createService(serviceCreate: ServiceCreate) {
      const response = await api.post('/services', serviceCreate)
  
      const service = response.data
  
      setServices([...services, service])
  
      return response
    }
  
    return (
      <ServicesContext.Provider value={{ services, createService }}>
        {children}
      </ServicesContext.Provider>
    )
  }
  
  export function useServices() {
    const context = useContext(ServicesContext)
  
    return context
  }