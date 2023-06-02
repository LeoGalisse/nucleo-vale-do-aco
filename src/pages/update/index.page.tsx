import { Title, UpdateContainer } from './styles'

import { About } from './components/About'
import { FrentesAtuacao } from './components/FrentesAtuacao'
import { GoodCompanyUpdate } from './components/GoodCompany'
import EjsUpdate from './components/Ejs'

export default function Update() {
  return (
    <UpdateContainer>
      <Title>Alteração de conteúdo</Title>
      <About />
      <FrentesAtuacao />
      <GoodCompanyUpdate />
      <EjsUpdate />
    </UpdateContainer>
  )
}
