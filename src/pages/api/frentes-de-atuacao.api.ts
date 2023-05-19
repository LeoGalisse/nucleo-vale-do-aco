/* eslint-disable camelcase */
import { prisma } from '@component/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const { FrentesAtuacaoSection } = await prisma.quemSomosPage.findFirstOrThrow(
    {
      select: {
        FrentesAtuacaoSection: true,
      },
    },
  )

  return res.json({ FrentesAtuacaoSection })
}
