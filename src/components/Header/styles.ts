import { styled } from '@component/styles'
import Image from 'next/image'

export const HeaderContainer = styled('div', {
  display: 'flex',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1000,
  width: '100%',
  gap: '30%',

  padding: '12px 0',

  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '$brown800',

  '@media(max-width: 960px)': {
    gap: '20%',
  },

  '@media(max-width: 860px)': {
    gap: '10%',
  },

  '@media(max-width: 650px)': {
    gap: '50%',
  },
})

export const HeaderImage = styled(Image, {
  marginLeft: 'auto',
})

export const HeaderContent = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '64px',
  marginRight: 'auto',

  color: '$brown100',

  '@media(max-width: 770px)': {
    gap: '32px',
  },

  '@media(max-width: 650px)': {
    display: 'none',
  },
})

export const HeaderLink = styled('a', {
  textDecoration: 'none',
  color: 'inherit',

  '&:hover': {
    color: '$brown200',
  },
})
