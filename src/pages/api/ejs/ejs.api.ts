import { NextApiHandler, NextApiRequest } from 'next'
import formidable from 'formidable'
import fs from 'fs/promises'
import { prisma } from '@component/lib/prisma'
import path from 'path'

export const config = {
  api: {
    bodyParser: false,
  },
}

const readFile = (
  req: NextApiRequest,
  saveLocally?: boolean,
): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  const options: formidable.Options = {}

  if (saveLocally) {
    options.uploadDir = path.join(process.cwd(), '/public/images')
    options.filename = (name, ext, path, form) => {
      return Date.now().toString() + '_' + path.originalFilename
    }
  }

  options.maxFileSize = 4000 * 1024 * 1024
  const form = formidable(options)

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err)

      resolve({ fields, files })
    })
  })
}

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const data = await readFile(req, false)

  const image = await fs.readFile(data.files.myImage.filepath)

  await prisma.ejsSection.create({
    data: {
      image,
      title: String(data.fields.title),
      url: String(data.fields.url),
    },
  })

  return res.status(201).end()
}

export default handler
