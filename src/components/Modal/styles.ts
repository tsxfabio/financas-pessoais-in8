import { styled } from '@/src/styles'

export const NewTransactionButton = styled('button', {
  padding: '0.5rem 1rem',
  backgroundColor: '$pink600',
  color: 'white',
  border: '1px solid transparent',
  borderRadius: '0.5rem',

  '&:hover': {
    backgroundColor: '$pink800',
    transition: 'background-color 0.3s',
    cursor: 'pointer',
  },
})

export const ModalContainer = styled('div', {
  display: 'flex',
  justifyContent: 'end',
  margin: '0',
  padding: '0',
})

export const FormContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  '.p-inputtext': {
    '&:not(disabled):hover': {
      borderColor: '$pink600',
    },

    '&:not(disabled):focus': {
      borderColor: '$pink600',
      boxShadow: 'none',
    },
  },

  '.p-dropdown': {
    '&:not(.p-disabled)': {
      '&:hover': {
        borderColor: '$pink600',
      },
      '&.p-focus': {
        boxShadow: 'none',
        borderColor: '$pink600',
      },
    },
  },

  '.SelectContainer': {
    display: 'flex',
    justifyContent: 'space-between',
  },

  '.p-selectbutton .p-button.p-highlight': {
    backgroundColor: '$pink600',
    borderColor: '$pink600',

    '&:hover': {
      backgroundColor: '$pink800',
      borderColor: '$pink800',
    },
  },

  '.SelectButton': {
    border: '1px solid $gray500',
    width: '50%',

    '&:focus': {
      boxShadow: 'none',
    },
  },
})
