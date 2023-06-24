import { styled } from '@component/styles'

export const FrentesDeAtuacaoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  padding: '40px 0',
})

export const FrentesDeAtuacaoContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '80%',
  gap: 40,
})

export const FrentesDeAtuacaoTitle = styled('div', {
  fontSize: '$4xl',
  fontWeight: '$bold',
  lineHeight: '$3xl',
  textAlign: 'center',

  '@media (max-width: 430px)': {
    fontSize: '$2xl',
    lineHeight: '$xl',
  },
})

export const FrentesDeAtuacaoCards = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',

  gap: 40,

  '@media (max-width: 830px)': {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
})

export const FrentesDeAtuacaoCard = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: 296,
  border: '1px solid $brown500',
  padding: '32px 52px',
  overflowY: 'auto',
})

export const FrentesDeAtuacaoCardTitle = styled('div', {
  fontSize: '$xl',
  lineHeight: '$lg',
  fontWeight: '$bold',
  textAlign: 'center',

  '@media (max-width: 430px)': {
    fontSize: '$lg',
    lineHeight: '$md',
  },
})

export const FrentesDeAtuacaoCardDescription = styled('ul', {
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
