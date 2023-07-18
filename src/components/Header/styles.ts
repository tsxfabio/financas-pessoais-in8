import { styled } from '@/src/styles'

export const HeaderContainer = styled('header', {
  width: '100vw',
  height: '220px',
  backgroundColor: '$gray200',

  div: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1140px',
    padding: '2.5rem 0',
    margin: '0 auto',
    // backgroundColor: '$pink800',

    span: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '0.3rem',
    },
  },
})

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
