import { styled } from '@/src/styles'

export const DataTableContainer = styled('div', {
  '.p-datatable-table': {
    fontFamily: 'Roboto',
    // border: '1px solid red',
  },

  '.p-datatable-thead': {
    th: {
      // border: '1px solid red',
      backgroundColor: '$gray200',
      padding: '0.3rem',
    },
  },

  '.p-datatable-tbody': {
    td: {
      borderBottom: '1px solid $gray200',
      paddingLeft: '0.3rem',
    },
  },
})
