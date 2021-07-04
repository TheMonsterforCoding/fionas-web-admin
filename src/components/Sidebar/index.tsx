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
            <a href="" className={styles.navTitle}>
              <div className={styles.menuBox}>
                <img className={styles.homeImg} src="home.svg" alt="Home" />
                <span>Home1</span>
                <img className={styles.arrowBottomImg} src="arrowBottom.svg" alt="Home" />
              </div>
            </a>
            <ul>
              <li><a href="">1</a></li>
              <li><a href="">2</a></li>
              <li><a href="">3</a></li>
            </ul>
          </li>

          <li>
            <a href="" className={styles.navTitle}>
              <div className={styles.menuBox}>
                <img className={styles.homeImg} src="home.svg" alt="Home" />
                <span>
                  User
                </span>
                <img className={styles.arrowBottomImg} src="arrowBottom.svg" alt="Home" />
              </div>
            </a>
            <ul>
              <li><a href="./CreateUser">create</a></li>
              <li><a href="">Reade</a></li>
              <li><a href="">Update</a></li>
              <li><a href="">Delete</a></li>
            </ul>
          </li>

          <li>
            <a href="" className={styles.navTitle}>
              <div className={styles.menuBox}>
                <img className={styles.homeImg} src="home.svg" alt="Home" />
                <span>
                  Home3
                </span>
                <img className={styles.arrowBottomImg} src="arrowBottom.svg" alt="Home" />
              </div>
            </a>
            <ul>
              <li><a href="">1</a></li>
              <li><a href="">2</a></li>
              <li><a href="">3</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}