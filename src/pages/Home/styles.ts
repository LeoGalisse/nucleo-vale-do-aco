import { styled } from '@component/styles'
import Image from 'next/image'

export const HomeContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  marginTop: 33,
  overflow: 'hidden',
})

export const HeroSection = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  height: 680,
})

export const HeroImage = styled(Image, {})

export const HeroTitle = styled('div', {
  display: 'flex',
  width: 'fit-content',
  height: 'fit-content',
  backgroundColor: '$brown500',
  borderRadius: 25,

  transform: 'translateY(-220px) translateX(-300px)',

  span: {
    fontSize: '$6xl',
    fontWeight: '$bold',
    lineHeight: '$5xl',
    color: '$white',

    padding: '12px 24px',

    p: {
      color: '$brown950',
    },
  },

  '@media (min-height: 690px)': {
    transform: 'translateY(-120px) translateX(calc(80vw - 100vw))',
  },

  '@media (max-width: 1030px)': {
    transform: 'translateY(-220px) translateX(calc(750px - 100vw))',
  },

  '@media (max-width: 960px)': {
    transform: 'translateY(-220px) translateX(-220px)',
  },

  '@media (max-width: 860px)': {
    transform: 'translateY(-220px) translateX(calc(630px - 100vw))',
  },

  '@media (max-width: 640px)': {
    transform: 'translateY(-150px) translateX(calc(480px - 100vw))',

    span: {
      fontSize: '$3xl',
      lineHeight: '$2xl',
    },
  },

  '@media (max-width: 600px)': {
    transform: 'translateY(-150px) ',
    marginRight: 40,
  },
})

export const GoodCompanySection = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  height: 'fit-content',
  padding: '40px 0 52px 0',
  gap: 40,
})

export const GoodCompanyTitle = styled('div', {
  display: 'flex',
  textAlign: 'center',
  width: 373,
  fontSize: '$3xl',
  lineHeight: '$2xl',
  fontWeight: '$bold',
})

export const GoodCompanyCircles = styled('div', {
  display: 'flex',
  position: 'absolute',
  transform: 'translateY(-50px)',
  zIndex: -1,
})

export const GoodCompanyContent = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  width: '80%',

  fontSize: '$xl',
  lineHeight: '$lg',
  fontWeight: '$medium',

  '@media (max-width: 740px)': {
    flexDirection: 'column',
    gap: 96,
  },
})

export const GoodCompanyContentItems = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
})
