import { styled } from '@component/styles'

export const AboutContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  backgroundColor: '$brown950',
})

export const AboutContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '80%',

  padding: '32px 0',
  gap: 20,
})

export const AboutTitle = styled('div', {
  textAlign: 'center',
  fontSize: '$3xl',
  fontWeight: '$bold',
  color: '$white',
  lineHeight: '$2xl',
  width: '75%',

  paddingBottom: 20,
  borderBottom: '1px solid $white',

  '@media (max-width: 384px)': {
    fontSize: '$2xl',
    lineHeight: '$xl',
  },
})

export const AboutText = styled('div', {
  textAlign: 'justify',
  fontSize: '$lg',
  fontWeight: '$regular',
  lineHeight: '$md',
  color: '$white',

  '@media (max-width: 384px)': {
    fontSize: '$md',
    lineHeight: '$lg',
  },
})
