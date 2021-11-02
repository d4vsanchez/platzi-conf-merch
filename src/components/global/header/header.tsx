import 'twin.macro'
import type { FC } from 'react'

import Link from 'next/link'
import { ShoppingBagIcon } from '@heroicons/react/outline'

import { useShoppingCart } from '@/hooks/useShoppingCart'

export const Header: FC = () => {
  const cartItemsAmount = useShoppingCart((state) => state.items.length)

  return (
    <header tw="flex justify-between items-center py-4 mb-6">
      <Link href="/" passHref>
        <h1 tw="text-2xl hover:text-gray-400 hover:cursor-pointer" tabIndex={0}>
          PlatziConf Merch
        </h1>
      </Link>

      <Link href="/checkout" passHref>
        <span tw="relative inline-block">
          <ShoppingBagIcon tw="w-6 hover:cursor-pointer hover:text-gray-400" tabIndex={0} />
          {cartItemsAmount > 0 && (
            <span tw="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs leading-none transform translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600 text-red-100">
              {cartItemsAmount}
            </span>
          )}
        </span>
      </Link>
    </header>
  )
}
