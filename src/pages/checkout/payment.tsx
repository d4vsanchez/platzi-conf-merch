import type { NextPage } from 'next'
import type { SuccessTransactionDetail } from '@/types/paypal'

import { useRouter } from 'next/router'
import { PayPalButton } from 'react-paypal-button-v2'
import { CheckoutList } from '@/components/checkout/list'
import { useShoppingCart } from '@/hooks/useShoppingCart'

const CheckoutPayment: NextPage = () => {
  const router = useRouter()
  const shoppingCart = useShoppingCart()

  const handlePaymentSuccess = (transactionDetail: SuccessTransactionDetail) => {
    if (transactionDetail.status === 'COMPLETED') {
      // Create a new order
      router.push('/checkout/success')
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
