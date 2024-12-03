export interface User {
  username: string;
  accessToken: string;
}

export const saveUserToLocalStorage = (user: User) => {
  console.log('Usuario guardado en localStorage:', user); 
};

export const getUserFromLocalStorage = (): User | null => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) as User : null;
};

export const clearLocalStorage = () => {
  console.log('Usuario eliminado de localStorage'); 
};

