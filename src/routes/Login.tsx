import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/Login.css";
import logo from "../assets/logo.png";

function Login() {

  // STATES
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // FUNCION LOGIN
  const handleLogin = () => {

    // VALIDAR CAMPOS VACIOS
    if (user === "" || password === "") {

      alert("Por favor complete todos los campos");

      return;
    }

    // OBTENER USUARIO GUARDADO
    const usuarioGuardado = JSON.parse(
      localStorage.getItem("usuario") || "{}"
    );
    // VALIDAR SI EXISTE USUARIO
    if (!usuarioGuardado) {

      alert("No hay usuarios registrados");

      return;
    }

    // VALIDAR CREDENCIALES
    if (
      user === usuarioGuardado.usuario &&
      password === usuarioGuardado.password
    ) {

      alert("Ingreso exitoso");

      navigate("/dashboard");

    } else {

      alert("Usuario o contraseña incorrectos");

    }

  };

  return (

    <div className="login-container">

      {/* PANEL IZQUIERDO */}
      <div className="left-panel">

        <div className="logo-card">

          <img
            src={logo}
            alt="Logo Sistema"
            className="logo-img"
          />

          <h2>Sistema Académico</h2>

          <p>GESTIÓN ESTUDIANTIL</p>

        </div>

      </div>

      {/* PANEL DERECHO */}
      <div className="right-panel">

        <div className="login-box">

          <h1>Ingresar al sistema</h1>

          {/* USUARIO */}
          <div className="input-group">

            <label>Usuario</label>

            <input
              type="text"
              placeholder="Escriba su usuario"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />

          </div>

          {/* CONTRASEÑA */}
          <div className="input-group">

            <label>Contraseña</label>

            <input
              type="password"
              placeholder="Escriba su contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

          </div>

          {/* BOTON LOGIN */}
          <button
            className="btn-login"
            onClick={handleLogin}
          >
            Ingresar
          </button>

          {/* REGISTRO */}
          <button
            className="forgot-btn"
            onClick={() => navigate("/registro")}
          >
            Registrarse
          </button>

        </div>

      </div>

    </div>

  );
}

export default Login;