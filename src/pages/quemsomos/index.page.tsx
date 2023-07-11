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
import { GetStaticProps } from 'next'

export default function QuemSomos(props: any) {
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
            quality={20}
            priority
            alt="Mapa de Minas Gerais destacando o vale do aço"
          />
        </QuemSomosContent>
        <AboutSection about={props.about} />
        <FrentesDeAtuacaoSection frentesDeAtuacao={props.frentesDeAtuacao} />
      </QuemSomosContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  /* const responseAbout = await axios.get(`${process.env.API_URL}/about`)
  const res = responseAbout.data.about_section.split('/')

  const responseFrentesDeAtuacao = await axios.get(
    `${process.env.API_URL}/frentes-de-atuacao`,
  ) */

  return {
    props: {
      about: null,
      frentesDeAtuacao: null,
    },
  }
}
