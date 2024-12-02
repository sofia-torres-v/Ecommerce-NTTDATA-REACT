import { validatePassword, validateUsername } from "../utils/validations";


export const useValidation = (username: string, password: string) => {
  const errors = {
    username: validateUsername(username),
    password: validatePassword(password),
  };
  return errors;
};


