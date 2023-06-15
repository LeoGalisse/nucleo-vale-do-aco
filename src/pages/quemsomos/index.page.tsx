import {
  QuemSomosContainer,
  QuemSomosContent,
  QuemSomosImage,
  QuemSomosTitle,
} from './styles'
import minasGerais from '../../assets/minas-gerais.svg'
import { AboutSection } from './components/AboutSection'
import { FrentesDeAtuacaoSection } from './components/FrentesDeAtuacaoSection'
import { NextSeo } from 'next-seo'

export default function QuemSomos() {
  return (
    <>
      <NextSeo
        title="Quem Somos | NúVA"
        description="Conheça o Núcleo do Vale do Aço e suas frentes de atuação"
      />
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
        <FrentesDeAtuacaoSection />
      </QuemSomosContainer>
    </>
  )
}
