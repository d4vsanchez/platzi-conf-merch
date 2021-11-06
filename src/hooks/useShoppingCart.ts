import type { Product } from '@/types/products'

import create from 'zustand'

interface ShoppingCartStore {
  items: Array<Product>
  addItem: (product: Product) => void
  removeItem: (product: Product) => void
  clearCart: () => void
  totalAmount: () => number
  isEmpty: () => boolean
}

export const useShoppingCart = create<ShoppingCartStore>((set, get) => ({
  items: [],
  addItem: (product: Product) => set((state) => ({ items: [...state.items, product] })),
  removeItem: (product: Product) => set((state) => ({ items: state.items.filter((item) => item.id !== product.id) })),
  clearCart: () => set(() => ({ items: [] })),
  totalAmount: () => get().items.reduce((result, product) => result + product.price, 0),
  isEmpty: () => get().items.length === 0,
}))
