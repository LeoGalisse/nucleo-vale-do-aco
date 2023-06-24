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
            Endereço:{' '}
            <a
              href="https://www.google.com/maps/place/Universidade+Federal+de+Itajub%C3%A1+-+UNIFEI+-+Campus+Theodomiro+Carneiro+Santiago/@-19.6733641,-43.2124748,15z/data=!4m2!3m1!1s0x0:0x492daa791fcc7f52?sa=X&ved=2ahUKEwiZ1O713dr_AhXVr5UCHaNGB5AQ_BJ6BAhiEAg"
              target="_blank"
              rel="noreferrer"
            >
              Rua Irmã Ivone Drumond, 200 - Distrito Industrial II Itabira - MG,
              35903-087
            </a>
          </span>
          <FooterWhereIcons>
            <a
              href="https://www.instagram.com/nucleo.valedoaco/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-instagram-line ri-lg"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/n%C3%BAcleo-vale-do-a%C3%A7o/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-linkedin-line ri-lg"></i>
            </a>
            <a
              href="https://www.google.com/maps/place/Universidade+Federal+de+Itajub%C3%A1+-+UNIFEI+-+Campus+Theodomiro+Carneiro+Santiago/@-19.6733641,-43.2124748,15z/data=!4m2!3m1!1s0x0:0x492daa791fcc7f52?sa=X&ved=2ahUKEwiZ1O713dr_AhXVr5UCHaNGB5AQ_BJ6BAhiEAg"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-road-map-line ri-lg"></i>
            </a>
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
          <a href="https://cp2ejr.com.br/" target="_blank" rel="noreferrer">
            <Image
              alt="Logo do Núcleo do Vale do Aço"
              src="/images/logo-cp2.svg"
              width={52}
              height={24}
              priority={false}
            />
          </a>
        </FooterCopyrightImage>
      </FooterCopyright>
    </FooterContainer>
  )
}
