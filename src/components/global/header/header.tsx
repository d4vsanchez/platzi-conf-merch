import type { FC } from 'react'
import styles from './Header.module.css'

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1>PlatziConf Merch</h1>

      <div className={styles['header-checkout']}>Checkout</div>
    </header>
  )
}
