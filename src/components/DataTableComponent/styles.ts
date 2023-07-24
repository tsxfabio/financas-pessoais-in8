import { styled } from '@/src/styles'

export const DataTableContainer = styled('div', {
  '.p-datatable-table': {
    fontFamily: 'Roboto',

    // border: '1px solid red',
  },

  '.p-datatable .p-datatable-thead > tr > th': {
    backgroundColor: '$gray200',
    padding: '0.75rem',
  },

  '.p-datatable .p-datatable-tbody > tr > td': {
    padding: '0.75rem',
  },
})
