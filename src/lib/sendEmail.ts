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
    html: data.textarea
  }

  await transporter.sendMail(mailOptions)
}
