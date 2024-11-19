// Rendondear el precio de porcentaje
export function roundPercentage(value: number): number {
  return Math.round(value);
}

// Capitalizar la primera letra de un string
export function capitalizeFirstLetter(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}
