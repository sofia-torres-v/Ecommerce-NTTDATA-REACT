import React, { FC, useState } from "react";
import Input from "../input/Input";
import './form.css'

const Form: FC = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [distrito, setDistrito] = useState("");
  const [direccion, setDireccion] = useState("");
  const [referencia, setReferencia] = useState("");
  const [celular, setCelular] = useState("");


  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => {
    return (value: string) => setter(value);
  };

  return (
    <>
      <form className="container">
        <div>
          <label className="label-form">Nombre</label>
          <Input
            value={nombre}
            onChange={handleInputChange(setNombre)}
            placeholder="Ingrese su nombre"
            className="form-input"
          />
        </div>
        
        <div>
          <label className="label-form">Apellido</label>
          <Input
            value={apellido}
            onChange={handleInputChange(setApellido)}
            placeholder="Ingrese su apellido"
            className="form-input"
          />
        </div>

        <div>
          <label className="label-form">Distrito</label>
          <Input
            value={distrito}
            onChange={handleInputChange(setDistrito)}
            placeholder="Ingrese su distrito"
            className="form-input"
          />
        </div>

        <div>
          <label className="label-form">Dirección</label>
          <Input
            value={direccion}
            onChange={handleInputChange(setDireccion)}
            placeholder="Ingrese su dirección"
            className="form-input"
          />
        </div>

        <div>
          <label className="label-form">Referencia</label>
          <Input
            value={referencia}
            onChange={handleInputChange(setReferencia)}
            placeholder="Referencia de ubicación"
            className="form-input"
          />
        </div>

        <div>
          <label className="label-form">Celular</label>
          <Input
            value={celular}
            onChange={handleInputChange(setCelular)}
            placeholder="Ingrese su celular"
            className="form-input"
          />
        </div>

        <button  className="button-form" type="submit">Comprar</button>
      </form>
    </>
  );
};

export default Form;
