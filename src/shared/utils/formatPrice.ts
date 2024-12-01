export const roundPercentage = (value: number): string => {
  const roundedValue = Math.round(value);
  return `${roundedValue}%`;
};
