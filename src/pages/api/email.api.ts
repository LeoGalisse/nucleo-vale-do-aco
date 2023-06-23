import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const { name, email, phone, subject, text } = req.body

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // Replace with your SMTP host
      port: 587, // Replace with your SMTP port
      secure: false, // Use true for port 465, false for other ports
      auth: {
        user: process.env.SMTP_USERNAME, // Your SMTP username
        pass: process.env.SMTP_PASSWORD, // Your SMTP password
      },
    })

    const mailData = {
      from: email, // Sender's email
      to: process.env.SMTP_USERNAME, // Recipient's email
      subject,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color: #4CAF50;">Nova submissão do formulário de contato</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Telefone:</strong> ${phone}</p>
          <p><strong>Assunto:</strong> ${subject}</p>
          <p><strong>Mensagem:</strong> ${text}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Conteúdo:</strong> ${text}</p>
        </div>
      `,
      replyTo: email,
    }

    try {
      await transporter.sendMail(mailData)
      res.status(200).json({ status: 'Ok' })
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: 'Error sending email' })
    }
  } else {
    res.status(405).json({ error: 'We only accept POST' })
  }
}
