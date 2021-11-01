import 'twin.macro'
import type { NextPage } from 'next'

import Link from 'next/link'
import { Title } from '@/components/global/title'

const CheckoutInformation: NextPage = () => {
  return (
    <>
      <Title>Información de Contacto</Title>

      <div tw="flex flex-col md:flex-row">
        <div tw="flex-grow order-2 md:mr-10 md:order-1">
          <form action="">
            <label tw="block text-gray-700 text-sm font-bold mb-4">
              Nombre completo
              <input
                type="text"
                name="name"
                tw="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring mt-1"
              />
            </label>

            <label tw="block text-gray-700 text-sm font-bold mb-4">
              Email
              <input
                type="email"
                name="email"
                tw="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring mt-1"
              />
            </label>

            <label tw="block text-gray-700 text-sm font-bold mb-4">
              Dirección
              <input
                type="text"
                name="address"
                tw="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring mt-1"
              />
            </label>

            <label tw="block text-gray-700 text-sm font-bold mb-4">
              Apartamento, unidad, suite, edificio, etc.
              <input
                type="text"
                name="address2"
                tw="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring mt-1"
              />
            </label>

            <label tw="block text-gray-700 text-sm font-bold mb-4">
              País
              <input
                type="text"
                name="country"
                tw="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring mt-1"
              />
            </label>

            <label tw="block text-gray-700 text-sm font-bold mb-4">
              Estado
              <input
                type="text"
                name="state"
                tw="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring mt-1"
              />
            </label>

            <label tw="block text-gray-700 text-sm font-bold mb-4">
              Ciudad
              <input
                type="text"
                name="city"
                tw="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring mt-1"
              />
            </label>

            <label tw="block text-gray-700 text-sm font-bold mb-4">
              Código Postal
              <input
                type="text"
                inputMode="numeric"
                name="zip"
                pattern="[0-9]*"
                tw="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring mt-1"
              />
            </label>

            <label tw="block text-gray-700 text-sm font-bold mb-4">
              Teléfono
              <input
                type="tel"
                name="telephone"
                tw="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring mt-1"
              />
            </label>
          </form>

          <div tw="flex justify-between">
            <Link href="/checkout" passHref>
              <button type="button" tw="rounded p-2 text-green-600 hover:bg-green-600 hover:bg-opacity-10 w-full mr-5">
                Regresar
              </button>
            </Link>

            <Link href="/checkout/payment" passHref>
              <button type="button" tw="bg-green-600 rounded p-2 text-white hover:bg-green-700 w-full ml-5">
                Pagar
              </button>
            </Link>
          </div>
        </div>

        <aside tw="w-full shadow py-2 px-4 rounded order-1 mb-8 md:order-2 md:max-w-xs md:mb-0">
          <Title tw="mb-2 font-normal">Pedido</Title>

          <ul>
            <li tw="flex justify-between">
              Item name <span tw="font-bold">$10</span>
            </li>
          </ul>
        </aside>
      </div>
    </>
  )
}

export default CheckoutInformation
