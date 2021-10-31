import type { NextPage } from 'next'

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
          <button type="button">Eliminar</button>
        </div>
        {/* Checkout item */}
      </div>

      <div className={styles.sidebar}>
        <h3>
          Precio Total: <span>$10</span>
        </h3>
        <button type="button">Continuar pedido</button>
      </div>
    </div>
  )
}

export default Checkout
