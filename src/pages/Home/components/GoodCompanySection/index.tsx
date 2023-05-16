import {
  GoodCompanyCircles,
  GoodCompanyContent,
  GoodCompanyContentItems,
  GoodCompanySection,
  GoodCompanyTitle,
} from './styles'
import Image from 'next/image'
import circle from '@component/assets/circle.svg'

export function GoodCompany() {
  return (
    <GoodCompanySection>
      <GoodCompanyTitle>
        <span>Você está em boa companhia!</span>
      </GoodCompanyTitle>

      <GoodCompanyContent>
        <GoodCompanyContentItems>
          <span>17</span>
          <span>Empresas Juniores</span>
          <GoodCompanyCircles>
            <Image src={circle} alt="Círculo" quality={100} />
          </GoodCompanyCircles>
        </GoodCompanyContentItems>
        <GoodCompanyContentItems>
          <span>161</span>
          <span>Empresários Juniores</span>
          <GoodCompanyCircles>
            <Image src={circle} alt="Círculo" quality={100} />
          </GoodCompanyCircles>
        </GoodCompanyContentItems>
        <GoodCompanyContentItems>
          <span>5</span>
          <span>Instituições de Ensino Superior</span>
          <GoodCompanyCircles>
            <Image src={circle} alt="Círculo" quality={100} />
          </GoodCompanyCircles>
        </GoodCompanyContentItems>
        <GoodCompanyContentItems>
          <span>3</span>
          <span>Cidades</span>
          <GoodCompanyCircles>
            <Image src={circle} alt="Círculo" quality={100} />
          </GoodCompanyCircles>
        </GoodCompanyContentItems>
      </GoodCompanyContent>
    </GoodCompanySection>
  )
}
