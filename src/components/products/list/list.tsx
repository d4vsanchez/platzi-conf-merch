import type { FC } from 'react'
import type { Product as ProductType } from '@/types/products'

import { Product } from '@/components/products/product'

import styles from './ProductList.module.css'

export const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <div>
      <div className={styles.list}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

interface ProductListProps {
  products: Array<ProductType>
}
