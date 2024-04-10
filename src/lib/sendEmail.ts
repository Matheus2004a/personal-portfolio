"use server"

import { ContactData } from "@/validations/schemaContact";
import { NextResponse } from "next/server";
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

  try {
    const result = await transporter.verify()
    console.log("SMTP result:", result)

    NextResponse.json({ success: true, message: "Email enviado com sucesso" })
  } catch (error: any) {
    NextResponse.json({ success: false, message: error.message })
    console.error(error)
    return
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      NextResponse.json({ success: false, message: error.message })
      console.error(error)
      return
    }

    console.log(info)
  })
}
