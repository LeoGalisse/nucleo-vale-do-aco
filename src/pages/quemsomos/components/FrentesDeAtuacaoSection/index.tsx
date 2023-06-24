import {
  FrentesDeAtuacaoCard,
  FrentesDeAtuacaoCardDescription,
  FrentesDeAtuacaoCardTitle,
  FrentesDeAtuacaoCards,
  FrentesDeAtuacaoContainer,
  FrentesDeAtuacaoContent,
  FrentesDeAtuacaoTitle,
} from './styles'

interface FrentesDeAtuacaoSectionProps {
  frentesDeAtuacao: {
    FrentesAtuacaoSection: [
      {
        id: string
        title: string
        description: Array<string>
      },
    ]
  }
}

export function FrentesDeAtuacaoSection({
  frentesDeAtuacao,
}: FrentesDeAtuacaoSectionProps) {
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
