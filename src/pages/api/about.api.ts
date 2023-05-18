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

  const { about_section } = await prisma.quemSomosPage.findFirstOrThrow({
    select: {
      about_section: true,
    },
  })

  return res.json({ about_section })
}
