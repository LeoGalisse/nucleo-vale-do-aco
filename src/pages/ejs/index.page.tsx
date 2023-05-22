import { EjsContainer, EjsContent, EjsImage, EjsItem, EjsTitle } from './styles'
import { useQuery } from '@tanstack/react-query'
import { api } from '@component/lib/axios'

interface ImageProps {
  id: string
  image: string
  title: string
  url: string
}

export default function Ejs() {
  const { data: ejs } = useQuery<ImageProps[]>(['ejs'], async () => {
    const response = await api.get('/ejs')

    return response.data.img
  })

  return (
    <EjsContainer>
      <EjsTitle>Nossas Empresas Juniores</EjsTitle>
      <EjsContent>
        {ejs?.map((item) => {
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
  )
}
