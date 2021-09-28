import Modal from 'react-modal'
import Image from 'next/image'

import {
  Edit2,
  X,
  User,
  Mail,
  Users as Gen,
  Watch,
  ToggleLeft,
  UserCheck,
  Upload,
} from '@styled-icons/feather'
import AvatarImg from '../../../public/avatar.jpg'

import { Button } from '../Button'

import styles from './styles.module.scss'

interface UpdateUserModalProps {
  isOpen: boolean;
  onRequestClose: () => void
}

export function UpdateUserModal({ isOpen, onRequestClose }: UpdateUserModalProps) {
  return (
    <Modal
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          className={styles.Modal}
          overlayClassName={styles.Overlay}
        >
          <div className={styles.wrapper}>
            <div className={styles.userHeader}>
              <h2>Editar Usuario</h2>
              <X className={styles.buttonClose} onClick={onRequestClose} />
            </div>

            <div className={styles.userContainer}>
              <div className={styles.userShow}>
                <header>
                  <Image src={AvatarImg} alt="Avatar" />
                  <div className={styles.userShowHeaderInfo}>
                    <span className={styles.name}>Leandro Cruz</span>
                    <span className={styles.moreInfo}>Software Engineer</span>
                  </div>
                </header>

                <main>
                  <span className={styles.titleMain}>Detalhes do Usuario</span>
                  <div className={styles.userInfo}>
                    <User />
                    <span>Leandro Cruz</span>
                  </div>
                  <div className={styles.userInfo}>
                    <Gen />
                    <span>masculino</span>
                  </div>
                  <div className={styles.userInfo}>
                    <Watch />
                    <span>24 anos</span>
                  </div>
                  <span className={styles.titleMain}>Contato</span>
                  <div className={styles.userInfo}>
                    <Mail />
                    <span>leandro.cruz@hotmail.com</span>
                  </div>
                  <span className={styles.titleMain}>Detalhes da Conta</span>
                  <div className={styles.userInfo}>
                    <UserCheck />
                    <span>admin: sim</span>
                  </div>
                  <div className={styles.userInfo}>
                    <ToggleLeft />
                    <span>estado: ativo</span>
                  </div>
                </main>
              </div>

              <div className={styles.userUpdate}>
                <h3>Atualizar Dados</h3>

                <form>
                  <div className={styles.formLeft}>
                    <div className={styles.updateItem}>
                      <label>Nome</label>
                      <input type="text" placeholder="Maria Silveira" />
                    </div>
                    <div className={styles.updateItem}>
                      <label>Gênero</label>
                      <div className={styles.selectTypeContainer}>
                        <button onClick={() => {}}>
                          <span>Masculino</span>
                        </button>
                        <button onClick={() => {}} className={styles.active}>
                          <span>Feminino</span>
                        </button>
                      </div>
                    </div>
                    <div className={styles.updateItem}>
                      <label>Edade</label>
                      <input type="number" placeholder="12" />
                    </div>
                    <div className={styles.updateItem}>
                      <label>Email</label>
                      <input
                        type="text"
                        placeholder="maria.silveira@hotmai.com"
                      />
                    </div>
                    <div className={styles.updateItem}>
                      <label>Contrasenha</label>
                      <input type="password" placeholder="********" />
                    </div>
                    <div className={styles.updateItem}>
                      <label>Admin</label>
                      <div className={styles.selectTypeContainer}>
                        <button onClick={() => {}}>
                          <span>Sim</span>
                        </button>
                        <button onClick={() => {}} className={styles.active}>
                          <span>Não</span>
                        </button>
                      </div>
                    </div>
                    <div className={styles.updateItem}>
                      <label>Estado</label>
                      <div className={styles.selectTypeContainer}>
                        <button onClick={() => {}}>
                          <span>Ativo</span>
                        </button>
                        <button onClick={() => {}} className={styles.active}>
                          <span>Inativo</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className={styles.formRight}>
                    <div className={styles.formImgContainer}>
                      <Image src={AvatarImg} alt="Avatar" />
                      <label htmlFor="file">
                        <Upload />
                      </label>
                      <input
                        type="file"
                        id="file"
                        style={{ display: 'none' }}
                      />
                    </div>

                    <Button type="submit">
                      <Edit2 />
                      Atualizar
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal>
  )
}
