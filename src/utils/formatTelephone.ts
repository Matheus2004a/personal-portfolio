export function formatTelephone(telephone: string) {
  // Remove todos os caracteres que não são dígitos
  const telephoneWithNoDigits = telephone.replace(/\D/g, '');

  const telephoneFormatted = telephoneWithNoDigits.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3');
  return telephoneFormatted
}

export function removeMaskPhone(value: string) {
  return value.replace(/[()-\s]/g, '');
};
