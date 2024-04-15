export function formatDate(date: string | null, locale = "pt-BR") {
  if (!date) {
    return "Presente"
  }

  return new Date(date).toLocaleDateString(locale, {
    timeZone: "UTC"
  })
}
