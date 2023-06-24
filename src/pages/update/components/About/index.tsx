/* eslint-disable react/no-unescaped-entities */
import { AboutForm, Span, SpanError, SubmitButton, TextArea } from './styles'
import {
  AboutContent,
  AboutTitle,
} from '@component/pages/quemsomos/components/AboutSection/styles'

import { api } from '@component/lib/axios'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

interface ResponseProps {
  response: {
    about_section: string
    id: string
  }
}

const AboutFormSchema = z.object({
  about: z
    .string()
    .min(10, { message: 'O texto deve ter no mínimo 10 caracteres' }),
})

type AboutFormData = z.infer<typeof AboutFormSchema>

export function About({ response }: ResponseProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AboutFormData>({
    resolver: zodResolver(AboutFormSchema),
  })

  const [aboutText, setAboutText] = useState('')
  const [aboutId, setAboutId] = useState('')

  async function handleAboutUpdate(data: AboutFormData) {
    await api.put(`/update/about/${aboutId}`, data)
  }

  useEffect(() => {
    setAboutId(response.id)
    setAboutText(response.about_section)
  }, [response])

  return (
    <AboutForm onSubmit={handleSubmit(handleAboutUpdate)}>
      <AboutContent>
        <AboutTitle>Sobre</AboutTitle>
        <TextArea defaultValue={aboutText} {...register('about')} />
        {errors.about && <SpanError>{errors.about.message}</SpanError>}
        <Span>Use '/' para representar parágrafos</Span>
        <SubmitButton disabled={isSubmitting} type="submit">
          Alterar
        </SubmitButton>
      </AboutContent>
    </AboutForm>
  )
}
