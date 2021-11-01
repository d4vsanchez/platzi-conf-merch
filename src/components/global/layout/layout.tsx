import 'twin.macro'
import type { FC } from 'react'

import { Header } from '@/components/global/header'
import { Footer } from '@/components/global/footer'

export const Layout: FC = ({ children }) => {
  return (
    <div tw="max-w-screen-md mx-auto">
      <a href="#test" tw="-translate-y-full absolute focus:translate-y-0">
        Skip to main content
      </a>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
