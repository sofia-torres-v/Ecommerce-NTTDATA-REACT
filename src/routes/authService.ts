// src/services/authService.ts
export const loginUser = async (username: string, password: string) => {
  const response = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error('Error en la autenticación.');
  }

  return response.json();
};
