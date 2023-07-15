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
      white: '#fff',

      gray100: '#f8f8fa',
      gray700: '#4f4e50',

      black: '#000',

      pink600: '#d248a9',
      pink800: '#981d70',

      yellow500: '#ffe600',
    },
  },
})
