import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { DataTableContainer } from './styles'
import { useContext, useEffect } from 'react'
import { TransactionsContext } from '@/src/contexts/TransactionsContextType'

export default function DataTableComponent() {
  const { transactions, getTransactions } = useContext(TransactionsContext)

  useEffect(() => {
    getTransactions()
  }, [])

  return (
    <div>
      <DataTableContainer>
        <DataTable
          value={transactions}
          tableStyle={{
            minWidth: '100%',
            textAlign: 'left',
          }}
        >
          <Column field="description" sortable header="Transação"></Column>
          <Column field="category" sortable header="Categoria"></Column>
          <Column field="createdAt" sortable header="Data"></Column>
          <Column field="value" sortable header="Valor"></Column>
        </DataTable>
      </DataTableContainer>
    </div>
  )
}
