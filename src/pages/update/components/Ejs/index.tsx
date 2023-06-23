import { api } from '@component/lib/axios'
import {
  EjsTitle,
  EjsContent,
  EjsItem,
  EjsImage,
} from '@component/pages/ejs/styles'
import { useEffect, useState } from 'react'
import { Ejs } from './styles'
import { z } from 'zod'

export interface EjsProps {
  id: string
  image: string
  title: string
  url: string
}

interface EjsUpdateProps {
  response: EjsProps[]
}

const EjsSchema = z.object({
  id: z.string(),
})

type EjsData = z.infer<typeof EjsSchema>

export default function EjsUpdate({ response }: EjsUpdateProps) {
  const [ejs, setEjs] = useState<EjsProps[]>([])

  async function handleEjsUpdate(data: EjsData) {
    await api.delete(`/update/ejs/${data.id}`)
  }

  useEffect(() => {
    setEjs(response)
  }, [response])

  return (
    <Ejs>
      <EjsTitle>Nossas Empresas Juniores</EjsTitle>
      <EjsContent>
        {ejs &&
          ejs.map((item) => {
            return (
              <EjsItem key={item.id}>
                <EjsImage
                  src={item.image}
                  alt={`Logo da ${item.title}`}
                  fill
                  quality={50}
                />
                <div>
                  <a
                    href=""
                    onClick={(e) => {
                      e.preventDefault()
                      handleEjsUpdate({ id: item.id })
                    }}
                  >
                    <i className="ri-delete-bin-line ri-2x"></i>
                  </a>
                  <span>Remover</span>
                </div>
              </EjsItem>
            )
          })}
      </EjsContent>
    </Ejs>
  )
}
