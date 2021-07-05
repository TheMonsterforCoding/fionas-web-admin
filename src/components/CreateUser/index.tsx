import styles from './styles.module.scss'

export function CreateUser() {
  return (
    <div className={styles.container}>
      <form action="">
        <div className={styles.formHeader}>
          <span>Adicionar um usuario</span>

        </div>
        <fieldset>
          <label htmlFor="userNameForm">
            <span>Nome</span>
            <input type="text" id="userNameForm" name="userNameForm" placeholder="Escreva seu nome" required />
          </label>

          <label htmlFor="emailForm">
            <span>Email</span>
            <input type="email" id="emailForm" name="emailForm" placeholder="asdasd@email.com.br" required />
          </label>
        </fieldset>

        {/* admin / boolean/ */}
        <div className={styles.formFotter}>

          <button className={styles.buttonAdd} type="submit"> Adicionar</button>
          <button className={styles.buttonReset} type="reset"> Cancelar</button>
        </div>
      </form>
    </div>
  )
}

