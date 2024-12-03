// loginUser.ts

import { API_ENDPOINTS } from "./api.config";

export const loginUser = async (username: string, password: string) => {
  console.log('Enviando datos de login:', { username, password });  // Verifica los datos antes de hacer la llamada

  const response = await fetch(API_ENDPOINTS.users, {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const responseData = await response.json();
  console.log('Datos recibidos de la API:', responseData);  // Verifica los datos devueltos por la API

  if (!response.ok) {
    throw new Error('Usuario o contraseña incorrectos');
  }

  // Guardar el token y el username
  return { token: responseData.accessToken, username };
};
