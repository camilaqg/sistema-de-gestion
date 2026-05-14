import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css";
import logo from "../assets/logo.png";

function Register() {

  // STATES
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [confirmar, setConfirmar] = useState("");

  const navigate = useNavigate();

  // FUNCION REGISTRO
  const handleRegister = () => {

    // VALIDAR CAMPOS VACIOS
    if (
      nombre === "" ||
      correo === "" ||
      usuario === "" ||
      password === "" ||
      confirmar === ""
    ) {

      alert(
        "Debes completar todos los campos para que tu registro sea válido"
      );

      return;
    }

    // VALIDAR CONTRASEÑAS
    if (password !== confirmar) {

      alert("Las contraseñas no coinciden");

      return;
    }

    // CREAR OBJETO USUARIO
    const usuarioData = {

      nombre: nombre,
      correo: correo,
      usuario: usuario,
      password: password

    };

    // GUARDAR EN LOCAL STORAGE
    localStorage.setItem(
      "usuario",
      JSON.stringify(usuarioData)
    );

    // MENSAJE
    alert("Registro exitoso");

    // REDIRECCIONAR AL LOGIN
    navigate("/login");

  };

  return (

    <div className="register-container">

      {/* PANEL IZQUIERDO */}
      <div className="left-panel">

        <div className="logo-card">

          <img
            src={logo}
            alt="Logo"
            className="logo-img"
          />

          <h2>Sistema Académico</h2>

          <p>GESTIÓN ESTUDIANTIL</p>

        </div>

      </div>

      {/* PANEL DERECHO */}
      <div className="right-panel">

        <div className="register-box">

          <h1>Crear cuenta</h1>

          {/* NOMBRE */}
          <div className="input-group">

            <label>Nombre completo</label>

            <input
              type="text"
              placeholder="Ingrese su nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />

          </div>

          {/* CORREO */}
          <div className="input-group">

            <label>Correo</label>

            <input
              type="email"
              placeholder="Ingrese su correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />

          </div>

          {/* USUARIO */}
          <div className="input-group">

            <label>Usuario</label>

            <input
              type="text"
              placeholder="Ingrese su usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />

          </div>

          {/* PASSWORD */}
          <div className="input-group">

            <label>Contraseña</label>

            <input
              type="password"
              placeholder="Ingrese su contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <span className="password-text">
              *Mínimo 6 caracteres*
            </span>

          </div>

          {/* CONFIRMAR PASSWORD */}
          <div className="input-group">

            <label>Confirmar contraseña</label>

            <input
              type="password"
              placeholder="Repita su contraseña"
              value={confirmar}
              onChange={(e) => setConfirmar(e.target.value)}
            />

          </div>

          {/* BOTON */}
          <button
            className="btn-register"
            onClick={handleRegister}
          >
            Registrarse
          </button>

        </div>

      </div>

    </div>

  );
}

export default Register;