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
