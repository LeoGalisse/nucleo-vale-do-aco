import { styled } from '@component/styles'

export const FrentesAtuacaoForm = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
})

export const CardTitle = styled('div', {
  fontSize: '$xl',
  fontWeight: '$bold',
  lineHeight: '$lg',
  textAlign: 'center',

  paddingBottom: 12,

  '@media (max-width: 430px)': {
    fontSize: '$lg',
    lineHeight: '$md',
  },
})

export const CardDescription = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: 12,

  fontSize: '$lg',
  lineHeight: '$md',
  fontWeight: '$regular',
  textAlign: 'justify',
  color: '$brown950',

  '@media (max-width: 430px)': {
    fontSize: '$sm',
    lineHeight: '$md',
  },
})

export const TextArea = styled('textarea', {
  all: 'unset',
  padding: '8px 12px',
  backgroundColor: '$white',
  border: '2px solid $brown500',
  borderRadius: 8,
  boxSizing: 'border-box',
  display: 'flex',
  width: '100%',
  height: 80,
  color: '$brown950',

  '&:focus': {
    border: '2px solid $brown700',
  },
})

export const Span = styled('span', {
  color: '$brown950',
})

export const Button = styled('button', {
  all: 'unset',
  backgroundColor: '$brown500',
  borderRadius: 6,
  fontSize: '$sm',
  fontWeight: '$medium',
  textAlign: 'center',
  minWidth: 120,
  maxWidth: 126,
  boxSizing: 'border-box',

  padding: '12px 20px',
  color: '$white',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,

  cursor: 'pointer',

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$brown100',
  },

  '&:hover': {
    backgroundColor: '$brown600',
  },
})
