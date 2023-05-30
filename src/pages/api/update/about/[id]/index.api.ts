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

  let aboutSection = await prisma.quemSomosPage.findFirstOrThrow({
    where: {
      id,
    },
  })

  aboutSection = await prisma.quemSomosPage.update({
    where: {
      id,
    },
    data: {
      about_section: req.body.about,
    },
  })

  return res.json({ aboutSection })
}
