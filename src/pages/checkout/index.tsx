import 'twin.macro'
import type { NextPage } from 'next'

import Link from 'next/link'
import { TrashIcon } from '@heroicons/react/solid'
import { Title } from '@/components/global/title'

const Checkout: NextPage = () => {
  return (
    <div tw="flex">
      <div tw="flex-grow mr-10">
        <Title>Lista de Pedidos</Title>
        {/* Checkout item */}
        <article tw="flex w-full">
          <section tw="flex flex-grow justify-between mr-6">
            <h4 tw="font-semibold">Item name</h4>
            <span>$10</span>
          </section>

          <button type="button">
            <TrashIcon height={20} />
          </button>
        </article>
        {/* Checkout item */}
      </div>

      <aside tw="shadow w-64 py-2 px-4 rounded">
        <Title tw="mb-2 font-normal">
          Precio total: <span tw="font-bold">$10</span>
        </Title>
        <Link href="/checkout/information" passHref>
          <button type="button" tw="bg-green-600 rounded p-2 text-white hover:bg-green-700 w-full">
            Continuar pedido
          </button>
        </Link>
      </aside>
    </div>
  )
}

export default Checkout
