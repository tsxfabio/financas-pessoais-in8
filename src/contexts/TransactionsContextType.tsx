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
  getTransactions(): Promise<void>
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsType[]>([])

  async function getTransactions() {
    await api
      .get('/transactions')
      .then((response) => {
        setTransactions(response.data)
        console.log(transactions)
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
