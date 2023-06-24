import { HomeContainer } from './styles'

import { Hero } from './components/HeroSection'
import { GoodCompany } from './components/GoodCompanySection'
import { Mej } from './components/MejSection'
import { Support } from './components/SupportSection'
import { NextSeo } from 'next-seo'

interface NumbersProps {
  numbers: {
    number_of_ejs: number
    number_of_employees: number
    number_of_institutes: number
    number_of_cities: number
  }
}

export default function Home({ numbers }: NumbersProps) {
  return (
    <>
      <NextSeo
        title="Núcleo do Vale do Aço"
        description="Núcleo do Vale do Aço, o que é o MEJ, quem somos, conheça nossas empresas juniores"
      />
      <HomeContainer>
        <Hero />
        <GoodCompany numbers={numbers} />
        <Mej />
        <Support />
      </HomeContainer>
    </>
  )
}
