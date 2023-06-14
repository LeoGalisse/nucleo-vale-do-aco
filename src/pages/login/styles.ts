import { styled } from '@component/styles'

export const LoginContainer = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  marginTop: 73,
  padding: '40px 0',
  gap: 20,
})

export const LoginTitle = styled('div', {
  fontSize: '$4xl',
  fontWeight: '$bold',
  lineHeight: '$3xl',
  textAlign: 'center',

  '@media (max-width: 430px)': {
    fontSize: '$2xl',
    lineHeight: '$xl',
  },
})

export const LoginFormContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '50%',

  backgroundColor: '$brown500',
  borderRadius: 25,

  padding: 32,
  gap: 10,
})

export const LoginFormItemLabel = styled('label', {
  fontSize: '$lg',
  fontWeight: '$medium',
  color: '$brown950',
  alignSelf: 'flex-start',
})

export const LoginInput = styled('input', {
  all: 'unset',
  padding: '12px 20px',
  backgroundColor: '$white',
  border: '2px solid $brown500',
  borderRadius: 8,
  boxSizing: 'border-box',
  display: 'flex',
  width: '100%',

  '&:focus': {
    border: '2px solid $brown700',
  },
})

export const LoginFormButton = styled('button', {
  all: 'unset',
  backgroundColor: '$brown200',
  borderRadius: 8,
  border: '2px solid $brown700',
  fontSize: '$md',
  fontWeight: '$medium',
  textAlign: 'center',
  minWidth: 98,
  maxWidth: 100,
  boxSizing: 'border-box',

  padding: '12px 20px',
  color: '$brown950',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'flex-end',

  cursor: 'pointer',

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$brown100',
  },

  '&:disabled': {
    backgroundColor: '$gray',
    opacity: 0.7,
    cursor: 'not-allowed',
  },
})
