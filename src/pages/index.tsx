import { CreateUser} from '../components/CreateUser'

import styles from './stylesHome.module.scss';



export default function Home() {
  return (
    <div className={styles.containerHome}>
      <CreateUser />
    </div>
  )
}
