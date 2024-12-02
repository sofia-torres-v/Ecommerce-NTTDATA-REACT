import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import FormLogin from '../../component/forms/FormLogin';
import { loginUser } from '../../services/api/users.services';
import { validatePassword, validateUsername } from '../../shared/utils/validations';
import { useAuth } from '../../context/AuthContext'; // Importa el custom hook
import './login.css';

const LoginView = () => {
  const { login } = useAuth(); // Usa el custom hook para obtener login
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ username?: string; password?: string }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let validationErrors = { username: '', password: '' };
    validationErrors.username = validateUsername(username);
    validationErrors.password = validatePassword(password);

    setErrors(validationErrors);

    if (validationErrors.username || validationErrors.password) return;

    try {
      const userData = await loginUser(username, password);
      login({ username: userData.username, accessToken: userData.accessToken });
      Swal.fire('¡Inicio de sesión exitoso!', '', 'success');
      
      navigate('/products');
    } catch (error) {
      Swal.fire('Error', 'Usuario o contraseña incorrectos', 'error');
    }
  };

  return (
    <div className="login-view">

      <FormLogin
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
        errors={errors}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default LoginView;
