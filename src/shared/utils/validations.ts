export const validateNombre = (value: string) => {
  if (!value.trim()) {
    return "Campo obligatorio";
  }
  // regex deberia estar en un archivo aparte para reutilizarlo
  if (/[^a-zA-ZáéíóúÁÉÍÓÚ\s]/.test(value)) {
    return "Debe ingresar un valor válido";
  }
  return "";
};

export const validateApellido = (value: string) => {
  if (!value.trim()) {
    return "Campo obligatorio";
  }
  // regex deberia estar en un archivo aparte para reutilizarlo
  if (/[^a-zA-ZáéíóúÁÉÍÓÚ\s]/.test(value)) {
    return "Debe ingresar un valor válido";
  }
  return "";
};

export const validateCelular = (value: string) => {
  if (!value.trim()) {
    return "Campo obligatorio";
  }
  // regex deberia estar en un archivo aparte para reutilizarlo
  if (!/^\d+$/.test(value)) {
    return "Debe ingresar un número válido";
  }
  return "";
};

export const validateDistrito = (value: string) => {
  if (!value.trim()) {
    return "Campo obligatorio";
  }
  return "";
};

export const validateDireccion = (value: string) => {
  if (!value.trim()) {
    return "Campo obligatorio";
  }
  return "";
};

export const validateReferencia = (value: string) => {
  if (!value.trim()) {
    return "Campo obligatorio";
  }
  return "";
};
