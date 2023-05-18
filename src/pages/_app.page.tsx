import { Footer } from '@component/components/Footer'
import { Header } from '@component/components/Header'
import { queryClient } from '@component/lib/react-query'
import { globalStyles } from '@component/styles/global'
import { QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import 'remixicon/fonts/remixicon.css'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </QueryClientProvider>
  )
}
