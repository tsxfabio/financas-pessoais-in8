import React, { useState } from 'react'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown'
import { SelectButton, SelectButtonChangeEvent } from 'primereact/selectbutton'
import { FormContainer, ModalContainer, NewTransactionButton } from './styles'

export default function DialogModal() {
  const transactionType: string[] = ['Entrada', 'Saída']
  const [selectedTransactionType, setSelectedTransactionType] =
    useState<string>(transactionType[0])
  const [visible, setVisible] = useState<boolean>(false)
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [categoryList, setCategoryList] = useState<string[]>([
    'Alimentação',
    'Lazer',
    'Moradia',
    'Salário',
    'Outros',
  ])

  return (
    <ModalContainer>
      <NewTransactionButton onClick={() => setVisible(true)}>
        Nova Transação
      </NewTransactionButton>
      <Dialog
        header="Nova Transação"
        visible={visible}
        style={{ width: '25vw' }}
        onHide={() => setVisible(false)}
        position="top"
      >
        <form>
          <FormContainer>
            <InputText
              keyfilter="alpha"
              placeholder="Descrição"
              className="InputText"
            />
            <InputText
              keyfilter="money"
              placeholder="Valor"
              className="InputText"
            />
            <Dropdown
              value={selectedCategory}
              options={categoryList}
              onChange={(e: DropdownChangeEvent) =>
                setSelectedCategory(e.value)
              }
              placeholder="Selecione a Categoria"
            />
            <SelectButton
              pt={{
                root: { className: 'SelectContainer' },
                button: { className: 'SelectButton' },
              }}
              value={selectedTransactionType}
              onChange={(e: SelectButtonChangeEvent) =>
                setSelectedTransactionType(e.value)
              }
              options={transactionType}
            />
            <NewTransactionButton type="submit">Cadastrar</NewTransactionButton>
          </FormContainer>
        </form>
      </Dialog>
    </ModalContainer>
  )
}
