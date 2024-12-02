type ValidationRules = {
  required?: boolean;
  pattern?: RegExp;
  customMessage?: string;
};

export const validateField = (value: string, rules: ValidationRules) => {
  if (rules.required && !value.trim()) {
    return "Campo obligatorio";
  }
  if (rules.pattern && !rules.pattern.test(value)) {
    return rules.customMessage || "Valor no válido";
  }
  return "";
};

// Funciones de validación específicas
export const validateNombre = (value: string) => {
  return validateField(value, {
    required: true,
    pattern: /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/,
    customMessage: "Debe ingresar un valor válido"
  });
};

export const validateApellido = (value: string) => {
  return validateField(value, {
    required: true,
    pattern: /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/,
    customMessage: "Debe ingresar un valor válido"
  });
};

export const validateCelular = (value: string) => {
  return validateField(value, {
    required: true,
    pattern: /^\d+$/,
    customMessage: "Debe ingresar un número válido"
  });
};

export const validateDistrito = (distrito: string) => {
  if (!distrito || distrito === "Seleccionar distrito") {
    return "Debe seleccionar un distrito"; 
  }
  return "";
};

export const validateDireccion = (value: string) => {
  return validateField(value, { required: true });
};

export const validateReferencia = (value: string) => {
  return validateField(value, { required: true });
};

// Validación para loginForm
export const validateUsername = (value: string) => {
  return validateField(value, { required: true });
};

export const validatePassword = (value: string) => {
  return validateField(value, { required: true });
};