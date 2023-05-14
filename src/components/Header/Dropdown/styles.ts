import { keyframes, styled } from '@component/styles'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

export const DropdownMenuContent = styled(DropdownMenu.Content, {
  display: 'flex',
  flexDirection: 'column',
  zIndex: 1001,
  minWidth: 220,
  backgroundColor: '$brown200',
  borderRadius: 6,
  padding: 5,
  boxShadow:
    '0px 10px 38px -10px rgba(73, 36, 36, 0.35), 0px 10px 20px -15px rgba(73, 36, 36, 0.2)',

  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',

  '&[data-state="open"]': {
    '&[data-side="top"]': {
      animationName: slideDownAndFade,
    },
    '&[data-side="right"]': {
      animationName: slideLeftAndFade,
    },
    '&[data-side="bottom"]': {
      animationName: slideUpAndFade,
    },
    '&[data-side="left"]': {
      animationName: slideRightAndFade,
    },
  },

  '@media(min-width: 650px)': {
    display: 'none',
  },
})

export const DropdownMenuImage = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
})

export const DropdownMenuItem = styled(DropdownMenu.Item, {
  all: 'unset',
  fontSize: '$md',
  lineHeight: 1,
  color: '$brown950',
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '5px 10px',
  position: 'relative',
  paddingLeft: 25,
  userSelect: 'none',

  '&[data-highlighted]': {
    backgroundColor: '$brown300',
    color: '$white',
  },
})

export const DropdownMenuSeparator = styled(DropdownMenu.Separator, {
  height: 1,
  backgroundColor: '$brown800',
  margin: 5,
})

export const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  marginRight: 'auto',
  borderRadius: '100%',
  height: 35,
  width: 35,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$brown100',
  backgroundColor: '$brown800',
  boxShadow: `0 2px 10px $color$brown950`,
  '&:hover': { backgroundColor: '$brown700' },
  '&:focus': { boxShadow: `0 0 0 2px $color$brown950` },

  '@media(min-width: 650px)': {
    display: 'none',
  },
})
