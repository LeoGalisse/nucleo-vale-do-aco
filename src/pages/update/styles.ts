import { styled } from '@component/styles'

export const UpdateContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  marginTop: 73,
  padding: '80px 0',
  gap: 40,
})

export const Title = styled('div', {
  fontSize: '$4xl',
  fontWeight: '$bold',
  lineHeight: '$3xl',
  textAlign: 'center',

  '@media (max-width: 430px)': {
    fontSize: '$2xl',
    lineHeight: '$xl',
  },
})
