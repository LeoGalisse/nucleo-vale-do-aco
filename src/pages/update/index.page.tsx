import { Title, UpdateContainer } from './styles'

import { About } from './components/About'
import { FrentesAtuacao } from './components/FrentesAtuacao'

export default function Update() {
  return (
    <UpdateContainer>
      <Title>Alteração de conteúdo</Title>
      <About />
      <FrentesAtuacao />
    </UpdateContainer>
  )
}
