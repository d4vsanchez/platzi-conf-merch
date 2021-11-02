import 'twin.macro'
import type { FC } from 'react'
import type { Product as ProductType } from '@/types/products'

import { Product } from '@/components/products/product'

export const ProductList: FC<ProductListProps> = ({ products, onSelect = () => {} }) => {
  return (
    <div tw="grid gap-6 md:grid-cols-3 sm:grid-cols-2">
      {products.map((product) => (
        <Product key={product.id} product={product} onSelect={onSelect} />
      ))}
    </div>
  )
}

interface ProductListProps {
  products: Array<ProductType>
  onSelect?: (product: ProductType) => void
}
