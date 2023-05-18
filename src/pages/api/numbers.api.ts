import { prisma } from '@component/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const data = await prisma.goodCompanySection.findMany({
    select: {
      number_of_cities: true,
      number_of_ejs: true,
      number_of_employees: true,
      number_of_institutes: true,
    },
  })

  return res.json({ data })
}
