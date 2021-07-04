import styles from './styles.module.scss'

export function Sidebar() {
  return (
    <div className={styles.sideBar}>
      <div className={styles.adminBarSection}>
        <h3> Kevin</h3>
      </div>

      <div className={styles.menuBarSection}>
        <h3>Dashboard</h3>

        <ul className={styles.navSideMenu}>
          <li>
            <a>
              Home
              <span></span>
            </a>
            <ul>
              <li><a href="">1</a></li>
              <li><a href="">2</a></li>
              <li><a href="">3</a></li>
            </ul>
          </li>

          <li>
            <a href="">asdasd</a>
          </li>

          <li>
            <a href="">asdasd</a>
          </li>

          <li>
            <a href="">asdasd</a>
          </li>

          <li>
            <a href="">asdasd</a>
          </li>
          
          <li>
            <a href="">asdasd</a>
          </li>
        </ul>
      </div>
    </div>
  )
}