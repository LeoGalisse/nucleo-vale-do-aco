import { Footer } from '@component/components/Footer'
import { Header } from '@component/components/Header'
import { queryClient } from '@component/lib/react-query'
import { globalStyles } from '@component/styles/global'
import { QueryClientProvider } from '@tanstack/react-query'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import 'remixicon/fonts/remixicon.css'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url: 'https://nuva.com.br',
          siteName: 'NúVA',
        }}
        additionalLinkTags={[{ rel: 'icon', href: '/images/favicon.ico' }]}
      />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </QueryClientProvider>
  )
}
