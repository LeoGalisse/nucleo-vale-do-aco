import { styled } from '@component/styles'

export const FaleConoscoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  marginTop: 73,
  padding: '80px 0',
  gap: 40,
})

export const FaleConoscoTitle = styled('div', {
  fontSize: '$4xl',
  fontWeight: '$bold',
  lineHeight: '$3xl',
  textAlign: 'center',

  '@media (max-width: 430px)': {
    fontSize: '$2xl',
    lineHeight: '$xl',
  },
})

export const FaleConoscoFormContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '75%',

  backgroundColor: '$brown500',
  borderRadius: 25,

  padding: 32,
})

export const FaleConoscoForm = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 20,
  width: '100%',
})

export const FaleConoscoFormItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: 4,
})

export const FaleConoscotFormItemLabel = styled('label', {
  fontSize: '$lg',
  fontWeight: '$medium',
  color: '$white',
})

export const FaleConoscoInput = styled('input', {
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

export const FaleConoscoTextArea = styled('textarea', {
  all: 'unset',
  padding: '12px 20px',
  backgroundColor: '$white',
  border: '2px solid $brown500',
  borderRadius: 8,
  boxSizing: 'border-box',
  display: 'flex',
  width: '100%',
  height: 125,

  '&:focus': {
    border: '2px solid $brown700',
  },
})

export const FaleConoscoFormButton = styled('button', {
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

export const FaleConoscoFormError = styled('span', {
  fontSize: '$sm',
  fontWeight: '$medium',
  color: '$brown950',
})
