import {FC} from "react";
import Swal from "sweetalert2";
import Select from "../select/Select";
import useDistricts from "../../shared/hooks/usePlace";
import InputComponent from "../input/InputComponent";
import useForm from "../../shared/hooks/useForm";
import "./formShop.css";
import {
    validateApellido,
    validateCelular,
    validateDireccion,
    validateDistrito,
    validateNombre,
    validateReferencia,
} from "../../shared/utils/validationSchemas";
import {useNavigate} from "react-router-dom";

const FormShop: FC = () => {
    const navigate = useNavigate();
    const {districtNames} = useDistricts();

    // objeto de validaciones
    const validations = {
        nombre: validateNombre,
        apellido: validateApellido,
        celular: validateCelular,
        distrito: validateDistrito,
        direccion: validateDireccion,
        referencia: validateReferencia,
    };

    const {formData, errors, handleInputChange, handleSubmit, setFormData} = useForm(
        {
            nombre: "",
            apellido: "",
            celular: "",
            distrito: "",
            direccion: "",
            referencia: "",
        },
        validations
    );

    const onSuccess = () => {
        console.log(formData);
        Swal.fire({
            title: "¡Pedido registrado con éxito!",
            text: "Gracias por tu compra.",
            icon: "success",
            confirmButtonText: "Aceptar",
        }).then(() => {
            setFormData({
                nombre: "",
                apellido: "",
                celular: "",
                distrito: "",
                direccion: "",
                referencia: "",
            });
            navigate("/Products");
        });
    };

    return (
        <div className="container-form">
            <h1 className="title-form">Información de Envío</h1>
            <form className="form-shop" onSubmit={(e) => handleSubmit(e, onSuccess)}>
                <div className="content-label">
                    <label className="label-form">Nombre</label>
                    <InputComponent
                        value={formData.nombre}
                        onChange={handleInputChange("nombre")}
                        placeholder="Ingrese su nombre"
                        className="form-input"
                    />
                    {errors.nombre && <div className="error">{errors.nombre}</div>}
                </div>

                <div className="content-label">
                    <label className="label-form">Apellido</label>
                    <InputComponent
                        value={formData.apellido}
                        onChange={handleInputChange("apellido")}
                        placeholder="Ingrese su apellido"
                        className="form-input"
                    />
                    {errors.apellido && <div className="error">{errors.apellido}</div>}
                </div>

                <div className="content-select-phone">
                    <div className="label-distric">
                        <label className="label-form">Distrito</label>
                        <Select
                            options={districtNames}
                            placeholder="Seleccione distrito"
                            value={formData.distrito || undefined}
                            onChange={(value: string) =>
                                handleInputChange("distrito")({target: {value}} as React.ChangeEvent<HTMLSelectElement>)
                            }
                            className="select-form"
                        />
                        {errors.distrito && <div className="error">{errors.distrito}</div>}
                    </div>

                    <div className="content-label">
                        <label className="label-form">Celular</label>
                        <InputComponent
                            value={formData.celular}
                            onChange={handleInputChange("celular")}
                            placeholder="Ingrese su celular"
                            className="form-input"
                        />
                        {errors.celular && <div className="error">{errors.celular}</div>}
                    </div>
                </div>

                <div className="content-label">
                    <label className="label-form">Dirección</label>
                    <InputComponent
                        value={formData.direccion}
                        onChange={handleInputChange("direccion")}
                        placeholder="Ingrese su dirección"
                        className="form-input"
                    />
                    {errors.direccion && <div className="error">{errors.direccion}</div>}
                </div>

                <div className="content-label">
                    <label className="label-form">Referencia</label>
                    <InputComponent
                        value={formData.referencia}
                        onChange={handleInputChange("referencia")}
                        placeholder="Referencia de ubicación"
                        className="form-input"
                    />
                    {errors.referencia && <div className="error">{errors.referencia}</div>}
                </div>

                <button className="button-form" type="submit">
                    Comprar
                </button>
            </form>
        </div>
    );
};

export default FormShop;
