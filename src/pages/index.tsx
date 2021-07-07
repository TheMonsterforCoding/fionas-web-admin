import { Sidebar } from '../components/Sidebar'
import { Main } from '../components/Main'

export default function Home() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <Main />
    </div>
  )
}
