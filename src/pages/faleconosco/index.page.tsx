import {
  FaleConoscoContainer,
  FaleConoscoForm,
  FaleConoscoFormButton,
  FaleConoscoFormContainer,
  FaleConoscoInput,
  FaleConoscoTextArea,
  FaleConoscoTitle,
} from './styles'

export default function FaleConosco() {
  return (
    <FaleConoscoContainer>
      <FaleConoscoTitle>Entre em contato conosco</FaleConoscoTitle>
      <FaleConoscoFormContainer>
        <FaleConoscoForm>
          <FaleConoscoInput type="text" placeholder="Seu nome" required />
          <FaleConoscoInput type="email" placeholder="Seu e-mail" required />
          <FaleConoscoInput type="text" placeholder="Seu telefone" required />
          <FaleConoscoInput
            list="assunto"
            placeholder="Escolha um assunto"
            required
          />
          <datalist id="assunto">
            <option value="Eventos" />
            <option value="Dúvidas Gerais" />
            <option value="Feedbacks e Sugestões" />
            <option value="Fundação ou Filiação de EJ" />
            <option value="Ignição" />
            <option value="Imprensa" />
            <option value="Institucional" />
            <option value="Parceria" />
            <option value="Selo EJ" />
            <option value="Outros" />
          </datalist>
          <FaleConoscoTextArea placeholder="Escreva sua mensagem" required />
          <FaleConoscoFormButton type="submit">Enviar</FaleConoscoFormButton>
        </FaleConoscoForm>
      </FaleConoscoFormContainer>
    </FaleConoscoContainer>
  )
}
