import { styled } from '@component/styles'

export const EjsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  marginTop: 73,
  padding: '80px 0',
})

export const EjsTitle = styled('div', {
  fontSize: '$4xl',
  fontWeight: '$bold',
  lineHeight: '$3xl',
  textAlign: 'center',

  '@media (max-width: 430px)': {
    fontSize: '$2xl',
    lineHeight: '$xl',
  },
})

export const EjsContent = styled('div', {
  marginLeft: 'auto',
  marginRight: 'auto',

  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  padding: '80px 0',
  gap: 16,

  '@media (max-width: 1074px)': {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },

  '@media (max-width: 860px)': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },

  '@media (max-width: 646px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },

  '@media (max-width: 430px)': {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
})

export const EjsItem = styled('div', {
  display: 'flex',
  minHeight: 200,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$white',

  div: {
    position: 'absolute',
    display: 'none',
    fontSize: '$lg',
    fontWeight: '$medium',
    textAlign: 'center',

    a: {
      textDecoration: 'none',
      color: '$brown950',
    },

    transition: 'all 0.4s ease-in-out',
    '&:hover': {
      backgroundColor: 'rgba(191, 191, 191, 0.8)',
    },
  },

  '&:hover': {
    div: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: 200,
      height: 200,
    },
  },
})
