import { useState } from 'react';
import InputComponent from '../../component/input/InputComponent';
import FormLogin from '../../component/forms/FormLogin';

const LoginView = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    console.log("Enviando datos:", { username, password });

    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Datos recibidos de la API:', data);
        if (data.accessToken) {
          alert('Inicio de sesión exitoso');
          console.log('Token de acceso:', data.accessToken);
        } else {
          alert('Usuario o contraseña incorrectos');
        }
      })
      .catch((error) => {
        console.error('Error al hacer la solicitud:', error);
        alert('Error en la autenticación. Intenta nuevamente.');
      });
  };

  return (

    <div>
      <div className='container'>
        <FormLogin />
      </div>

    </div>
  );
};

export default LoginView;
