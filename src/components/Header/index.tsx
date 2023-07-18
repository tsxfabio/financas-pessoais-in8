import Image from 'next/image'
import { HeaderContainer, NewTransactionButton } from './styles'

export default function Header() {
  return (
    <HeaderContainer>
      <div>
        <span>
          <Image
            src="https://in8.com.br/wp-content/themes/IN8/assets/images/logo.svg"
            alt="logo"
            width={120}
            height={50}
          />
          Finance
        </span>
        <NewTransactionButton>Nova Transação</NewTransactionButton>
      </div>
    </HeaderContainer>
  )
}
