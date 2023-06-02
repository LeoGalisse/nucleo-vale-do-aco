import { styled } from '@component/styles'

export const GoodCompany = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  height: 'fit-content',
  padding: '40px 0 52px 0',
  gap: 40,
})

export const TextArea = styled('textarea', {
  all: 'unset',
  padding: '8px 12px',
  backgroundColor: '$white',
  border: '2px solid $brown500',
  borderRadius: 8,
  boxSizing: 'border-box',
  display: 'flex',
  width: '50%',
  height: 50,
  overflow: 'hidden',
  color: '$brown950',

  '&:focus': {
    border: '2px solid $brown700',
  },
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

export const FormError = styled('span', {
  color: '$red',
  fontSize: '$sm',
})
