import { ReactNode, createContext, useState } from 'react'

interface TransactionsProviderProps {
  children: ReactNode
}

interface TransactionsContextType {
  data: string[]
  setData: (data: string[]) => void
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [data, setData] = useState(['Valor inicial do contexto'])

  return (
    <TransactionsContext.Provider value={{ data, setData }}>
      {children}
    </TransactionsContext.Provider>
  )
}
