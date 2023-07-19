import { EjsContainer, EjsContent, EjsImage, EjsItem, EjsTitle } from './styles'
import { NextSeo } from 'next-seo'
import { GetStaticProps } from 'next'
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

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get(`${process.env.API_URL}/ejs`)

  if (response) {
    return {
      props: {
        ejs: response.data.img,
      },
      revalidate: 60 * 60 * 2, // 2 hours
    }
  } else {
    return {
      props: {
        ejs: [
          {
            id: 'b9528ca1-3afc-494d-9bdd-3a0228253755',
            image:
              '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',
            title: 'Agricampo',
            url: 'https://agricampoej.wixsite.com/agricampoej-1',
          },
        ],
      },
      revalidate: 60 * 5, // 5 minutes
    }
  }
}
