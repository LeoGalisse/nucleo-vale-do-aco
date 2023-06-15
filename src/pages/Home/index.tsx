import { HomeContainer } from './styles'

import { Hero } from './components/HeroSection'
import { GoodCompany } from './components/GoodCompanySection'
import { Mej } from './components/MejSection'
import { Support } from './components/SupportSection'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Núcleo do Vale do Aço"
        description="Núcleo do Vale do Aço, o que é o MEJ, quem somos, conheça nossas empresas juniores"
      />
      <HomeContainer>
        <Hero />
        <GoodCompany />
        <Mej />
        <Support />
      </HomeContainer>
    </>
  )
}
