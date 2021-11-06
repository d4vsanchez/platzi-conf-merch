import type { FC } from 'react'
import type { Product } from '@/types/products'

import { CheckoutItem } from '@/components/checkout/item'

export const CheckoutList: FC<CheckoutListProps> = ({ products, onRemove }) => {
  return (
    <>
      {products.map((product) => (
        <CheckoutItem key={product.id} product={product} onRemove={onRemove} />
      ))}
    </>
  )
}

interface CheckoutListProps {
  products: Array<Product>
  onRemove?: (product: Product) => void
}
