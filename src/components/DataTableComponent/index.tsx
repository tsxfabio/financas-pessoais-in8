import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { DataTableContainer } from './styles'
import { useContext, useEffect } from 'react'
import { TransactionsContext } from '@/src/contexts/TransactionsContextType'

export default function DataTableComponent() {
  const { transactions, getTransactions } = useContext(TransactionsContext)

  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-br', { currency: 'BRL', style: 'currency' })
  }

  const priceBodyTemplate = (product: any) => {
    return formatCurrency(product.value)
  }

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
          emptyMessage="Nenhuma transação encontrada"
        >
          <Column field="description" sortable header="Transação"></Column>
          <Column field="category" sortable header="Categoria"></Column>
          <Column field="createdAt" sortable header="Data"></Column>
          <Column
            field="value"
            sortable
            header="Valor"
            dataType="numeric"
            body={priceBodyTemplate}
          />
        </DataTable>
      </DataTableContainer>
    </div>
  )
}
