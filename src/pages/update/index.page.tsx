import { Title, UpdateContainer } from './styles'

import { About } from './components/About'

export default function Update() {
  return (
    <UpdateContainer>
      <Title>Alteração de conteúdo</Title>
      <About />
    </UpdateContainer>
  )
}
