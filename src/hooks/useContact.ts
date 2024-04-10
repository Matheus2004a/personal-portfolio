import { sendEmail } from "@/lib/sendEmail";
import { ContactData, schemaContact } from "@/validations/schemaContact";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function useContact() {
  const form = useForm<ContactData>({
    resolver: zodResolver(schemaContact)
  })

  async function onSubmit(values: ContactData) {
    try {
      await sendEmail(values)
      toast.success("Email enviado com sucesso")
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  return {
    form,
    errors: form.formState.errors,
    onSubmit
  }
}
