import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/Login.css";

function Login() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = () => {

        // validacion de los campos
        if (user === "" || password === "") {
            alert("Por favor, complete todos los campos");
            return;
        }

        //validacion de credenciales
        if (user === "admin" && password === "admin") {
            alert("ingreso exitoso");
            navigate("/dashboard");
        } else {
            alert("usuario o contraseña incorrectos");
        }
    };

    return (
  <div className="login-container">
    <div className="login-box">
      <h2>Inicio de sesión</h2>

      <input
        className="input"
        placeholder="usuario"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />

      <input
        className="input"
        type="password"
        placeholder="contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="btn" onClick={handleLogin}>
        Ingresar
      </button>

      <p className="register-text">
        ¿No tienes cuenta?
        <button className="link-btn" onClick={() => navigate("/registro")}>
          Regístrate
        </button>
      </p>
    </div>
  </div>
);

}
export default Login;   