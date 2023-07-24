import { useContext } from 'react'
import { TransactionsContext } from '../contexts/TransactionsContextType'

export function useDashboardData() {
  const { transactions } = useContext(TransactionsContext)
  const dashboardData = transactions.reduce(
    (acc, transactions) => {
      if (transactions.value > 0) {
        acc.entradas += transactions.value
        acc.total += transactions.value
      } else {
        acc.saidas += transactions.value
        acc.total += transactions.value
      }
      return acc
    },
    {
      entradas: 0,
      saidas: 0,
      total: 0,
    },
  )
  return dashboardData
}
