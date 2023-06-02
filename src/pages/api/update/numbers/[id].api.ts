/* eslint-disable camelcase */
import { prisma } from '@component/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'PUT') {
    return res.status(405).end()
  }

  const paramsSchema = z.object({
    id: z.string(),
  })

  const { id } = paramsSchema.parse(req.query)

  await prisma.goodCompanySection.findFirstOrThrow({
    where: {
      id,
    },
  })

  await prisma.goodCompanySection.update({
    where: {
      id,
    },
    data: {
      number_of_cities: Number(req.body.number_of_cities),
      number_of_ejs: Number(req.body.number_of_ejs),
      number_of_employees: Number(req.body.number_of_employees),
      number_of_institutes: Number(req.body.number_of_institutes),
    },
  })

  return res.status(200).end()
}
