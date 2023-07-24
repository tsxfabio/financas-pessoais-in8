import React, { useContext, useEffect, useState } from 'react'
import { classNames } from 'primereact/utils'
import { SelectButton } from 'primereact/selectbutton'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { FormContainer, ModalContainer, NewTransactionButton } from './styles'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { InputNumber } from 'primereact/inputnumber'
import { api } from '@/src/lib/server'
import moment from 'moment'
import { TransactionsContext } from '@/src/contexts/TransactionsContextType'

const ModalSchema = z.object({
  description: z.string().nonempty(),
  value: z.number().positive(),
  category: z.string().nonempty(),
  transactionType: z.enum(['Entrada', 'Saída']),
})

type inputModalSchema = z.infer<typeof ModalSchema>

export default function DialogModal() {
  const { getTransactions } = useContext(TransactionsContext)
  const transactionType: string[] = ['Entrada', 'Saída']
  const categoryList: string[] = [
    'Alimentação',
    'Educação',
    'Lazer',
    'Moradia',
    'Salário',
    'Saúde',
    'Transporte',
    'Outros',
  ]
  const [visible, setVisible] = useState<boolean>(false)

  const { control, handleSubmit, reset, formState } = useForm<inputModalSchema>(
    {
      resolver: zodResolver(ModalSchema),
      defaultValues: {
        description: '',
        transactionType: 'Entrada',
        value: 0,
      },
    },
  )

  async function handleCreateNewTransaction(data: inputModalSchema) {
    const { description, value, category, transactionType } = data

    await api.post('/transactions', {
      description,
      value: transactionType === 'Entrada' ? value : value * -1,
      category,
      createdAt: moment().locale('pt-br').format('DD/MM/YYYY'),
    })

    reset()
    setVisible(false)
    getTransactions()
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
        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <FormContainer>
            <Controller
              name="description"
              control={control}
              render={({ field, fieldState }) => (
                <InputText
                  id={field.name}
                  value={field.value}
                  placeholder="Descrição"
                  className={classNames({ 'p-invalid': fieldState.error })}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              )}
            />
            <Controller
              name="value"
              control={control}
              render={({ field, fieldState }) => (
                <InputNumber
                  id={field.name}
                  inputRef={field.ref}
                  value={field.value}
                  onBlur={field.onBlur}
                  placeholder="Valor"
                  onValueChange={(e) => field.onChange(e)}
                  inputClassName={classNames({ 'p-invalid': fieldState.error })}
                  minFractionDigits={2}
                  maxFractionDigits={2}
                />
              )}
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
            <NewTransactionButton type="submit">Cadastrar</NewTransactionButton>
          </FormContainer>
        </form>
      </Dialog>
    </ModalContainer>
  )
}
