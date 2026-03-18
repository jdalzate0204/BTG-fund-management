/**
 * Format amount
 * Converts a number into a localized string with a fixed number of decimals.
 * Handles null, undefined, or invalid values by returning an empty string.
 *
 * @param value Number to format, can be null
 * @param decimals Number of decimals to display (default 2)
 * @return Formatted number string or empty string if input is invalid
 */
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
