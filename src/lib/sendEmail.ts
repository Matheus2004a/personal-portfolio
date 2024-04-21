"use server"

import { ContactData } from "@/validations/schemaContact";
import nodemailer from "nodemailer";

export async function sendEmail(data: ContactData) {
  const transporter = nodemailer.createTransport({
    service: process.env.SMTP_SERVICE,
    host: process.env.SMTP_HOST,
    secure: true,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD
    }
  });

  const mailOptions = {
    from: data.email,
    to: process.env.SMTP_EMAIL,
    subject: data.subject,
    html: `
    <body>
      <h1 class="text-2xl font-bold mb-4">Assunto do E-mail</h1>
      <p class="mb-6">Olá, você recebeu uma mensagem de:</p>
      <p><strong>Nome:</strong><br /> ${data.name}</p>
      <hr />
      <p><strong>Email:</strong><br /> ${data.email}</p>
      <hr />
      <p><strong>Telefone:</strong><br /> ${data.telephone}</p>
      <hr />
      <p><strong>Assunto:</strong><br /> ${data.subject}</p>
      <hr />
      <p><strong>Mensagem:</strong><br /> ${data.textarea}</p>
      <hr />
      <h3>Muito obrigado pelo contato, vou tentar respondê-lo o mais rápido possível!</h3>
    </body>
    `
  }

  await transporter.sendMail(mailOptions)
}
