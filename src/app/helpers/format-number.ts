export function formatAmount(value: number | null, decimals: number = 2) {
  if (value === null || value === undefined || value === null) {
    return '';
  }

  const numberValue = typeof value === 'string' ? parseFloat(value) : value;

  if (isNaN(numberValue)) {
    return '';
  }

  return new Intl.NumberFormat('es-ES', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(numberValue);
}
