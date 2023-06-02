import Image from 'next/image'
import circle from '@component/assets/circle.svg'
import { api } from '@component/lib/axios'
import {
  GoodCompanyCircles,
  GoodCompanyContent,
  GoodCompanyContentItems,
  GoodCompanyTitle,
} from '../../../Home/components/GoodCompanySection/styles'
import { useEffect, useState } from 'react'
import { Button, FormError, GoodCompany, TextArea } from './styles'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const GoodCompanySchema = z.object({
  number_of_ejs: z.number({ coerce: true }),
  number_of_employees: z.number({ coerce: true }),
  number_of_institutes: z.number({ coerce: true }),
  number_of_cities: z.number({ coerce: true }),
})

type GoodCompanyData = z.infer<typeof GoodCompanySchema>

export function GoodCompanyUpdate() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<GoodCompanyData>({
    resolver: zodResolver(GoodCompanySchema),
  })

  const [numbers, setNumbers] = useState<GoodCompanyData>({
    number_of_ejs: 0,
    number_of_employees: 0,
    number_of_institutes: 0,
    number_of_cities: 0,
  })
  const [id, setId] = useState<string>()

  async function handleGoodCompanyRequest() {
    const response = await api.get('/numbers')

    setNumbers(response.data.data[0])
    setId(response.data.data[0].id)
  }

  async function handleGoodCompanyUpdate(data: GoodCompanyData) {
    data.number_of_cities === 0 &&
      (data.number_of_cities = numbers.number_of_cities)
    data.number_of_ejs === 0 && (data.number_of_ejs = numbers.number_of_ejs)
    data.number_of_employees === 0 &&
      (data.number_of_employees = numbers.number_of_employees)
    data.number_of_institutes === 0 &&
      (data.number_of_institutes = numbers.number_of_institutes)

    await api.put(`/update/numbers/${id}`, data)
  }

  useEffect(() => {
    handleGoodCompanyRequest()
  }, [])

  return (
    <GoodCompany onSubmit={handleSubmit(handleGoodCompanyUpdate)}>
      <GoodCompanyTitle>
        <span>Você está em boa companhia!</span>
      </GoodCompanyTitle>

      <GoodCompanyContent>
        <GoodCompanyContentItems>
          <TextArea
            defaultValue={numbers.number_of_ejs}
            {...register('number_of_ejs')}
          />
          <span>Empresas Juniores</span>
          {errors.number_of_ejs && (
            <FormError>{errors.number_of_ejs.message}</FormError>
          )}
          <GoodCompanyCircles>
            <Image src={circle} alt="Círculo" quality={10} />
          </GoodCompanyCircles>
        </GoodCompanyContentItems>
        <GoodCompanyContentItems>
          <TextArea
            defaultValue={numbers.number_of_employees}
            {...register('number_of_employees')}
          />
          <span>Empresários Juniores</span>
          {errors.number_of_employees && (
            <FormError>{errors.number_of_employees.message}</FormError>
          )}
          <GoodCompanyCircles>
            <Image src={circle} alt="Círculo" quality={10} />
          </GoodCompanyCircles>
        </GoodCompanyContentItems>
        <GoodCompanyContentItems>
          <TextArea
            defaultValue={numbers.number_of_institutes}
            {...register('number_of_institutes')}
          />
          <span>Instituições de Ensino Superior</span>
          {errors.number_of_institutes && (
            <FormError>{errors.number_of_institutes.message}</FormError>
          )}
          <GoodCompanyCircles>
            <Image src={circle} alt="Círculo" quality={10} />
          </GoodCompanyCircles>
        </GoodCompanyContentItems>
        <GoodCompanyContentItems>
          <TextArea
            defaultValue={numbers.number_of_cities}
            {...register('number_of_cities')}
          />
          <span>Cidades</span>
          {errors.number_of_cities && (
            <FormError>{errors.number_of_cities.message}</FormError>
          )}
          <GoodCompanyCircles>
            <Image src={circle} alt="Círculo" quality={10} />
          </GoodCompanyCircles>
        </GoodCompanyContentItems>
      </GoodCompanyContent>
      <Button type="submit" disabled={isSubmitting}>
        Alterar
      </Button>
    </GoodCompany>
  )
}
