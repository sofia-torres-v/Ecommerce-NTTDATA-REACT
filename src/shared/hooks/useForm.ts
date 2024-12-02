import { useState } from 'react';

type FormData = { [key: string]: string };
type Errors = { [key: string]: string };
type ValidationRules = { [key: string]: (value: string) => string };

const useForm = (
  initialData: FormData,
  validations: ValidationRules
) => {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState<Errors>({});

  const handleInputChange = (field: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const value = e.target.value;
    setFormData(prevData => ({
      ...prevData,
      [field]: value,
    }));

    // Validación
    const errorMessage = validations[field]?.(value) || "";
    setErrors(prevErrors => ({
      ...prevErrors,
      [field]: errorMessage,
    }));
  };

  const handleSubmit = (e: React.FormEvent, onSuccess: () => void) => {
    e.preventDefault();

    // Validación general
    const newErrors = Object.keys(formData).reduce((acc, field) => {
      acc[field] = validations[field]?.(formData[field]) || "";
      return acc;
    }, {} as Errors);

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => error === "")) {
      onSuccess();
    }
  };

  return { formData, errors, handleInputChange, handleSubmit, setFormData };
};

export default useForm;
