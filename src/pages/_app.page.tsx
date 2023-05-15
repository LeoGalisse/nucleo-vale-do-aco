import { Footer } from '@component/components/Footer'
import { Header } from '@component/components/Header'
import { globalStyles } from '@component/styles/global'
import type { AppProps } from 'next/app'
import 'remixicon/fonts/remixicon.css'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
