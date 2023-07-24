import React, { useState } from 'react'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { SelectButton, SelectButtonChangeEvent } from 'primereact/selectbutton'
import { FormContainer, ModalContainer, NewTransactionButton } from './styles'
import { Controller, useForm } from 'react-hook-form'
import { classNames } from 'primereact/utils'

export default function DialogModal() {
  const { control, handleSubmit, register } = useForm()
  const transactionType: string[] = ['Entrada', 'Saída']
  const [visible, setVisible] = useState<boolean>(false)
  const [categoryList, setCategoryList] = useState<string[]>([
    'Alimentação',
    'Lazer',
    'Moradia',
    'Salário',
    'Outros',
  ])

  // Formulário
  const [selectedTransactionType, setSelectedTransactionType] =
    useState<string>(transactionType[0])

  function onSubmit(data: any) {
    console.log(data)
  }

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormContainer>
            <InputText
              keyfilter="alpha"
              placeholder="Descrição"
              className="InputText"
              {...register('description')}
            />
            <InputText
              keyfilter="money"
              placeholder="Valor"
              className="InputText"
              {...register('value')}
            />
            <Controller
              name="category"
              control={control}
              render={({ field, fieldState }) => (
                <Dropdown
                  id={field.name}
                  value={field.value}
                  placeholder="Selecione a Categoria"
                  options={categoryList}
                  focusInputRef={field.ref}
                  onChange={(e) => field.onChange(e.value)}
                  className={classNames({ 'p-invalid': fieldState.error })}
                />
              )}
            />
            <Controller
              name="transactionType"
              control={control}
              render={({ field, fieldState }) => (
                <SelectButton
                  pt={{
                    root: { className: 'SelectContainer' },
                    button: { className: 'SelectButton' },
                  }}
                  id={field.name}
                  options={transactionType}
                  {...field}
                />
              )}
            />

            <SelectButton
              value={selectedTransactionType}
              onChange={(e: SelectButtonChangeEvent) =>
                setSelectedTransactionType(e.value)
              }
            />

            <NewTransactionButton type="submit">Cadastrar</NewTransactionButton>
          </FormContainer>
        </form>
      </Dialog>
    </ModalContainer>
  )
}
