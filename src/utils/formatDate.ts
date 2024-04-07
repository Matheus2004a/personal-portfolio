export function formatDate(date: Date, locale = "pt-BR") {
  if (!date) {
    return "Presente"
  }

  return new Date(date).toLocaleDateString(locale, {
    timeZone: "UTC"
  })
}
