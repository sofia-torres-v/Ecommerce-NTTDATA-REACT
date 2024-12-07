import {saveUserToLocalStorage, getUserFromLocalStorage} from "../../shared/utils/storage";
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {loginUser} from "../../services/api/authService";
import {useValidation} from "../../shared/hooks/useValidation";
import {useAuth} from "../../context/AuthContext";
import FormLogin from "../../component/forms/FormLogin";
import Swal from "sweetalert2";
import "./login.css";

const LoginView = () => {
    const {login} = useAuth();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<{username?: string; password?: string}>({});

    // Recuperar el usuario de localStorage
    useEffect(() => {
        const storedUser = getUserFromLocalStorage();
        if (storedUser) {
            login(storedUser.username, storedUser.accessToken);
        }
    }, [login, navigate]);

    useEffect(() => {
        if (username) {
            setErrors((prevErrors) => ({...prevErrors, username: ""}));
        }
        if (password) {
            setErrors((prevErrors) => ({...prevErrors, password: ""}));
        }
    }, [username, password]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const validationErrors = useValidation(username, password);
        setErrors(validationErrors);

        if (validationErrors.username || validationErrors.password) return;

        try {
            const userData = await loginUser(username, password);

            login(userData.username, userData.accessToken);
            saveUserToLocalStorage(userData);

            Swal.fire("¡Inicio de sesión exitoso!", "", "success");
            navigate("/products");
        } catch (error) {
            Swal.fire("Error", "Usuario o contraseña incorrectos", "error");
        }
    };

    return (
        <div className="login-view">
            <FormLogin
                username={username}
                password={password}
                setUsername={setUsername}
                setPassword={setPassword}
                errors={errors}
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export default LoginView;
