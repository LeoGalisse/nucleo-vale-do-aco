import { styled } from '@component/styles'
import Image from 'next/image'

export const HeroSection = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  position: 'relative',
  height: '100vh',
  width: '100vw',

  '@media (max-width: 660px)': {
    height: '85vh',
  },
})

export const HeroImage = styled(Image, {
  objectFit: 'cover',
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: 1120,

  '@media (max-width: 660px)': {
    maxHeight: 354,
  },
})

export const HeroTitle = styled('div', {
  position: 'relative',
  display: 'flex',
  backgroundColor: '$brown500',
  alignSelf: 'flex-start',
  marginLeft: '5%',
  transform: 'translateY(150%)',

  fontSize: '$3xl',
  lineHeight: '$2xl',
  fontWeight: '$bold',
  color: '$white',

  padding: '12px 24px',
  borderRadius: 25,

  p: {
    color: '$brown950',
  },

  '@media (min-width: 660px)': {
    fontSize: '$6xl',
    lineHeight: '$4xl',
    transform: 'translateY(125%)',

    backgroundColor: 'rgba(183, 89, 25, 0.8)',
  },

  '@media (min-height: 520px)': {
    backgroundColor: '$brown500',
    transform: 'translateY(0)',
    marginTop: '60vh',
  },

  '@media (min-height: 520px) and (max-width: 660px)': {
    backgroundColor: '$brown500',
    marginTop: 0,
    transform: 'translateY(125%)',
  },

  '@media (max-height: 450px)': {
    transform: 'translateY(0)',
    marginTop: '50vh',
    fontSize: '$2xl',
    lineHeight: '$xl',
    fontWeight: '$bold',
    color: '$white',
  },
})
