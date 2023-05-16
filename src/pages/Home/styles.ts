import { styled } from '@component/styles'
import Link from 'next/link'

export const HomeContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',

  marginTop: 33,
  overflow: 'hidden',
})

export const MejSection = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  backgroundColor: '$brown700',
  position: 'relative',
  overflow: 'hidden',
})

export const MejCircle = styled('div', {
  backgroundColor: '$brown200',
  borderRadius: '50% / 0 0 100% 100%',
  position: 'absolute',
  alignSelf: 'center',
  transform: 'translateY(-1px)',

  width: '125%',
  height: 100,
  zIndex: 1,

  '@media (max-width: 980px)': {
    width: '200%',
  },
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

export const SupportSection = styled('div', {
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  gap: 40,
  overflow: 'hidden',
  paddingBottom: 40,
})

export const SupportCircle = styled('div', {
  backgroundColor: '$brown700',
  borderRadius: '50% / 0 0 100% 100%',
  position: 'absolute',

  width: '150%',
  height: 100,
  zIndex: -1,

  '@media (max-width: 980px)': {
    width: '200%',
  },
})

export const SupportTitle = styled('div', {
  display: 'flex',
  textAlign: 'center',
  color: '$white',
  fontSize: '$4xl',
  lineHeight: '$5xl',
  fontWeight: '$bold',

  '@media (max-width: 440px)': {
    paddingTop: 20,
    fontSize: '$2xl',
    lineHeight: '$2xl',
  },
  '@media (max-width: 260px)': {
    paddingTop: 0,
  },
})

export const SupportLogos = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '60%',
  height: 200,

  '@media (max-width: 1100px)': {
    width: '80%',
  },

  '@media (max-width: 740px)': {
    flexDirection: 'column',
    height: 600,
  },
})

export const SupportLogoItems = styled('div', {
  position: 'relative',
  maxWidth: 200,

  height: '100%',
  width: '100%',
})
