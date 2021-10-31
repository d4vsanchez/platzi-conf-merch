import type { NextPage } from 'next'

import { ProductList } from '@/components/products/list'

import products from '@/data/products.json'

const Home: NextPage = () => {
  return <ProductList products={products} />
}

export default Home
