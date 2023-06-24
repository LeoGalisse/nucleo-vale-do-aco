/* eslint-disable camelcase */
import { prisma } from '@component/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'DELETE') {
    return res.status(405).end()
  }

  const paramsSchema = z.object({
    id: z.string(),
  })

  const { id } = paramsSchema.parse(req.query)

  await prisma.ejsSection.findFirstOrThrow({
    where: {
      id,
    },
  })

  await prisma.ejsSection.delete({
    where: {
      id,
    },
  })

  return res.status(200).end()
}
