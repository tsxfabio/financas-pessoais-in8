import Dashboard from '../components/Dashboard'
import DataTableComponent from '../components/DataTableComponent'
import InputText from '../components/InputText'
import { MainContainer } from '../styles/styles'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Header />
      <MainContainer>
        <Dashboard />
        <InputText />
        <DataTableComponent />
      </MainContainer>
    </div>
  )
}
