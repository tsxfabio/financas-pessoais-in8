import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },

  body: {
    backgroundColor: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, button, textarea': {
    fontFamily: 'Roboto',
    fontSize: '1rem',
    fontWeight: 400,
  },

  table: {
    borderCollapse: 'collapse',
    borderSpacing: 0,
  },
})
