import { ReactNode, createContext, useState } from 'react'
import { api } from '../lib/server'

interface TransactionsProviderProps {
  children: ReactNode
}

interface TransactionsType {
  id: number
  description: string
  value: number
  category: string
  createdAt: string
}

interface TransactionsContextType {
  transactions: TransactionsType[]
  getTransactions: (query?: string) => Promise<void>
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsType[]>([])

  async function getTransactions(query?: string) {
    await api
      .get('/transactions', {
        params: {
          _sort: 'createdAt',
          _order: 'desc',
          q: query,
        },
      })
      .then((response) => {
        setTransactions(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <TransactionsContext.Provider value={{ transactions, getTransactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
