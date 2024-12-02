import { API_ENDPOINTS } from "./api.config";

export const loginUser = async (username: string, password: string) => {
  const response = await fetch(API_ENDPOINTS.users, {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Usuario o contraseña incorrectos');
  }

  return response.json();
};
