import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GlobalStyles } from 'twin.macro'

import { Layout } from '@/components/global/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <GlobalStyles />
      <main id="test">
        <Component {...pageProps} />
      </main>
    </Layout>
  )
}

export default MyApp
