import { InputText as InputComponent } from 'primereact/inputtext'
import { InputTextButton, InputTextContainer } from './styles'
import { MagnifyingGlass } from '@phosphor-icons/react'

export default function InputText() {
  return (
    <InputTextContainer>
      <InputComponent
        className="inputComponent"
        placeholder="Busque por transações"
      />
      <InputTextButton>
        <MagnifyingGlass size={16} />
        <span>Buscar</span>
      </InputTextButton>
    </InputTextContainer>
  )
}
