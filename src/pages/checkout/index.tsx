import 'twin.macro'
import type { NextPage } from 'next'
import type { Product } from '@/types/products'

import Link from 'next/link'
import { Title } from '@/components/global/title'
import { CheckoutList } from '@/components/checkout/list'
import { useShoppingCart } from '@/hooks/useShoppingCart'
import { usd } from '@/utils/currency'

const Checkout: NextPage = () => {
  const shoppingCart = useShoppingCart()

  return (
    <>
      <Title>Lista de Pedidos</Title>

      <div tw="flex flex-col md:flex-row">
        <div tw="flex-grow order-2 md:mr-10 md:order-1">
          <CheckoutList products={shoppingCart.items} onRemove={(product) => shoppingCart.removeItem(product)} />
          {shoppingCart.isEmpty() && <p>Sin productos en el carrito</p>}
        </div>

        <aside tw="w-full shadow py-2 px-4 rounded order-1 mb-8 md:order-2 md:max-w-xs md:mb-0">
          <Title tw="mb-2 font-normal">
            Precio total: <span tw="font-bold">{usd(shoppingCart.totalAmount())}</span>
          </Title>
          <Link href="/checkout/information" passHref>
            <button
              type="button"
              tw="bg-green-600 rounded p-2 text-white hover:bg-green-700 w-full disabled:opacity-50"
              disabled={shoppingCart.isEmpty()}
            >
              Continuar pedido
            </button>
          </Link>
        </aside>
      </div>
    </>
  )
}

export default Checkout
