import type { FC } from 'react'
import styles from './Footer.module.css'

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <p>PlatziConf Merch</p>
      <p>Todos los izquierdos reservados</p>
    </footer>
  )
}
