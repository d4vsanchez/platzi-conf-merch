import type { NextPage } from 'next'

import Link from 'next/link'

const CheckoutInformation: NextPage = () => {
  return (
    <div>
      <h2>Información de Contacto</h2>

      <form action="">
        <label>
          Nombre completo
          <input type="text" name="name" />
        </label>

        <label>
          Email
          <input type="email" name="email" />
        </label>

        <label>
          Dirección
          <input type="text" name="address" />
        </label>

        <label>
          Apartamento, unidad, suite, edificio, etc.
          <input type="text" name="address2" />
        </label>

        <label>
          País
          <input type="text" name="country" />
        </label>

        <label>
          Estado
          <input type="text" name="state" />
        </label>

        <label>
          Ciudad
          <input type="text" name="city" />
        </label>

        <label>
          Código Postal
          <input type="text" inputMode="numeric" name="zip" pattern="[0-9]*" />
        </label>

        <label>
          Teléfono
          <input type="tel" name="telephone" />
        </label>
      </form>

      <div>
        <Link href="/checkout" passHref>
          <button type="button">Regresar</button>
        </Link>

        <Link href="/checkout/payment" passHref>
          <button type="button">Pagar</button>
        </Link>
      </div>

      <aside>
        <h3>Pedido</h3>
        <div>
          <h4>
            Item name <span>$10</span>
          </h4>
        </div>
      </aside>
    </div>
  )
}

export default CheckoutInformation
