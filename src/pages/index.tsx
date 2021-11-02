import type { NextPage } from 'next'

import { ProductList } from '@/components/products/list'
import { useShoppingCart } from '@/hooks/useShoppingCart'

import products from '@/data/products.json'

const Home: NextPage = () => {
  const { addItem } = useShoppingCart()
  return <ProductList products={products} onSelect={(product) => addItem(product)} />
}

export default Home
