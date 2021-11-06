import type { Order } from '@/types/order'

import create from 'zustand'

interface OrderStore {
  orders: Array<Order>
  addOrder: (order: Order) => void
}

export const useOrders = create<OrderStore>((set, get) => ({
  orders: [],
  addOrder: (order: Order) => set((state) => ({ orders: [...state.orders, order] })),
}))
