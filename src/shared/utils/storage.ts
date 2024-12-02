export interface User {
  username: string;
  accessToken: string;
}

export const saveUserToLocalStorage = (user: User) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const getUserFromLocalStorage = (): User | null => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) as User : null;
};

export const clearLocalStorage = () => {
  localStorage.removeItem('user');
};
