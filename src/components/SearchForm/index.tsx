import { InputText as InputComponent } from 'primereact/inputtext'
import { InputTextButton, InputTextContainer } from './styles'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { useContext } from 'react'
import { TransactionsContext } from '@/src/contexts/TransactionsContextType'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormSchemaType = z.infer<typeof searchFormSchema>

export default function SearchForm() {
  const { getTransactions } = useContext(TransactionsContext)
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<SearchFormSchemaType>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearch(data: SearchFormSchemaType) {
    await getTransactions(data.query)
  }

  return (
    <InputTextContainer onSubmit={handleSubmit(handleSearch)}>
      <InputComponent
        className="inputComponent"
        placeholder="Busque por transações"
        {...register('query')}
      />
      <InputTextButton type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={16} />
        <span>Buscar</span>
      </InputTextButton>
    </InputTextContainer>
  )
}
