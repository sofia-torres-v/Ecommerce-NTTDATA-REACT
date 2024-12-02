// src/views/LoginView.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import FormLogin from '../../component/forms/FormLogin';
import { useAuth } from '../../context/AuthContext';
import './login.css';
import { loginUser } from '../../services/api/authService';
import { saveUserToLocalStorage } from '../../shared/utils/storage';
import { useValidation } from '../../shared/hooks/useValidation';

const LoginView = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ username?: string; password?: string }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = useValidation(username, password);
    setErrors(validationErrors);

    if (validationErrors.username || validationErrors.password) return;

    try {
      const userData = await loginUser(username, password);
      login({ username: userData.username, accessToken: userData.accessToken });
      saveUserToLocalStorage(userData);
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
