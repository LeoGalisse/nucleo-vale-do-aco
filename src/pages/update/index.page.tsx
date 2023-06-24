import { Title, UpdateContainer } from './styles'

import { About } from './components/About'
import {
  FrentesAtuacao,
  FrentesDeAtuacaoData,
} from './components/FrentesAtuacao'
import { GoodCompanyData, GoodCompanyUpdate } from './components/GoodCompany'
import EjsUpdate, { EjsProps } from './components/Ejs'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import UploadImage from './components/UploadImage/index.page'
import { NextSeo } from 'next-seo'
import axios from 'axios'

interface ResponseProps {
  aboutResponse: {
    about_section: string
    id: string
  }
  ejsResponse: EjsProps[]
  frentesDeAtuacaoResponse: FrentesDeAtuacaoData & { id: string }
  goodCompanyResponse: GoodCompanyData & { id: string }
}

export default function Update({
  aboutResponse,
  ejsResponse,
  frentesDeAtuacaoResponse,
  goodCompanyResponse,
}: ResponseProps) {
  return (
    <>
      <NextSeo title="Update | NúVA" noindex />
      <UpdateContainer>
        <Title>Alteração de conteúdo</Title>
        <About response={aboutResponse} />
        <FrentesAtuacao response={frentesDeAtuacaoResponse} />
        <GoodCompanyUpdate response={goodCompanyResponse} />
        <EjsUpdate response={ejsResponse} />
        <UploadImage />
      </UpdateContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const { '@nuva:userId': userIdOnCookies } = parseCookies({ req })

  if (!userIdOnCookies) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  const aboutResponse = await axios.get(`${process.env.API_URL}/about`)
  const ejsResponse = await axios.get(`${process.env.API_URL}/ejs`)
  const frentesDeAtuacaoResponse = await axios.get(
    `${process.env.API_URL}/frentes-de-atuacao`,
  )
  const goodCompanyResponse = await axios.get(`${process.env.API_URL}/numbers`)

  return {
    props: {
      aboutResponse: aboutResponse.data,
      ejsResponse: ejsResponse.data.img,
      frentesDeAtuacaoResponse: frentesDeAtuacaoResponse.data,
      goodCompanyResponse: goodCompanyResponse.data.data[0],
    },
  }
}
