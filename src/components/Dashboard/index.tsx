import { DashboardCard, DashboardContainer } from './styles'
import { useDashboardData } from '@/src/hooks/useDashboardData'

export default function Dashboard() {
  const dashboardData = useDashboardData()

  function currencyFormat(value: number) {
    return new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL',
    }).format(value)
  }

  return (
    <DashboardContainer>
      <DashboardCard colors="pink">
        <span>Entradas</span>
        <strong>{currencyFormat(dashboardData.entradas)}</strong>
      </DashboardCard>
      <DashboardCard colors="pink">
        <span>Saídas</span>
        <strong>{currencyFormat(dashboardData.saidas)}</strong>
      </DashboardCard>
      <DashboardCard colors={dashboardData.total >= 0 ? 'green' : 'red'}>
        <span>Saldo</span>
        <strong>{currencyFormat(dashboardData.total)}</strong>
      </DashboardCard>
    </DashboardContainer>
  )
}
