import {
  FrentesDeAtuacaoCard,
  FrentesDeAtuacaoCardDescription,
  FrentesDeAtuacaoCardTitle,
  FrentesDeAtuacaoCards,
  FrentesDeAtuacaoContainer,
  FrentesDeAtuacaoContent,
  FrentesDeAtuacaoTitle,
} from './styles'

export function FrentesDeAtuacaoSection() {
  return (
    <FrentesDeAtuacaoContainer>
      <FrentesDeAtuacaoContent>
        <FrentesDeAtuacaoTitle>Frentes de atuação</FrentesDeAtuacaoTitle>
        <FrentesDeAtuacaoCards>
          <FrentesDeAtuacaoCard>
            <FrentesDeAtuacaoCardTitle>
              Presidência do Conselho
            </FrentesDeAtuacaoCardTitle>
            <FrentesDeAtuacaoCardDescription>
              <li>
                Zelar para que todas as diretrizes e decisões tomadas nas
                Assembleias Gerais e no Conselho Multiplicador e Administrativo
                estejam de acordo com os instrumentos reguladores do Núcleo Vale
                do Aço.{' '}
              </li>
              <br />
              <li>
                Convocar e presidir as Assembleias Gerais do Núcleo Vale do Aço
                e as reuniões do Conselho Multiplicador e do Conselho
                Administrativo.
              </li>{' '}
              <br />
              <li>
                Garantir o alinhamento da instituição ao Planejamento
                Estratégico afim de que todos os órgãos diligenciam para cumprir
                os objetivos do Núcleo Vale do Aço.
              </li>{' '}
              <br />
              <li>
                Garantir a organização, objetividade e continuidade das
                discussões ocorridas nas Assembleias e Reuniões dos Conselhos.{' '}
              </li>
              <br />
              <li>
                Elaborar o calendário de reuniões e submetê-lo para a aprovação
                do Conselho Multiplicador.{' '}
              </li>
              <br />
              <li>
                Prezar pelo acesso à informação pelos Conselhos para que possam
                atuar pela consecução de suas funções.
              </li>{' '}
              <br />
              <li>
                Representar o Núcleo Vale do Aço no Conselho Administrativo da
                FEJEMG, devendo sempre pautar as decisões no alinhamento das
                diretrizes do Movimento Empresa Júnior nacional e mineiro.
              </li>
            </FrentesDeAtuacaoCardDescription>
          </FrentesDeAtuacaoCard>
          <FrentesDeAtuacaoCard>
            <FrentesDeAtuacaoCardTitle>
              Presidência Executiva
            </FrentesDeAtuacaoCardTitle>
            <FrentesDeAtuacaoCardDescription>
              <li>
                Representar legalmente o Núcleo Vale do Aço perante os órgãos
                públicos, privados e Instituições de Ensino Superior da região e
                frente às instâncias do Movimento Empresa Júnior.
              </li>
              <br />
              <li>
                Estabelecer parcerias e iniciativas com terceiros que tenham
                relação direta com os objetivos do Núcleo Vale do Aço.
              </li>
              <br />
              <li>
                Prospectar parcerias com retorno financeiro visando garantir a
                sustentabilidade financeira do Núcleo Vale do Aço.
              </li>
              <br />
              <li>
                Zelar pela história, cultura e memória do Núcleo, buscando forma
                de registrá-las e repassá-las às novas gestões e a quem possa
                interessar.
              </li>
            </FrentesDeAtuacaoCardDescription>
          </FrentesDeAtuacaoCard>
          <FrentesDeAtuacaoCard>
            <FrentesDeAtuacaoCardTitle>
              Diretoria de Desenvolvimento
            </FrentesDeAtuacaoCardTitle>
            <FrentesDeAtuacaoCardDescription>
              <li>
                Garantir o desenvolvimento de empresas juniores filiadas por
                meio do Suporte direto.
              </li>
              <br />
              <li>
                Prezar pelo constante desenvolvimento das empresas juniores
                filiadas ao Núcleo Vale do Aço, enfatizando aspectos como
                produtos e gestão.
              </li>
              <br />
              <li>
                Zelar pelo alinhamento das empresas juniores filiadas com o
                propósito do Movimento Empresa Júnior.
              </li>
            </FrentesDeAtuacaoCardDescription>
          </FrentesDeAtuacaoCard>
          <FrentesDeAtuacaoCard>
            <FrentesDeAtuacaoCardTitle>
              Diretoria de Expansão
            </FrentesDeAtuacaoCardTitle>
            <FrentesDeAtuacaoCardDescription>
              <li>
                Zelar pelo alinhamento das empresas juniores filiadas com o
                propósito do Movimento Empresa Júnior.
              </li>
              <br />
              <li>
                Acompanhar a regulamentação das empresas juniores filiadas.
              </li>
              <br />
              <li>Garantir a expansão sustentável do Núcleo Vale do Aço.</li>
              <br />
              <li>Desenvolver a rede não filiada.</li>
            </FrentesDeAtuacaoCardDescription>
          </FrentesDeAtuacaoCard>
        </FrentesDeAtuacaoCards>
      </FrentesDeAtuacaoContent>
    </FrentesDeAtuacaoContainer>
  )
}
