import Image from 'next/image'
import {
  FooterContainer,
  FooterContent,
  FooterCopyright,
  FooterCopyrightImage,
  FooterLogo,
  FooterNav,
  FooterTitle,
  FooterWhere,
  FooterWhereIcons,
} from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterNav>
          <FooterTitle>Navegação</FooterTitle>
          <a href="/">
            <span>Home</span>
          </a>
          <a href="/quemsomos">
            <span>Quem somos</span>
          </a>
          <a href="/ejs">
            <span>Empresas Juniores</span>
          </a>
          <a href="/faleconosco">
            <span>Fale Conosco</span>
          </a>
        </FooterNav>
        <FooterWhere>
          <FooterTitle>Onde nos encontrar</FooterTitle>
          <span>
            Endereço: Rua Irmã Ivone Drumond, 200 - Distrito Industrial II
            Itabira - MG, 35903-087
          </span>
          <FooterWhereIcons>
            <i className="ri-instagram-line ri-lg"></i>
            <i className="ri-linkedin-line ri-lg"></i>
            <i className="ri-road-map-line ri-lg"></i>
          </FooterWhereIcons>
        </FooterWhere>
        <FooterLogo>
          <Image
            id="logo-nuva"
            alt="Logo do Núcleo do Vale do Aço"
            src="/images/logo-nuva-menor.svg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            width={94}
            height={195}
            priority={false}
          />
          <Image
            id="nuva"
            alt="Núcleo do Vale do Aço"
            src="/images/nuva-menor.svg"
            width={243.36}
            height={218.4}
          />
        </FooterLogo>
      </FooterContent>

      <FooterCopyright>
        <span>COPYRIGHT 2023. ALL RIGHTS RESERVED.</span>
        <FooterCopyrightImage>
          DEVELOPED BY{' '}
          <Image
            alt="Logo do Núcleo do Vale do Aço"
            src="/images/logo-cp2.svg"
            width={52}
            height={24}
            priority={false}
          />
        </FooterCopyrightImage>
      </FooterCopyright>
    </FooterContainer>
  )
}
