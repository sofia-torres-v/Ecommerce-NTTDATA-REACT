// Función de redondeo que devuelve un string con porcentaje
export const roundPercentage = (value: number): string => {
  return `-${Math.round(value)}%`;
};
