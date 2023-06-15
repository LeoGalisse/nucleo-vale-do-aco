import { Title, UpdateContainer } from './styles'

import { About } from './components/About'
import { FrentesAtuacao } from './components/FrentesAtuacao'
import { GoodCompanyUpdate } from './components/GoodCompany'
import EjsUpdate from './components/Ejs'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import UploadImage from './components/UploadImage/index.page'
import { NextSeo } from 'next-seo'

export default function Update() {
  return (
    <>
      <NextSeo title="Update | NúVA" noindex />
      <UpdateContainer>
        <Title>Alteração de conteúdo</Title>
        <About />
        <FrentesAtuacao />
        <GoodCompanyUpdate />
        <EjsUpdate />
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
  } else
    return {
      props: {},
    }
}
