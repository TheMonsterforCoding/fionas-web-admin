import styles from './styles.module.scss'

export function Main() {
  return (
    <div className={styles.container}>
      <h3>Home do painel de administrador</h3>
      <span>Aqui teremos informação sobre os principais KPI que tem a empresa
        onde se priorizará aquelas que estão com perigo de falhar por recursos
        ou outros motivos.
      </span>
    </div>
  )
}
