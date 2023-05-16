import { styled } from '@component/styles'
import Link from 'next/link'

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
