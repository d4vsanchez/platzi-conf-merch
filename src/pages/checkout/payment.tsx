import type { NextPage } from 'next'
import type { Order } from '@/types/order'
import type { SuccessTransactionDetail } from '@/types/paypal'

import { useRouter } from 'next/router'
import { useOrders } from '@/hooks/useOrders'
import { PayPalButton } from 'react-paypal-button-v2'
import { CheckoutList } from '@/components/checkout/list'
import { useShoppingCart } from '@/hooks/useShoppingCart'
import { useShippingAddress } from '@/hooks/useShippingAddress'

const CheckoutPayment: NextPage = () => {
  const router = useRouter()
  const shoppingCart = useShoppingCart()
  const shipping = useShippingAddress()
  const orders = useOrders()

  const handlePaymentSuccess = (transactionDetail: SuccessTransactionDetail) => {
    if (transactionDetail.status === 'COMPLETED') {
      import('uuid').then((uuid) => {
        const newOrder: Order = {
          id: uuid.v4(),
          items: shoppingCart.items.map((item) => item.id),
          shippingAddress: shipping.getDefaultShipppingAddress()!.id!,
          createdAt: new Date().toISOString(),
        }
        orders.addOrder(newOrder)
        shoppingCart.clearCart()
        router.push('/checkout/success')
      })
    }
  }

  return (
    <div>
      <div>
        <h3>Resumen del pedido</h3>

        <CheckoutList products={shoppingCart.items} />

        <PayPalButton amount={shoppingCart.totalAmount()} onSuccess={handlePaymentSuccess} />
      </div>
    </div>
  )
}

export default CheckoutPayment
