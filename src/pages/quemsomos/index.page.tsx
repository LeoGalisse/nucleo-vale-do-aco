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
import axios from 'axios'

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
  const responseAbout = await axios.get(`${process.env.API_URL}/about`)
  const res = responseAbout.data.about_section.split('/')

  const responseFrentesDeAtuacao = await axios.get(
    `${process.env.API_URL}/frentes-de-atuacao`,
  )

  if (res && responseFrentesDeAtuacao.data) {
    return {
      props: {
        about: res,
        frentesDeAtuacao: responseFrentesDeAtuacao.data,
      },
      revalidate: 60 * 60 * 2, // 2 hours
    }
  } else {
    return {
      props: {
        about: [
          'Fazemos parte do Movimento Empresa Júnior, sendo o núcleo responsável por representar as empresas Juniores do Vale do Aço e Médio Piracicaba. Nossa missão é Transformar o Vale do Aço através do desenvolvimento e união das EJs do NúVA e crescimento da rede, impactando e transformando empresários juniores em líderes capazes de atingir seus objetivos e revolucionar sua realidade.',
          '  O núcleo é formado atualmente por 17 empresas juniores da região dos mais variados cursos de graduação. Cada empresa é formada por estudantes de ensino superior que trabalham voluntariamente realizando projetos para cliente reais.',
          '  Nosso time é formado por quatro diretorias: presidência do conselho, presidência executiva, diretoria de expansão e diretoria de desenvolvimento. Cada uma delas também é composta por empresários juniores que assumiram o desafio de prestar suporte para todas as empresas da região. Estas pessoas têm como objetivo alavancar os resultados e a experiência dessas pessoas para que se desenvolvam cada vez mais.',
        ],
        frentesDeAtuacao: {
          FrentesAtuacaoSection: [
            {
              id: 'e257b8f1-ff61-4dcb-9901-5abbd29d450f',
              title: 'Presidencia do Conselho',
              description: [Array],
              quemSomosPageId: 'b5fc77eb-c717-4fcf-ab1d-65bae5288cc1',
            },
          ],
          id: 'b5fc77eb-c717-4fcf-ab1d-65bae5288cc1',
        },
      },
      revalidate: 60 * 5, // 5 minutes
    }
  }
}
