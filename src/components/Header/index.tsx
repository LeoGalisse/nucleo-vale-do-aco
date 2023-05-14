import DropdownMenuDemo from './Dropdown'
import {
  HeaderContainer,
  HeaderContent,
  HeaderImage,
  HeaderLink,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderImage
        src="/images/logo.svg"
        alt="Logo do Núcleo do Vale do Aço"
        width={24}
        height={50}
      />
      <HeaderContent>
        <HeaderLink href="/">
          <p>HOME</p>
        </HeaderLink>
        <HeaderLink href="/quemsomos">
          <p>QUEM SOMOS</p>
        </HeaderLink>
        <HeaderLink href="/ejs">
          <p>EMPRESAS JUNIORES</p>
        </HeaderLink>
        <HeaderLink href="/faleconosco">
          <p>FALE CONOSCO</p>
        </HeaderLink>
      </HeaderContent>
      <DropdownMenuDemo />
    </HeaderContainer>
  )
}
