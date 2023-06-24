import { HeroImage, HeroSection, HeroTitle } from './styles'
import heroImage from '@component/assets/time-nuva.png'

export function Hero() {
  return (
    <HeroSection>
      <HeroImage src={heroImage} alt="EJS do Núcleo NúVA" quality={100} fill />
      <HeroTitle>
        <span>
          Juntos, <p>mineramos</p> a mudança!
        </span>
      </HeroTitle>
    </HeroSection>
  )
}
