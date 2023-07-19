import Dashboard from '../components/Dashboard'
import InputText from '../components/InputText'
import { MainContainer } from '../styles/styles'

export default function Home() {
  return (
    <MainContainer>
      <Dashboard />
      <InputText />
    </MainContainer>
  )
}
