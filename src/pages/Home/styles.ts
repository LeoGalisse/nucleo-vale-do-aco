import { styled } from '@component/styles'
import Image from 'next/image'
import Link from 'next/link'

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

export const MejSection = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  backgroundColor: '$brown700',
})

export const MejCircle = styled('div', {
  backgroundColor: '$brown200',
  borderRadius: '50% / 0 0 100% 100%',
  position: 'absolute',
  transform: 'translateY(-1px)',
  width: '100%',
  height: 100,
  zIndex: 1,
})

export const MejInfo = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '0 80px',

  gap: 20,

  '@media (max-width: 980px)': {
    marginTop: 120,
    flexDirection: 'column',
  },

  '@media (max-width: 500px)': {
    padding: '0 20px',
  },
})

export const MejContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  gap: 20,

  'span:first-child': {
    borderBottom: '1px solid $brown100',
    paddingBottom: 20,
  },

  span: {
    color: '$white',
    fontSize: '$md',
    lineHeight: '$lg',
    fontWeight: '$regular',
    textAlign: 'justify',
  },

  '@media (max-width: 500px)': {
    span: {
      fontSize: '$sm',
    },
  },
})

export const MejLink = styled(Link, {
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
})

export const MejImage = styled('div', {
  position: 'relative',
  height: 732,
  maxWidth: 733,
  width: '275%',
  zIndex: 1,

  '@media (max-width: 980px)': {
    height: 500,
  },

  '@media (max-width: 400px)': {
    height: 300,
  },
})
