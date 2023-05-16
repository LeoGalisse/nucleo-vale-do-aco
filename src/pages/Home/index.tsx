import {
  GoodCompanyCircles,
  GoodCompanyContent,
  GoodCompanyContentItems,
  GoodCompanySection,
  GoodCompanyTitle,
  HeroImage,
  HeroSection,
  HeroTitle,
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
import heroImage from '../../assets/time-nuva.png'
import circle from '../../assets/circle.svg'
import brasilNuva from '../../assets/brasil-nuva.svg'
import fejemg from '../../assets/logo-fejemg.svg'
import unifei from '../../assets/logo-unifei.svg'
import bj from '../../assets/logo-bj.svg'
import Image from 'next/image'

export default function Home() {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroImage src={heroImage} alt="EJS do Núcleo NúVA" quality={100} />
        <HeroTitle>
          <span>
            Juntos, <p>mineramos</p> a mudança!
          </span>
        </HeroTitle>
      </HeroSection>
      <GoodCompanySection>
        <GoodCompanyTitle>
          <span>Você está em boa companhia!</span>
        </GoodCompanyTitle>

        <GoodCompanyContent>
          <GoodCompanyContentItems>
            <span>17</span>
            <span>Empresas Juniores</span>
            <GoodCompanyCircles>
              <Image src={circle} alt="Círculo" quality={100} />
            </GoodCompanyCircles>
          </GoodCompanyContentItems>
          <GoodCompanyContentItems>
            <span>161</span>
            <span>Empresários Juniores</span>
            <GoodCompanyCircles>
              <Image src={circle} alt="Círculo" quality={100} />
            </GoodCompanyCircles>
          </GoodCompanyContentItems>
          <GoodCompanyContentItems>
            <span>5</span>
            <span>Instituições de Ensino Superior</span>
            <GoodCompanyCircles>
              <Image src={circle} alt="Círculo" quality={100} />
            </GoodCompanyCircles>
          </GoodCompanyContentItems>
          <GoodCompanyContentItems>
            <span>3</span>
            <span>Cidades</span>
            <GoodCompanyCircles>
              <Image src={circle} alt="Círculo" quality={100} />
            </GoodCompanyCircles>
          </GoodCompanyContentItems>
        </GoodCompanyContent>
      </GoodCompanySection>
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
