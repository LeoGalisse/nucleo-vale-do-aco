import {
  QuemSomosContainer,
  QuemSomosContent,
  QuemSomosImage,
  QuemSomosTitle,
} from './styles'
import minasGerais from '../../assets/minas-gerais.svg'
import { AboutSection } from './components/AboutSection'

export default function QuemSomos() {
  return (
    <QuemSomosContainer>
      <QuemSomosContent>
        <QuemSomosTitle>Quem somos nós</QuemSomosTitle>
        <QuemSomosImage
          src={minasGerais}
          width={405}
          height={326}
          quality={100}
          alt="Mapa de Minas Gerais destacando o vale do aço"
        />
      </QuemSomosContent>
      <AboutSection />
    </QuemSomosContainer>
  )
}
