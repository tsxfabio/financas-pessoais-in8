import { DashboardCard, DashboardContainer } from './styles'

export default function Dashboard() {
  return (
    <DashboardContainer>
      <DashboardCard colors="pink">
        <span>Entradas</span>
        <strong>R$ 1.000,00</strong>
      </DashboardCard>
      <DashboardCard colors="pink">
        <span>Saídas</span>
        <strong>R$ 500,00</strong>
      </DashboardCard>
      <DashboardCard colors="green">
        <span>Saldo</span>
        <strong>R$ 500,00</strong>
      </DashboardCard>
    </DashboardContainer>
  )
}
