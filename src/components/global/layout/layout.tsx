import 'twin.macro'
import type { FC } from 'react'

import { Header } from '@/components/global/header'
import { Footer } from '@/components/global/footer'

export const Layout: FC = ({ children }) => {
  return (
    <div tw="max-w-screen-md mx-auto">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
