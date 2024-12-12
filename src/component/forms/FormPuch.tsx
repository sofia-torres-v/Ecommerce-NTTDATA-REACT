// falta test
import React, { FC, useState } from "react";
import Input from "../input/InputComponent";
import Select from "../select/Select";
import './form.css';


import {
  validateNombre,
  validateApellido,
  validateCelular,
  validateDistrito,
  validateDireccion,
  validateReferencia
} from "../../shared/utils/validations";
import InputComponent from "../input/InputComponent";
import useDistricts from "../../shared/hooks/usePlace";

const Form: FC = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    celular: "",
    distrito: "",
    direccion: "",
    referencia: "",
  });

  const [errors, setErrors] = useState({
    nombre: "",
    apellido: "",
    celular: "",
    distrito: "",
    direccion: "",
    referencia: "",
  });

  const { districtNames } = useDistricts();

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = e.target.value;
    setFormData(prevData => ({
      ...prevData,
      [field]: value, 
    }));

    // validación para cada campo
    const validators: { [key: string]: (value: string) => string } = {
      nombre: validateNombre,
      apellido: validateApellido,
      celular: validateCelular,
      distrito: validateDistrito,
      direccion: validateDireccion,
      referencia: validateReferencia,
    };

    // Validamos y actualizamos el error del campo
    const errorMessage = validators[field]?.(value) || "";
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: errorMessage, 
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
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
      console.log(formData);
      alert("¡Pedido registrado con éxito!");
    
      setFormData({
        nombre: "",
        apellido: "",
        celular: "",
        distrito: "",
        direccion: "",
        referencia: "",
      });
    }
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div>
        <label className="label-form">Nombre</label>
        <Input
          value={formData.nombre}
          onChange={handleInputChange("nombre")}
          placeholder="Ingrese su nombre"
          className="form-input"
        />
        {errors.nombre && <div className="error">{errors.nombre}</div>}
      </div>

      <div>
        <label className="label-form">Apellido</label>
        <Input
          value={formData.apellido}
          onChange={handleInputChange("apellido")}
          placeholder="Ingrese su apellido"
          className="form-input"
        />
        {errors.apellido && <div className="error">{errors.apellido}</div>}
      </div>

      <div className="label-distric">
        <label className="label-form">Distrito</label>
        <Select
         options={districtNames}
          placeholder="Seleccione distrito"
          value={formData.distrito || undefined }
          onChange={(value: string) => handleInputChange("distrito")({ target: { value } } as React.ChangeEvent<HTMLSelectElement>)} 
          className="form-select"
        />
        {errors.distrito && <div className="error">{errors.distrito}</div>}
      </div>

      <div>
        <label className="label-form">Celular</label>
        <Input
          value={formData.celular}
          onChange={handleInputChange("celular")}
          placeholder="Ingrese su celular"
          className="form-input"
        />
        {errors.celular && <div className="error">{errors.celular}</div>}
      </div>

      <div>
        <label className="label-form">Dirección</label>
        <Input
          value={formData.direccion}
          onChange={handleInputChange("direccion")}
          placeholder="Ingrese su dirección"
          className="form-input"
        />
        {errors.direccion && <div className="error">{errors.direccion}</div>}
      </div>

      <div>
        <label className="label-form">Referencia</label>
        <InputComponent
          value={formData.referencia}
          onChange={handleInputChange("referencia")}
          placeholder="Referencia de ubicación"
          className="form-input"
        />
        {errors.referencia && <div className="error">{errors.referencia}</div>}
      </div>

      <button className="button-form" type="submit">Comprar</button>
    </form>
  );
};

export default Form;
