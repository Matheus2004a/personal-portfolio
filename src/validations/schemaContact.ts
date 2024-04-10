"use client"

import { z } from "zod";

export const schemaContact = z.object({
  name: z.string().min(1, { message: "Nome é obrigatório" }),
  email: z.string()
    .min(1, { message: "Email é obrigatório" })
    .email({ message: "Email inválido" }),
  subject: z.string()
    .min(1, { message: "Assunto é obrigatório" })
    .max(20, { message: "Assunto deve ter 20 caracteres no máximo" }),
  textarea: z.string()
    .min(1, { message: "Mensagem é obrigatória" })
    .min(20, { message: "Mensagem deve ter 20 caracteres no mínimo" })
    .max(200, { message: "Mensagem deve ter 200 caracteres no máximo" }),
});


export type ContactData = z.infer<typeof schemaContact>
