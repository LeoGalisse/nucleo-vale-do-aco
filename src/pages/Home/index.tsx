import {
  HomeContainer,
  MejLink,
  MejCircle,
  MejContent,
  MejImage,
  MejInfo,
  MejSection,
  SupportSection,
  SupportCircle,
  SupportTitle,
  SupportLogos,
  SupportLogoItems,
} from './styles'

import brasilNuva from '../../assets/brasil-nuva.svg'
import fejemg from '../../assets/logo-fejemg.svg'
import unifei from '../../assets/logo-unifei.svg'
import bj from '../../assets/logo-bj.svg'
import Image from 'next/image'
import { Hero } from './components/HeroSection'
import { GoodCompany } from './components/GoodCompanySection'

export default function Home() {
  return (
    <HomeContainer>
      <Hero />
      <GoodCompany />
      <MejSection>
        <MejCircle />
        <MejInfo>
          <MejContent>
            <span>
              O MEJ (Movimento Empresa Júnior) tem como objetivo principal
              fomentar a educação empreendedora e desenvolver habilidades
              profissionais nos estudantes por meio da vivência empresarial.{' '}
            </span>
            <span>
              As EJs prestam serviços de consultoria e assessoria para empresas
              e instituições. O MEJ busca formar líderes comprometidos,
              transformando o país em um ambiente empreendedor, ético e mais
              competitivo.
            </span>
            <MejLink
              href="https://brasiljunior.org.br/conheca-o-mej"
              target="_blank"
            >
              SAIBA MAIS!
            </MejLink>
          </MejContent>
          <MejImage>
            <Image
              src={brasilNuva}
              alt="Mapa do Brasil - Núcleo de Alto Crescimento"
              quality={50}
              fill
              sizes="(max-width: 768px) 50vw, 33vw, (max-width: 1200px) 50vw, 33vw"
            />
          </MejImage>
        </MejInfo>
      </MejSection>
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
