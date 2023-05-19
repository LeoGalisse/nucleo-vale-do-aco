import { api } from '@component/lib/axios'
import {
  FrentesDeAtuacaoCard,
  FrentesDeAtuacaoCardDescription,
  FrentesDeAtuacaoCardTitle,
  FrentesDeAtuacaoCards,
  FrentesDeAtuacaoContainer,
  FrentesDeAtuacaoContent,
  FrentesDeAtuacaoTitle,
} from './styles'
import { useQuery } from '@tanstack/react-query'

interface FrentesDeAtuacaoSectionProps {
  FrentesAtuacaoSection: [
    {
      id: string
      title: string
      description: Array<string>
    },
  ]
}

export function FrentesDeAtuacaoSection() {
  const { data: frentesDeAtuacao } = useQuery<FrentesDeAtuacaoSectionProps>(
    ['frentesDeAtuacao'],
    async () => {
      const response = await api.get('/frentes-de-atuacao')

      return response.data
    },
  )

  return (
    <FrentesDeAtuacaoContainer>
      <FrentesDeAtuacaoContent>
        <FrentesDeAtuacaoTitle>Frentes de atuação</FrentesDeAtuacaoTitle>
        <FrentesDeAtuacaoCards>
          {frentesDeAtuacao &&
            frentesDeAtuacao.FrentesAtuacaoSection.map((item) => {
              return (
                <FrentesDeAtuacaoCard key={item.id}>
                  <FrentesDeAtuacaoCardTitle>
                    {item.title}
                  </FrentesDeAtuacaoCardTitle>
                  <FrentesDeAtuacaoCardDescription>
                    {item.description.map((itens) => {
                      return (
                        <div key={itens.length}>
                          <li>{itens}</li>
                          <br />
                        </div>
                      )
                    })}
                  </FrentesDeAtuacaoCardDescription>
                </FrentesDeAtuacaoCard>
              )
            })}
        </FrentesDeAtuacaoCards>
      </FrentesDeAtuacaoContent>
    </FrentesDeAtuacaoContainer>
  )
}
