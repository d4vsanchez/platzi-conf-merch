import type { Product } from '@/types/products'

import create from 'zustand'

interface ShoppingCartStore {
  items: Array<Product>
  addItem: (product: Product) => void
  removeItem: (product: Product) => void
}

export const useShoppingCart = create<ShoppingCartStore>((set) => ({
  items: [],
  addItem: (product: Product) => set((state) => ({ items: [...state.items, product] })),
  removeItem: (product: Product) => set((state) => ({ items: state.items.filter((item) => item.id !== product.id) })),
}))
