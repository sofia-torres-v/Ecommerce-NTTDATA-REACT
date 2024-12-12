// test?
export const validateNombre = (value: string) => {
  if (!value.trim()) {
    return "Campo obligatorio";
  }
  if (/[^a-zA-ZáéíóúÁÉÍÓÚ\s]/.test(value)) {
    return "Debe ingresar un valor válido";
  }
  return "";
};

export const validateApellido = (value: string) => {
  if (!value.trim()) {
    return "Campo obligatorio";
  }
  if (/[^a-zA-ZáéíóúÁÉÍÓÚ\s]/.test(value)) {
    return "Debe ingresar un valor válido";
  }
  return "";
};

export const validateCelular = (value: string) => {
  if (!value.trim()) {
    return "Campo obligatorio";
  }
  if (!/^\d+$/.test(value)) {
    return "Debe ingresar un número válido";
  }
  return "";
};

export const validateDistrito = (distrito: string): string => {
  if (!distrito || distrito === "Seleccionar distrito") {
    return "Debe seleccionar un distrito"; 
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
