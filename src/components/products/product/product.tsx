import type { FC } from 'react'
import type { Product as ProductType } from '@/types/products'

import Image from 'next/image'

import { usd } from '@/utils/currency'

import styles from './Product.module.css'

export const Product: FC<ProductProps> = ({ product }) => {
  return (
    <article className={styles.container}>
      <Image
        src={product.image}
        alt={product.title}
        height={200}
        width={200}
        className={styles.image}
        objectFit="contain"
      />

      <div className={styles.info}>
        <h2>
          {product.title} <span>{usd(product.price)}</span>
        </h2>
        <p>{product.description}</p>
      </div>

      <button type="button">Comprar</button>
    </article>
  )
}

interface ProductProps {
  product: ProductType
}
