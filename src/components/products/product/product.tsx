import 'twin.macro'
import type { FC } from 'react'
import type { Product as ProductType } from '@/types/products'

import Image from 'next/image'

import { usd } from '@/utils/currency'

export const Product: FC<ProductProps> = ({ product, onSelect = () => {} }) => {
  const handleSelect = () => onSelect(product)

  return (
    <article tw="shadow rounded-md overflow-hidden flex flex-col justify-center">
      <Image src={product.image} alt={product.title} height={200} width={200} objectFit="contain" tw="mx-auto my-0" />

      <section tw="px-4">
        <h2 tw="text-xl flex items-center justify-between">
          {product.title}
          <span tw="text-sm font-bold">{usd(product.price)}</span>
        </h2>
        <p tw="my-4 text-sm">{product.description}</p>
      </section>

      <button type="button" tw="bg-green-600 py-2 text-white hover:bg-green-700" onClick={handleSelect}>
        Comprar
      </button>
    </article>
  )
}

interface ProductProps {
  product: ProductType
  onSelect?: (product: ProductType) => void
}
