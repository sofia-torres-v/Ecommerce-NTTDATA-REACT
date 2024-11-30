export const roundPercentage = (value: number): string => {
  const roundedValue = Math.round(value); // Usamos Math.round() para valores positivos y negativos
  return `${roundedValue}%`;
};
