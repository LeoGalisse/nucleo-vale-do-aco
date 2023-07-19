import { EjsContainer, EjsContent, EjsImage, EjsItem, EjsTitle } from './styles'
import { NextSeo } from 'next-seo'
import { GetServerSideProps } from 'next'
import axios from 'axios'

interface ImageProps {
  ejs: {
    id: string
    image: string
    title: string
    url: string
  }[]
}

export default function Ejs({ ejs }: ImageProps) {
  return (
    <>
      <NextSeo
        title="Empresas Juniores | NúVA"
        description="Todas as empresas juniores que fazem parte do Núcleo do Vale do Aço"
      />
      <EjsContainer>
        <EjsTitle>Nossas Empresas Juniores</EjsTitle>
        <EjsContent>
          {ejs.map((item) => {
            return (
              <EjsItem key={item.id}>
                <EjsImage
                  src={item.image}
                  alt={`Logo da ${item.title}`}
                  fill
                  quality={50}
                />
                <div>
                  <a href={item.url} target="_blank" rel="noreferrer">
                    <i className="ri-search-line ri-2x"></i>
                  </a>
                  <span>{item.title}</span>
                </div>
              </EjsItem>
            )
          })}
        </EjsContent>
      </EjsContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await axios.get(`${process.env.API_URL}/ejs`)

  return {
    props: {
      ejs: response.data.img,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
