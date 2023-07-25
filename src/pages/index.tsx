import Dashboard from '../components/Dashboard'
import DataTableComponent from '../components/DataTableComponent'
import { MainContainer } from '../styles/styles'
import Header from '../components/Header'
import SearchForm from '../components/SearchForm'

export default function Home() {
  return (
    <div>
      <Header />
      <MainContainer>
        <Dashboard />
        <SearchForm />
        <DataTableComponent />
      </MainContainer>
    </div>
  )
}
