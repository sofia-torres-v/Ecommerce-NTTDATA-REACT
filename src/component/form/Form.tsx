import React, { FC, useState } from "react";
import Input from "../input/Input";
import Select from "../select/Select";
import './form.css';
import { usePlaces } from "../../shared/hooks/usePlace";
import {
  validateNombre,
  validateApellido,
  validateCelular,
  validateDistrito,
  validateDireccion,
  validateReferencia
} from "../../shared/utils/validations";

const Form: FC = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [distrito, setDistrito] = useState("");
  const [direccion, setDireccion] = useState("");
  const [referencia, setReferencia] = useState("");
  const [celular, setCelular] = useState("");

  const [errors, setErrors] = useState({
    nombre: "",
    apellido: "",
    celular: "",
    direccion: "",
    referencia: "",
    distrito: "",
  });

  const { districts } = usePlaces();

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>, field: string) => {
    return (value: string) => {
      setter(value);

      let errorMessage = "";
      switch (field) {
        case "nombre":
          errorMessage = validateNombre(value);
          break;
        case "apellido":
          errorMessage = validateApellido(value);
          break;
        case "celular":
          errorMessage = validateCelular(value);
          break;
        case "distrito":
          errorMessage = validateDistrito(value);
          break;
        case "direccion":
          errorMessage = validateDireccion(value);
          break;
        case "referencia":
          errorMessage = validateReferencia(value);
          break;
      }

      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: errorMessage,
      }));
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validación general
    const newErrors = {
      nombre: validateNombre(nombre),
      apellido: validateApellido(apellido),
      celular: validateCelular(celular),
      distrito: validateDistrito(distrito),
      direccion: validateDireccion(direccion),
      referencia: validateReferencia(referencia),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => error === "")) {
      const formData = {
        nombre,
        apellido,
        celular,
        direccion,
        referencia,
        distrito,
      };
      console.log(formData);

      alert("¡Pedido registrado con éxito!");

      // Limpiar formulario después de enviar
      setNombre("");
      setApellido("");
      setCelular("");
      setDistrito("");
      setDireccion("");
      setReferencia("");
    }
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div>
        <label className="label-form">Nombre</label>
        <Input
          value={nombre}
          onChange={handleInputChange(setNombre, "nombre")}
          placeholder="Ingrese su nombre"
          className="form-input"
        />
        {errors.nombre && <div className="error">{errors.nombre}</div>}
      </div>

      <div>
        <label className="label-form">Apellido</label>
        <Input
          value={apellido}
          onChange={handleInputChange(setApellido, "apellido")}
          placeholder="Ingrese su apellido"
          className="form-input"
        />
        {errors.apellido && <div className="error">{errors.apellido}</div>}
      </div>

      <div className="label-distric">
        <label className="label-form">Distrito</label>
        <Select
          options={districts.map((d) => d.name)}
          value={distrito}
          onChange={setDistrito}
          className="form-select"
        />
        {errors.distrito && <div className="error">{errors.distrito}</div>}
      </div>

      <div>
        <label className="label-form">Celular</label>
        <Input
          value={celular}
          onChange={handleInputChange(setCelular, "celular")}
          placeholder="Ingrese su celular"
          className="form-input"
        />
        {errors.celular && <div className="error">{errors.celular}</div>}
      </div>

      <div>
        <label className="label-form">Dirección</label>
        <Input
          value={direccion}
          onChange={handleInputChange(setDireccion, "direccion")}
          placeholder="Ingrese su dirección"
          className="form-input"
        />
        {errors.direccion && <div className="error">{errors.direccion}</div>}
      </div>

      <div>
        <label className="label-form">Referencia</label>
        <Input
          value={referencia}
          onChange={handleInputChange(setReferencia, "referencia")}
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
