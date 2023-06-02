/* eslint-disable camelcase */
import { prisma } from '@component/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'

interface FrentesAtuacaoSectionProps {
  id: string
  title: string
  description: string
}

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

  await prisma.frentesAtuacaoSection.findFirstOrThrow({
    where: {
      quemSomosPageId: id,
    },
  })

  req.body.FrentesAtuacaoSection.map(
    async (item: FrentesAtuacaoSectionProps) => {
      await prisma.frentesAtuacaoSection.update({
        where: {
          id: item.id,
        },
        data: {
          title: item.title,
          description: item.description,
        },
      })
    },
  )

  return res.status(200).end()
}
