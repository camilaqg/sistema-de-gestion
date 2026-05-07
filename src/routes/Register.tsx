import { useNavigate } from "react-router-dom";
import "../styles/Register.css";


function Register() {
  const navigate = useNavigate();

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Registro</h2>

        <button onClick={() => navigate("/")}>Ir a Login</button>
        
        <input className="input" placeholder="Nombre" />
        <input className="input" placeholder="Correo" />
        <input className="input" type="password" placeholder="Contraseña" />
        <button className="btn">Registrarse</button>
      </div>
    </div>
  );
}

export default Register;