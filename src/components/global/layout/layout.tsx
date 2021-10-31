import type { FC } from 'react'

import { Header } from '@/components/global/header'
import { Footer } from '@/components/global/footer'

import styles from './Layout.module.css'

export const Layout: FC = ({ children }) => {
  return (
    <div className={styles.main}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
