/* eslint-disable react/no-unescaped-entities */
import {
  FrentesDeAtuacaoContent,
  FrentesDeAtuacaoTitle,
  FrentesDeAtuacaoCards,
  FrentesDeAtuacaoCard,
} from '@component/pages/quemsomos/components/FrentesDeAtuacaoSection/styles'
import {
  CardDescription,
  CardTitle,
  FrentesAtuacaoForm,
  Button,
  TextArea,
  Span,
} from './styles'
import { useEffect, useState } from 'react'
import { api } from '@component/lib/axios'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const FrentesDeAtuacaoSchema = z.object({
  FrentesAtuacaoSection: z.array(
    z.object({
      id: z.string().optional(),
      title: z.string(),
      description: z.array(z.string()),
    }),
  ),
})

type FrentesDeAtuacaoData = z.infer<typeof FrentesDeAtuacaoSchema>

export function FrentesAtuacao() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FrentesDeAtuacaoData>({
    resolver: zodResolver(FrentesDeAtuacaoSchema),
  })

  const [frentesAtuacao, setFrentesAtuacao] = useState<FrentesDeAtuacaoData>()
  const [quemSomosId, setQuemSomosId] = useState('')

  async function handleFrentesAtuacaoRequest() {
    const response = await api.get('/frentes-de-atuacao')

    setFrentesAtuacao(response.data)
    setQuemSomosId(response.data.id)
  }

  async function handleFrentesAtuacaoUpdate(data: FrentesDeAtuacaoData) {
    const filterData = data.FrentesAtuacaoSection.map((item) => {
      item.description = item.description.filter((item) => item !== '')
      return item
    })

    data.FrentesAtuacaoSection = filterData

    await api.put(`/update/frentes-de-atuacao/${quemSomosId}`, data)
  }

  useEffect(() => {
    handleFrentesAtuacaoRequest()
  }, [])

  return (
    <FrentesAtuacaoForm onSubmit={handleSubmit(handleFrentesAtuacaoUpdate)}>
      <FrentesDeAtuacaoContent>
        <FrentesDeAtuacaoTitle>Frentes de atuação</FrentesDeAtuacaoTitle>
        <FrentesDeAtuacaoCards>
          {frentesAtuacao &&
            frentesAtuacao.FrentesAtuacaoSection?.map((item, index) => (
              <FrentesDeAtuacaoCard key={item.id}>
                <textarea
                  defaultValue={item.id}
                  {...register(`FrentesAtuacaoSection.${index}.id`)}
                  style={{ display: 'none' }}
                />
                <CardTitle>
                  <TextArea
                    defaultValue={item.title}
                    {...register(`FrentesAtuacaoSection.${index}.title`)}
                  />
                </CardTitle>
                <CardDescription>
                  {item.description.map((itens, itensIndex) => {
                    return (
                      <div key={itens.length}>
                        <TextArea
                          defaultValue={itens}
                          {...register(
                            `FrentesAtuacaoSection.${index}.description.${itensIndex}`,
                          )}
                        />
                      </div>
                    )
                  })}
                  <Button
                    disabled={isSubmitting}
                    onClick={() => {
                      item.description.push('')
                    }}
                  >
                    Adicionar
                  </Button>
                </CardDescription>
              </FrentesDeAtuacaoCard>
            ))}
        </FrentesDeAtuacaoCards>
        <Span>Deixe em branco para excluir um item</Span>
        <Button disabled={isSubmitting} type="submit">
          Alterar
        </Button>
      </FrentesDeAtuacaoContent>
    </FrentesAtuacaoForm>
  )
}
