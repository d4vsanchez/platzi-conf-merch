import type { NextPage } from 'next'

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
        <button type="button">Regresar</button>
        <button type="button">Pagar</button>
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
