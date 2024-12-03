import { API_ENDPOINTS } from "./api.config";

export const loginUser = async (username: string, password: string) => {
  console.log('Enviando datos de login:', { username, password });

  const response = await fetch(API_ENDPOINTS.users, {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const responseData = await response.json();
  console.log('Datos recibidos de la API:', responseData);

  if (!response.ok) {
    throw new Error('Usuario o contraseña incorrectos');
  }

  return responseData; // Deberías devolver el username y el token
};
