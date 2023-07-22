import { useState } from 'react'
import Dashboard from '../components/Dashboard'
import DataTableComponent from '../components/DataTableComponent'
import InputText from '../components/InputText'
import { MainContainer } from '../styles/styles'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import DialogModal from '../components/Modal'
import Header from '../components/Header'

export default function Home() {
  const [visible, setVisible] = useState<boolean>(true)
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
