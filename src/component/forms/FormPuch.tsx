import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'; 

interface FormData {
  nombre: string;
  apellido: string;
  direccion: string;
  referencia: string;
  celular: string;
  distrito: string;
}

const FormPuch = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  // envío del form
  const onSubmit = (data: FormData) => {
    console.log(data);
    Swal.fire({
      title: '¡Compra exitosa!',
      text: 'Su pedido se registró correctamente.',
      icon: 'success',
      confirmButtonText: 'Aceptar',
    }).then(() => {
      reset(); 
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          {...register('nombre', {
            required: 'Campo obligatorio',
            pattern: {
              value: /^[A-Za-z]+$/,
              message: 'Debe ingresar un valor válido',
            },
          })}
        />
        {errors.nombre && <span>{errors.nombre.message}</span>}
      </div>

      <div>
        <label>Apellido:</label>
        <input
          type="text"
          {...register('apellido', {
            required: 'Campo obligatorio',
            pattern: {
              value: /^[A-Za-z]+$/,
              message: 'Debe ingresar un valor válido',
            },
          })}
        />
        {errors.apellido && <span>{errors.apellido.message}</span>}
      </div>    

      <div>
        <label>Dirección:</label>
        <input
          type="text"
          {...register('direccion', { required: 'Campo obligatorio' })}
        />
        {errors.direccion && <span>{errors.direccion.message}</span>}
      </div>

      <div>
        <label>Referencia:</label>
        <input
          type="text"
          {...register('referencia', { required: 'Campo obligatorio' })}
        />
        {errors.referencia && <span>{errors.referencia.message}</span>}
      </div>

      <div>
        <label>Celular:</label>
        <input
          type="text"
          {...register('celular', {
            required: 'Campo obligatorio',
            pattern: {
              value: /^[0-9]{9}$/,
              message: 'Debe ingresar un número de celular válido',
            },
          })}
        />
        {errors.celular && <span>{errors.celular.message}</span>}
      </div>

      <button type="submit">Comprar</button>
    </form>
  );
};

export default FormPuch;