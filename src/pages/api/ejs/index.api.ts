import { prisma } from '@component/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

interface ImageProps {
  id: string
  image: string
  title: string
  url: String
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const data = await prisma.ejsSection.findMany({
    select: {
      id: true,
      image: true,
      title: true,
      url: true,
    },
    orderBy: {
      title: 'asc',
    },
  })

  const base64Flag = 'data:image/jpeg;base64,'
  const img: ImageProps[] = []

  data.forEach((images) => {
    let binary = ''

    const bytes = [].slice.call(new Uint8Array(images.image.buffer))

    bytes.forEach((b) => (binary += String.fromCharCode(b)))

    const newData = btoa(binary)

    img.push({
      id: images.id,
      image: base64Flag + newData,
      title: images.title,
      url: images.url,
    })
  })

  return res.json({ img })
}
