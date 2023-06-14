import { prisma } from '@component/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import { compare, hash } from 'bcryptjs'
import { setCookie } from 'nookies'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const passwordHash = await hash(req.body.data.password, 6)

  console.log('PASSWORD', passwordHash)

  const { id } = await prisma.user.findUniqueOrThrow({
    where: {
      email: req.body.data.email,
    },
  })

  if (!compare(req.body.data.password, passwordHash)) {
    return res.status(401).end()
  }

  setCookie({ res }, '@nuva:userId', id, {
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  })

  return res.status(200).end()
}
