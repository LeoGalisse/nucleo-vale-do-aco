import { z } from 'zod'
import {
  FaleConoscoContainer,
  FaleConoscoForm,
  FaleConoscoFormButton,
  FaleConoscoFormContainer,
  FaleConoscoFormError,
  FaleConoscoFormItem,
  FaleConoscoInput,
  FaleConoscoTextArea,
  FaleConoscoTitle,
  FaleConoscotFormItemLabel,
} from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { NextSeo } from 'next-seo'
import { GetStaticProps } from 'next'
import { api } from '@component/lib/axios'

const confirmFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'O nome deve ter no mínimo 3 caracteres' })
    .regex(/^([a-záàâãéèêíïóôõöúçñ ]+)$/i, {
      message: 'O nome deve conter apenas letras e espaços',
    }),
  email: z.string().email({ message: 'O e-mail deve ser válido' }),
  phone: z
    .string()
    .min(10, { message: 'O telefone deve ter no mínimo 10 dígitos' }),
  subject: z
    .string()
    .min(3, { message: 'O assunto deve ter no mínimo 3 caracteres' }),
  text: z
    .string()
    .min(10, { message: 'A mensagem deve ter no mínimo 10 caracteres' }),
})

type ContactFormData = z.infer<typeof confirmFormSchema>

export default function FaleConosco() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(confirmFormSchema),
  })

  async function handleContactSubmission(data: ContactFormData) {
    console.log(data)
    const res = await api.post('/email', data)
    console.log(res)
    reset()
  }

  return (
    <>
      <NextSeo
        title="Fale Conosco | NúVA"
        description="Entre em contato com o Núcleo do Vale do Aço"
      />
      <FaleConoscoContainer>
        <FaleConoscoTitle>Entre em contato conosco</FaleConoscoTitle>
        <FaleConoscoFormContainer>
          <FaleConoscoForm onSubmit={handleSubmit(handleContactSubmission)}>
            <FaleConoscoFormItem>
              <FaleConoscotFormItemLabel>
                Nome completo
              </FaleConoscotFormItemLabel>
              <FaleConoscoInput
                placeholder="Seu nome"
                required
                {...register('name')}
              />
              {errors.name && (
                <FaleConoscoFormError>
                  {errors.name.message}
                </FaleConoscoFormError>
              )}
            </FaleConoscoFormItem>
            <FaleConoscoFormItem>
              <FaleConoscotFormItemLabel>E-mail</FaleConoscotFormItemLabel>
              <FaleConoscoInput
                placeholder="Seu e-mail"
                required
                {...register('email')}
              />
              {errors.email && (
                <FaleConoscoFormError>
                  {errors.email.message}
                </FaleConoscoFormError>
              )}
            </FaleConoscoFormItem>
            <FaleConoscoFormItem>
              <FaleConoscotFormItemLabel>Telefone</FaleConoscotFormItemLabel>
              <FaleConoscoInput
                placeholder="Seu telefone"
                required
                {...register('phone')}
              />
              {errors.phone && (
                <FaleConoscoFormError>
                  {errors.phone.message}
                </FaleConoscoFormError>
              )}
            </FaleConoscoFormItem>
            <FaleConoscoFormItem>
              <FaleConoscotFormItemLabel>Assunto</FaleConoscotFormItemLabel>
              <FaleConoscoInput
                list="assunto"
                placeholder="Escolha um assunto"
                required
                {...register('subject')}
              />
              {errors.subject && (
                <FaleConoscoFormError>
                  {errors.subject.message}
                </FaleConoscoFormError>
              )}
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
            </FaleConoscoFormItem>
            <FaleConoscoFormItem>
              <FaleConoscotFormItemLabel>Mensagem</FaleConoscotFormItemLabel>
              <FaleConoscoTextArea
                placeholder="Escreva sua mensagem"
                required
                {...register('text')}
              />
              {errors.text && (
                <FaleConoscoFormError>
                  {errors.text.message}
                </FaleConoscoFormError>
              )}
            </FaleConoscoFormItem>
            <FaleConoscoFormButton disabled={isSubmitting} type="submit">
              Enviar
            </FaleConoscoFormButton>
          </FaleConoscoForm>
        </FaleConoscoFormContainer>
      </FaleConoscoContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}
