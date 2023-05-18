import {
  GoodCompanyCircles,
  GoodCompanyContent,
  GoodCompanyContentItems,
  GoodCompanySection,
  GoodCompanyTitle,
} from './styles'
import Image from 'next/image'
import circle from '@component/assets/circle.svg'
import { useQuery } from '@tanstack/react-query'
import { api } from '@component/lib/axios'

interface NumbersProps {
  number_of_ejs: number
  number_of_employees: number
  number_of_institutes: number
  number_of_cities: number
}

export function GoodCompany() {
  const { data: numbers } = useQuery<NumbersProps>(['numbers'], async () => {
    const response = await api.get('/numbers')

    return response.data.data[0]
  })

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
