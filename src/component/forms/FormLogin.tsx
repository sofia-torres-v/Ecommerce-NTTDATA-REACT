import { useState } from 'react';
import InputComponent from "../input/InputComponent";
import Button from "../button/Button";
import './formLogin.css'
import '../input/input.css'
import { FaRegUser } from 'react-icons/fa';
import { RiLockPasswordLine } from "react-icons/ri";

const FormLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();  // Evita el refresco de la página al enviar el formulario
    // Aquí manejarás la lógica de autenticación, por ejemplo, llamando a una API
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <form className='form-login' onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div className='input-content'>
        <InputComponent
          placeholder="Usuario"
          value={username}
          onChange={handleUsernameChange}
          className='input-login'
          icon={<FaRegUser />}
          iconClassName='input-login-icon'
        />
        <InputComponent
          placeholder="Contraseña"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className='input-login'
          icon={<RiLockPasswordLine className='icon-user' />}
          iconClassName='input-login-icon'
        />
      </div>
      <div className='login-content-button'>
        <a className='link-password' href="#">¿Olvidé mi Contraseña?</a>
        <Button
          label="Iniciar sesión"
          className='button-login'
        />
      </div>
    </form>
  );
};

export default FormLogin;
