import 'twin.macro'
import type { NextPage } from 'next'
import type { ShippingAddressData } from '@/types/shippingAddress'

import Link from 'next/link'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { Title } from '@/components/global/title'
import { useShippingAddress } from '@/hooks/useShippingAddress'

const CheckoutInformation: NextPage = () => {
  const { push } = useRouter()
  const { getDefaultShipppingAddress, addShippingAddress } = useShippingAddress()
  const { register, handleSubmit, formState } = useForm({
    mode: 'onTouched',
    defaultValues: getDefaultShipppingAddress(),
  })

  const { isDirty, isValid } = formState
  const onSubmit = (data: ShippingAddressData) => {
    addShippingAddress(data)
    push('/checkout/payment')
  }

  return (
    <>
      <Title>Información de Contacto</Title>

      <div tw="flex flex-col md:flex-row">
        <div tw="flex-grow order-2 md:mr-10 md:order-1">
          <form>
            <label tw="block text-gray-700 text-sm font-bold mb-4">
              Nombre completo
              <input
                {...register('name', { required: true, minLength: 1 })}
                tw="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring mt-1"
              />
            </label>

            <label tw="block text-gray-700 text-sm font-bold mb-4">
              Email
              <input
                type="email"
                {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })}
                tw="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring mt-1"
              />
            </label>

            <label tw="block text-gray-700 text-sm font-bold mb-4">
              Dirección
              <input
                type="text"
                {...register('address', { required: true })}
                tw="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring mt-1"
              />
            </label>

            <label tw="block text-gray-700 text-sm font-bold mb-4">
              Apartamento, unidad, suite, edificio, etc.
              <input
                type="text"
                {...register('address2')}
                tw="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring mt-1"
              />
            </label>

            <label tw="block text-gray-700 text-sm font-bold mb-4">
              País
              <input
                type="text"
                {...register('country', { required: true })}
                tw="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring mt-1"
              />
            </label>

            <label tw="block text-gray-700 text-sm font-bold mb-4">
              Estado
              <input
                type="text"
                {...register('state', { required: true })}
                tw="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring mt-1"
              />
            </label>

            <label tw="block text-gray-700 text-sm font-bold mb-4">
              Ciudad
              <input
                type="text"
                {...register('city', { required: true })}
                tw="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring mt-1"
              />
            </label>

            <label tw="block text-gray-700 text-sm font-bold mb-4">
              Código Postal
              <input
                inputMode="numeric"
                {...register('zipCode', { required: false, pattern: /^[0-9]{5,6}(?:-[0-9]{4})?$/ })}
                tw="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring mt-1"
              />
            </label>

            <label tw="block text-gray-700 text-sm font-bold mb-4">
              Teléfono
              <input
                type="tel"
                {...register('telNumber', { required: false })}
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

            <button
              type="button"
              disabled={!isDirty || !isValid}
              onClick={handleSubmit(onSubmit)}
              tw="bg-green-600 rounded p-2 text-white w-full ml-5 hover:bg-green-700 disabled:opacity-50"
            >
              Pagar
            </button>
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
