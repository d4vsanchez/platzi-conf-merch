import 'twin.macro'
import type { FC } from 'react'
import type { Product } from '@/types/products'

import { TrashIcon } from '@heroicons/react/solid'
import { usd } from '@/utils/currency'

export const CheckoutItem: FC<CheckoutItemProps> = ({ product, onRemove }) => {
  const hasOnRemove = typeof onRemove === 'function'
  const handleItemRemove = () => onRemove!(product)

  return (
    <article tw="flex w-full">
      <section tw="flex flex-grow justify-between">
        <h4 tw="font-semibold">{product.title}</h4>
        <span>{usd(product.price)}</span>
      </section>

      {hasOnRemove && (
        <button type="button" onClick={handleItemRemove} tw="ml-6">
          <TrashIcon height={20} />
        </button>
      )}
    </article>
  )
}

interface CheckoutItemProps {
  product: Product
  onRemove?: (product: Product) => void
}
