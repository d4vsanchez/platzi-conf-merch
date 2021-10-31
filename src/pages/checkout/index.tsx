import type { NextPage } from 'next'

import Link from 'next/link'
import { TrashIcon } from '@heroicons/react/solid'

import styles from '@/styles/Checkout.module.css'

const Checkout: NextPage = () => {
  return (
    <div className={styles.container}>
      <div>
        <h3>Lista de Pedidos</h3>
        {/* Checkout item */}
        <div className={styles.item}>
          <div className={styles.content}>
            <h4>Item name</h4>
            <span>$10</span>
          </div>
          <button type="button">
            <TrashIcon height={20} />
          </button>
        </div>
        {/* Checkout item */}
      </div>

      <div className={styles.sidebar}>
        <h3>
          Precio Total: <span>$10</span>
        </h3>
        <Link href="/checkout/information" passHref>
          <button type="button">Continuar pedido</button>
        </Link>
      </div>
    </div>
  )
}

export default Checkout
