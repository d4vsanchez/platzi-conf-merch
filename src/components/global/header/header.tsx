import type { FC } from 'react'

import Link from 'next/link'
import { ShoppingBagIcon } from '@heroicons/react/outline'

import styles from './Header.module.css'

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1>PlatziConf Merch</h1>

      <div className={styles['header-checkout']}>
        <Link href="/checkout" passHref>
          <ShoppingBagIcon />
        </Link>
      </div>
    </header>
  )
}
