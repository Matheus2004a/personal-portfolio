"use client"

import { BadgeDemo } from "@/components/badge";
import { Button } from "@/components/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useContact from "@/hooks/useContact";

export function Contact() {
  const { form, errors, onSubmit } = useContact()

  return (
    <section className="max-w-5xl w-full grid gap-12 py-16 md:py-20 2xl:py-24">
      <div className="grid place-items-center gap-4">
        <BadgeDemo className="w-fit">
          <h2>Get in touch</h2>
        </BadgeDemo>
        <p>What’s next? Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect.</p>
      </div>

      <Form {...form}>
        <div className="flex flex-col justify-center items-center gap-5">
          <h2>Entre em contato comigo</h2>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-1/2 space-y-8">
            <FormField
              control={form.control}
              name="name"
              defaultValue=""
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite seu nome" {...field} />
                  </FormControl>
                  <FormMessage>{errors.name?.message}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              defaultValue=""
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite seu email" {...field} />
                  </FormControl>
                  <FormMessage>{errors.email?.message}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              defaultValue=""
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Assunto</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite o tipo de serviço que deseja" {...field} />
                  </FormControl>
                  <FormMessage>{errors.subject?.message}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="textarea"
              defaultValue=""
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mensagem</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Digite sua mensagem"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage>{errors.textarea?.message}</FormMessage>
                </FormItem>
              )}
            />
            <Button type="submit">Enviar</Button>
          </form>
        </div>
      </Form>
    </section>
  )
}
