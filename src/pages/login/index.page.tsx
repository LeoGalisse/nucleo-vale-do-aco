import { z } from 'zod'
import {
  LoginContainer,
  LoginFormButton,
  LoginFormContainer,
  LoginFormItemLabel,
  LoginInput,
  LoginTitle,
} from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '@component/lib/axios'
import { useRouter } from 'next/router'

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

type LoginData = z.infer<typeof LoginSchema>

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginData>({
    resolver: zodResolver(LoginSchema),
  })

  const router = useRouter()

  async function handleLogin(data: LoginData) {
    const response = await api.post('/auth/', {
      data,
    })

    if (response.status === 200) {
      await router.push('/update')
    }
  }

  return (
    <LoginContainer onSubmit={handleSubmit(handleLogin)}>
      <LoginTitle>Login</LoginTitle>
      <LoginFormContainer>
        <div style={{ width: '100%' }}>
          <LoginFormItemLabel>E-mail</LoginFormItemLabel>
          <LoginInput {...register('email')} />
        </div>
        <div style={{ width: '100%' }}>
          <LoginFormItemLabel>Password</LoginFormItemLabel>
          <LoginInput {...register('password')} type="password" />
        </div>
        <LoginFormButton type="submit" disabled={isSubmitting}>
          Acessar
        </LoginFormButton>
      </LoginFormContainer>
    </LoginContainer>
  )
}
