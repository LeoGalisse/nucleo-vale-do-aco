import { HeroImage, HeroSection, HeroTitle, HomeContainer } from './styles'
import heroImage from '../../assets/time-nuva.png'

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
    </HomeContainer>
  )
}
