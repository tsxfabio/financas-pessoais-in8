import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },

  body: {
    backgroundColor: '$white',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, button, textarea': {
    fontFamily: 'Roboto',
    fontSize: '1rem',
    fontWeight: 400,
  },
})
