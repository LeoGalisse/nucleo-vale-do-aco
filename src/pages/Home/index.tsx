import { HomeContainer } from './styles'

import { Hero } from './components/HeroSection'
import { GoodCompany } from './components/GoodCompanySection'
import { Mej } from './components/MejSection'
import { Support } from './components/SupportSection'

export default function Home() {
  return (
    <HomeContainer>
      <Hero />
      <GoodCompany />
      <Mej />
      <Support />
    </HomeContainer>
  )
}
