import {
  MejLink,
  MejCircle,
  MejContent,
  MejImage,
  MejInfo,
  MejSection,
} from './styles'
import Image from 'next/image'
import brasilNuva from '@component/assets/brasil-nuva.svg'

export function Mej() {
  return (
    <MejSection>
      <MejCircle />
      <MejInfo>
        <MejContent>
          <span>
            O MEJ (Movimento Empresa Júnior) tem como objetivo principal
            fomentar a educação empreendedora e desenvolver habilidades
            profissionais nos estudantes por meio da vivência empresarial.{' '}
          </span>
          <span>
            As EJs prestam serviços de consultoria e assessoria para empresas e
            instituições. O MEJ busca formar líderes comprometidos,
            transformando o país em um ambiente empreendedor, ético e mais
            competitivo.
          </span>
          <MejLink
            href="https://brasiljunior.org.br/conheca-o-mej"
            target="_blank"
          >
            SAIBA MAIS!
          </MejLink>
        </MejContent>
        <MejImage>
          <Image
            src={brasilNuva}
            alt="Mapa do Brasil - Núcleo de Alto Crescimento"
            quality={50}
            fill
            sizes="(max-width: 768px) 50vw, 33vw, (max-width: 1200px) 50vw, 33vw"
          />
        </MejImage>
      </MejInfo>
    </MejSection>
  )
}
