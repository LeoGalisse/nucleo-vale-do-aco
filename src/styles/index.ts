import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#FFFFFF',
      red: '#CC0000',
      gray: '#BFBFBF',

      brown100: '#F1DED1',
      brown200: '#E2BDA3',
      brown300: '#D49B75',
      brown400: '#C57A47',
      brown500: '#B75919',
      brown600: '#924714',
      brown700: '#6E350F',
      brown800: '#49240A',
      brown950: '#120902',
    },

    fontSizes: {
      xxs: '0.625rem',
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.5rem',
      '2xl': '2rem',
      '3xl': '2.5rem',
      '4xl': '3rem',
      '5xl': '3.5rem',
      '6xl': '4rem',
    },

    lineHeights: {
      none: '0',
      md: '1.5rem',
      lg: '2rem',
      xl: '2.5rem',
      '2xl': '3rem',
      '3xl': '3.5rem',
      '4xl': '4rem',
      '5xl': '4.5rem',
    },

    fontWeights: {
      regular: '400',
      medium: '500',
      bold: '700',
    },
  },
})
