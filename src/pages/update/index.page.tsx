import { Title, UpdateContainer } from './styles'

import { About } from './components/About'
import { FrentesAtuacao } from './components/FrentesAtuacao'
import { GoodCompanyUpdate } from './components/GoodCompany'

export default function Update() {
  return (
    <UpdateContainer>
      <Title>Alteração de conteúdo</Title>
      <About />
      <FrentesAtuacao />
      <GoodCompanyUpdate />
    </UpdateContainer>
  )
}
