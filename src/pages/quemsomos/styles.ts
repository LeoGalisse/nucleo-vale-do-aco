import { styled } from '@component/styles'
import Image from 'next/image'

export const QuemSomosContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  position: 'relative',
  overflow: 'hidden',
})

export const QuemSomosContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: 74,

  padding: '80px 0',
  gap: 40,
})

export const QuemSomosTitle = styled('div', {
  fontSize: '$4xl',
  fontWeight: '$bold',
  lineHeight: '$3xl',
  textAlign: 'center',

  '@media (max-width: 430px)': {
    fontSize: '$2xl',
    lineHeight: '$xl',
  },
})

export const QuemSomosImage = styled(Image, {
  '&:hover': {
    alignSelf: 'center',
    width: '115%',
    height: '115%',
  },

  '@media (max-width: 430px)': {
    width: '100%',
    height: '100%',
  },
})
