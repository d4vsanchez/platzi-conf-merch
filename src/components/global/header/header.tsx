import 'twin.macro'
import type { FC } from 'react'

import Link from 'next/link'
import { ShoppingBagIcon } from '@heroicons/react/outline'

import styles from './Header.module.css'

export const Header: FC = () => {
  return (
    <header tw="flex justify-between items-center py-4 mb-6">
      <Link href="/" passHref>
        <h1 tw="text-2xl hover:text-gray-400 hover:cursor-pointer" tabIndex={0}>
          PlatziConf Merch
        </h1>
      </Link>

      <Link href="/checkout" passHref>
        <ShoppingBagIcon tw="w-6 hover:cursor-pointer hover:text-gray-400" tabIndex={0} />
      </Link>
    </header>
  )
}
