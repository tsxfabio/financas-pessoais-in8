import { styled } from '@/src/styles'

export const DashboardContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '1140px',
  margin: '-50px auto',
  // backgroundColor: '$pink600',
})

export const DashboardCard = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 6,
  padding: '2rem 3rem',
  boxSizing: 'border-box',
  width: '33%',
  color: '$white',
  fontSize: '1rem',
  variants: {
    colors: {
      pink: { backgroundColor: '$pink600' },
      green: { backgroundColor: '$green500' },
      red: { backgroundColor: '$red500' },
    },
  },

  strong: {
    marginTop: '1rem',
    fontSize: '1.5rem',
  },
})
