import {
  GoodCompanyCircles,
  GoodCompanyContent,
  GoodCompanyContentItems,
  GoodCompanySection,
  GoodCompanyTitle,
} from './styles'
import Image from 'next/image'
import circle from '@component/assets/circle.svg'

interface NumbersProps {
  numbers: {
    number_of_ejs: number
    number_of_employees: number
    number_of_institutes: number
    number_of_cities: number
  }
}

export function GoodCompany({ numbers }: NumbersProps) {
  return (
    <GoodCompanySection>
      <GoodCompanyTitle>
        <span>Você está em boa companhia!</span>
      </GoodCompanyTitle>

      <GoodCompanyContent>
        <GoodCompanyContentItems>
          <span>{numbers?.number_of_ejs}</span>
          <span>Empresas Juniores</span>
          <GoodCompanyCircles>
            <Image src={circle} alt="Círculo" quality={100} />
          </GoodCompanyCircles>
        </GoodCompanyContentItems>
        <GoodCompanyContentItems>
          <span>{numbers?.number_of_employees}</span>
          <span>Empresários Juniores</span>
          <GoodCompanyCircles>
            <Image src={circle} alt="Círculo" quality={100} />
          </GoodCompanyCircles>
        </GoodCompanyContentItems>
        <GoodCompanyContentItems>
          <span>{numbers?.number_of_institutes}</span>
          <span>Instituições de Ensino Superior</span>
          <GoodCompanyCircles>
            <Image src={circle} alt="Círculo" quality={100} />
          </GoodCompanyCircles>
        </GoodCompanyContentItems>
        <GoodCompanyContentItems>
          <span>{numbers?.number_of_cities}</span>
          <span>Cidades</span>
          <GoodCompanyCircles>
            <Image src={circle} alt="Círculo" quality={100} />
          </GoodCompanyCircles>
        </GoodCompanyContentItems>
      </GoodCompanyContent>
    </GoodCompanySection>
  )
}
