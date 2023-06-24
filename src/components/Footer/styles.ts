import { styled } from '@component/styles'

export const FooterContainer = styled('div', {
  width: '100%',
})

export const FooterContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'start',

  backgroundColor: '$brown300',
  padding: '40px 0',
  paddingLeft: '10%',
  paddingRight: '10%',

  gap: 60,

  'a, span': {
    textDecoration: 'none',
    color: '$brown950',
    fontSize: '$md',
    fontWeight: '$medium',
    lineHeight: '$md',

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  '@media (max-width: 1190px)': {
    gap: 20,
  },

  '@media (max-width: 695px)': {
    gap: 0,
  },

  '@media (max-width: 445px)': {
    flexDirection: 'column',
    gap: 30,
  },
})

export const FooterTitle = styled('span', {
  fontSize: '$lg',
  fontWeight: '$medium',
  lineHeight: '$lg',
  color: '$brown950',

  marginBottom: 32,

  '&:hover': {
    textDecoration: 'none !important',
    cursor: 'default',
  },
})

export const FooterNav = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '35%',
  maxWidth: 165,

  '@media (max-width: 630px)': {
    minWidth: 165,
  },
})

export const FooterWhere = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 320,
})

export const FooterWhereIcons = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  paddingTop: 32,
  gap: 5,
})

export const FooterLogo = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  gap: 60,

  '@media (max-width: 1190px)': {
    gap: 20,
  },

  '@media (max-width: 1080px)': {
    '#nuva': {
      display: 'none',
    },
  },

  '@media (max-width: 810px)': {
    '#logo-nuva': {
      display: 'none',
    },
  },
})

export const FooterCopyright = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: '$brown500',
  color: '$white',
  padding: '20px 0',

  fontSize: '$sm',
  fontWeight: '$regular',
  lineHeight: '$md',
})

export const FooterCopyrightImage = styled('span', {
  display: 'flex',
  flexDirection: 'row',

  gap: 5,
})
