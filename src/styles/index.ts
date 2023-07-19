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
      gray200: '#d9dbd9',
      gray700: '#4f4e50',
      gray800: '#2b2b2b',
      black: '#000',
      pink600: '#d248a9',
      pink800: '#981d70',
      yellow500: '#ffe600',
      green500: '#015f43',
      red500: '#5f0101',
    },
  },
})
