import { useState } from 'react';
import { validateNombre, validateApellido, validateCelular, validateDistrito, validateDireccion, validateReferencia } from "../utils/validations";

type FormData = {
  nombre: string;
  apellido: string;
  celular: string;
  distrito: string;
  direccion: string;
  referencia: string;
};

type Errors = { [key: string]: string };


const useForm = (initialData: FormData) => {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState<Errors>({});

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = e.target.value;
    setFormData(prevData => ({
      ...prevData,
      [field]: value,
    }));

    // Validación
    const validators: { [key: string]: (value: string) => string } = {
      nombre: validateNombre,
      apellido: validateApellido,
      celular: validateCelular,
      distrito: validateDistrito,
      direccion: validateDireccion,
      referencia: validateReferencia,
    };

    const errorMessage = validators[field]?.(value) || "";
    setErrors(prevErrors => ({
      ...prevErrors,
      [field]: errorMessage,
    }));
  };

  const handleSubmit = (e: React.FormEvent, onSuccess: () => void) => {
    e.preventDefault();

    // Validación general
    const newErrors = {
      nombre: validateNombre(formData.nombre),
      apellido: validateApellido(formData.apellido),
      celular: validateCelular(formData.celular),
      distrito: validateDistrito(formData.distrito),
      direccion: validateDireccion(formData.direccion),
      referencia: validateReferencia(formData.referencia),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => error === "")) {
      onSuccess();
    }
  };

  return { formData, errors, handleInputChange, handleSubmit, setFormData };
};

export default useForm;
