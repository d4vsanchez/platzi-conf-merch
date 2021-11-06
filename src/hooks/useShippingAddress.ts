import type { ShippingAddressData } from '@/types/shippingAddress'
import create from 'zustand'

interface ShippingAddressStore {
  shippingAddresses: Array<ShippingAddressData>
  addShippingAddress: (shippingAddress: ShippingAddressData) => void
  getDefaultShipppingAddress: () => ShippingAddressData | undefined
}

export const useShippingAddress = create<ShippingAddressStore>((set, get) => ({
  shippingAddresses: [],
  addShippingAddress: (shippingAddress: ShippingAddressData) => {
    import('uuid').then((module) => {
      const generatedId = module.v4()
      const savedShippingAddress = { id: generatedId, ...shippingAddress }

      set((state) => ({ shippingAddresses: [...state.shippingAddresses, savedShippingAddress] }))
    })
  },
  getDefaultShipppingAddress: () => get().shippingAddresses[0],
}))
