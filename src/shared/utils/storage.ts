export interface User {
  username: string;
  accessToken: string;
}

export const saveUserToLocalStorage = (user: User) => {
  localStorage.setItem('user', JSON.stringify(user));
  console.log('Usuario guardado en localStorage:', user); 
};

export const getUserFromLocalStorage = (): User | null => {
  const user = localStorage.getItem('user');
  console.log('Usuario cargado desde localStorage:', user); 
  return user ? JSON.parse(user) as User : null;
};

export const clearLocalStorage = () => {
  localStorage.removeItem('user');
  console.log('Usuario eliminado de localStorage'); 
};

