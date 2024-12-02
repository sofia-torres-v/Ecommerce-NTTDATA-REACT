// Definir una interface para los datos de autenticación
interface LoginData {
  username: string;
  password: string;
}

// Función para manejar el inicio de sesión
async function loginUser(data: LoginData): Promise<void> {
  // URL de la API de autenticación
  const apiUrl = 'https://dummyjson.com/auth/login';

  try {
      // Realizamos la solicitud POST a la API usando fetch
      const response = await fetch(apiUrl, {
          method: 'POST', // Método HTTP
          headers: {
              'Content-Type': 'application/json', // Indicamos que el cuerpo es JSON
          },
          body: JSON.stringify(data) // Enviamos los datos en el cuerpo de la solicitud
      });

      // Verificamos si la respuesta es exitosa (status 200-299)
      if (response.ok) {
          const responseData = await response.json(); // Parseamos la respuesta JSON
          console.log('Respuesta completa de la API:', responseData); // Imprimimos la respuesta completa en consola

          // Si la respuesta tiene un token o algún otro valor
          if (responseData.token) {
              console.log('Token de autenticación:', responseData.token); // Mostramos solo el token
              // Puedes guardar el token en localStorage o cookies según lo necesites
              localStorage.setItem('authToken', responseData.token); // Ejemplo de guardar el token
          }
      } else {
          console.error('Error en la autenticación:', response.statusText);
      }
  } catch (error) {
      console.error('Error al hacer la solicitud:', error);
  }
}

// Ejemplo de uso
const loginData: LoginData = {
  username: 'usuarioEjemplo',
  password: 'contraseñaEjemplo'
};
loginUser(loginData);
