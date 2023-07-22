import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'

import { DataTableContainer } from './styles'

export default function DataTableComponent() {
  return (
    <div>
      <DataTableContainer>
        <DataTable
          tableStyle={{
            minWidth: '100%',
            textAlign: 'left',
          }}
        >
          <Column field="id" sortable header="ID"></Column>
          <Column field="name" sortable header="Nome"></Column>
          <Column field="categoria" sortable header="Categoria"></Column>
          <Column field="date" sortable header="Data"></Column>
          <Column field="value" sortable header="Valor"></Column>
        </DataTable>
      </DataTableContainer>
    </div>
  )
}
