import Image from 'next/image'
import { HeaderContainer, NewTransactionButton } from './styles'
import DialogModal from '../Modal'

export default function Header() {
  return (
    <HeaderContainer>
      <div className="MainContainer">
        <div className="LogoContainer">
          <Image
            src="https://in8.com.br/wp-content/themes/IN8/assets/images/logo.svg"
            alt="logo"
            width={120}
            height={50}
          />
          Finance
        </div>
        <DialogModal />
      </div>
    </HeaderContainer>
  )
}
