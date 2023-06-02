import { styled } from '@component/styles'

export const AboutForm = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',

  backgroundColor: '$brown950',
})

export const TextArea = styled('textarea', {
  all: 'unset',
  padding: '12px 20px',
  backgroundColor: '$white',
  border: '2px solid $brown500',
  borderRadius: 8,
  boxSizing: 'border-box',
  display: 'flex',
  width: '100%',
  height: 250,
  color: '$brown950',

  '&:focus': {
    border: '2px solid $brown700',
  },
})

export const Span = styled('span', {
  color: '$brown100',
})

export const SubmitButton = styled('button', {
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

export const SpanError = styled('span', {
  color: '$red',
})
