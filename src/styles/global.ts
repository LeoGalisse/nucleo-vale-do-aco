import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    borderBox: 'border-box',
  },

  body: {
    backgroundColor: '$brown200',
    color: '$brown950',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, button, textarea': {
    fontFamily: 'Inter',
    fontWeight: '$regular',
  },
})
