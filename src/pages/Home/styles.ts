import { styled } from '@component/styles'

export const HomeContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',

  marginTop: 33,
  overflow: 'hidden',
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
