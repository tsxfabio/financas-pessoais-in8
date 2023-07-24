import { styled } from '@/src/styles'

export const InputTextContainer = styled('form', {
  display: 'flex',
  flexDirection: 'row',
  margin: '1rem 0',
  gap: '0.5rem',

  '.inputComponent': {
    padding: '0.5rem',
    width: '80%',
    borderRadius: 6,
    backgroundColor: '$white',
    color: '$pink600',
    border: '1px solid $pink600',

    '&::placeholder': {
      color: '$pink600',
      fontSize: '.875rem',
    },

    '&:not(disabled):hover': {
      borderColor: '$pink600',
    },

    '&:not(disabled):focus': {
      boxShadow: 'none',
      borderColor: '$pink600',
    },
  },
})

export const InputTextButton = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '20%',
  borderRadius: 6,
  border: '1px solid $pink600',
  color: '$pink600',
  backgroundColor: '$white',
  cursor: 'pointer',
  transition: '0.5s',

  '&:hover': {
    backgroundColor: '$pink600',
    color: '$white',
    transition: '0.5s',
  },

  span: {
    marginLeft: '0.3rem',
  },
})
