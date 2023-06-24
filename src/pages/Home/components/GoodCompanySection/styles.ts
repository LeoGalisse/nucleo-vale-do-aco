import { styled } from '@component/styles'

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
