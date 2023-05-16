import {
  HomeContainer,
  SupportSection,
  SupportCircle,
  SupportTitle,
  SupportLogos,
  SupportLogoItems,
} from './styles'

import fejemg from '../../assets/logo-fejemg.svg'
import unifei from '../../assets/logo-unifei.svg'
import bj from '../../assets/logo-bj.svg'
import Image from 'next/image'
import { Hero } from './components/HeroSection'
import { GoodCompany } from './components/GoodCompanySection'
import { Mej } from './components/MejSection'

export default function Home() {
  return (
    <HomeContainer>
      <Hero />
      <GoodCompany />
      <Mej />
      <SupportSection>
        <SupportCircle />
        <SupportTitle>Quem nos apoia</SupportTitle>
        <SupportLogos>
          <SupportLogoItems>
            <Image
              src={fejemg}
              alt="Logo da FEJEMG"
              quality={50}
              fill
              sizes="(max-width: 768px) 50vw, 33vw, (max-width: 1200px) 50vw, 33vw"
            />
          </SupportLogoItems>
          <SupportLogoItems>
            <Image
              src={unifei}
              alt="Logo da UNIFEI"
              quality={50}
              fill
              sizes="(max-width: 768px) 50vw, 33vw, (max-width: 1200px) 50vw, 33vw"
            />
          </SupportLogoItems>
          <SupportLogoItems>
            <Image
              src={bj}
              alt="Logo da BJ"
              quality={50}
              fill
              sizes="(max-width: 768px) 50vw, 33vw, (max-width: 1200px) 50vw, 33vw"
            />
          </SupportLogoItems>
        </SupportLogos>
      </SupportSection>
    </HomeContainer>
  )
}
