import Swal from 'sweetalert2';

interface FormData {
  nombre: string;
  apellido: string;
  celular: string;
  distrito: string;
  direccion: string;
  referencia: string;
}

export const showSuccessAlert = (formData: FormData, setFormData: React.Dispatch<React.SetStateAction<FormData>>) => {
  Swal.fire({
    title: '¡Pedido registrado con éxito!',
    text: 'Gracias por tu compra.',
    icon: 'success',
    confirmButtonText: 'Aceptar'
  }).then(() => {
    // Limpiar el formulario después de que el usuario haga clic en "Aceptar"
    setFormData({
      nombre: "",
      apellido: "",
      celular: "",
      distrito: "",
      direccion: "",
      referencia: "",
    });

    window.location.href = "/"; // Redirige a la página principal
  });
};
