import { CreateUser } from '../../components/Users/CreateUser'
import { Sidebar } from '../../components/Sidebar'

export default function createUser() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <CreateUser />
    </div>
  )
}
