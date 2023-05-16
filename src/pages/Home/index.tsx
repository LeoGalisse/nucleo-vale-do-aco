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
} from './styles'
import heroImage from '../../assets/time-nuva.png'
import circle from '../../assets/circle.svg'
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
    </HomeContainer>
  )
}
