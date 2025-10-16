import { useState } from "react";
import { LoginWithGoogle } from "../../firebase/services/firebase.services";
import {useNavigate} from 'react-router-dom';
import { authUserApi } from '../api/auth.api';

export const LoginPage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        console.log('Se enviaron los datos' , username, password);

        if (!username || !password) {
            alert('Por favor ingresa tu usuario y contraseña');
            return;
    }

        try {
        const credentials = { username, password};
        const result = await authUserApi(credentials);


        localStorage.setItem("token", result.token);
        navigate("/");

    } catch (error) {
        alert("Ocurrio un error al uniciar sesion" + error.message);

    }
};

    const handleLoginWithGoogle = async () => {
        const user = await LoginWithGoogle();
        console.log('Google', user);
    }

return (
    <div className="bg-light d-flex align-items-center justify-content-center vh-100">
        <div className="card shadow p-4" style= {{width:'100%', maxWidth: 400, borderRadius: '1rem'}}>
            <h3 className="text-center mb-4">Iniciar Sesión</h3>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label htmlFor="usuario" className="form-label">Usuario</label>
                    <input type="text"
                    className="form-control unsername"
                    id="usuario" placeholder="Ingresa tu usuario"
                    required onChange={event => setUsername(event.target.value)} />
                </div>

            <div className="mb-3">
                <label htmlFor="contrasena" className="form-label">Contraseña</label>
                <input type="password" className="form-control password" id="contraseña" placeholder="Ingresa tu contraseña" required onChange={event => setPassword(event.target.value)}/>
            </div>

            <div className="d-grid">
                <button type="submit" id="btn_submit" className="btn btn-primary">Ingresar</button>
            </div>
            </form>

            <hr />

            <button className= "btn btn-outline-primary" onClick={handleLoginWithGoogle}>
            Entra a Google
            </button>

            <p className="text-center mt-3 mb-0">
            <a href="#" className="text-decoration-none">¿Olvidaste tu contraseña?</a>
            </p>
        </div>
    </div>
    )
}