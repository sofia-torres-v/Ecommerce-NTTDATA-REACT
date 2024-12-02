import React from 'react';
import InputComponent from "../input/InputComponent";
import Button from "../button/Button";
import './formLogin.css';
import '../input/input.css';
import { FaRegUser } from 'react-icons/fa';
import { RiLockPasswordLine } from "react-icons/ri";

interface FormLoginProps {
  username: string;
  password: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  errors: { username?: string; password?: string };
  onSubmit: (e: React.FormEvent) => void;
}

const FormLogin: React.FC<FormLoginProps> = ({ username, password, setUsername, setPassword, errors, onSubmit }) => {
  return (

    <form className="form-login" onSubmit={onSubmit}>
      <h1 className='title-form-login'>Iniciar Sesión</h1>
      <div className="input-content">
        <div className="content-label-login">
          <InputComponent
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-login"
            icon={<FaRegUser />}
            iconClassName="input-login-icon"
          />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>

        <div className="content-label-login">
          <InputComponent
            placeholder="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-login"
            icon={<RiLockPasswordLine className="icon-user" />}
            iconClassName="input-login-icon"
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
      </div>

      <div className="login-content-button">
        <a className="link-password" href="#">¿Olvid Contraseña?</a>
        <Button label="Iniciar sesión" className="button-login" />
      </div>
    </form>

  );
};

export default FormLogin;
