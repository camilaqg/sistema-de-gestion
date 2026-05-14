import "../styles/Dashboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  return (

    <div className="dashboard-container">

      {/* HEADER */}
      <div className="dashboard-header">

        //aqui ira el logo 
        <div className="header-left"> 

          <div className="logo-circle">
            
          </div>

          <div>

            <h1>Bienvenido al sistema</h1>

            <p>
              Seleccione una opción
            </p>

          </div>

        </div>

      </div>

      {/* TARJETAS */}
      <div className="cards-grid">

        {/* FECHA ENTREGA */}
        <div
          className="dashboard-card"
          onClick={() => navigate("/fecha-entrega")}
        >

          <div className="card-icon students">
            
          </div>

          <h2>Agregar Fecha de Entrega</h2>

          <p>
            Crear fechas límite para actividades
          </p>

        </div>

        {/* LISTA TAREAS */}
        <div
          className="dashboard-card"
          onClick={() => navigate("/lista-tareas")}
        >

          <div className="card-icon teachers">
            
          </div>

          <h2>Lista de Tareas</h2>

          <p>
            Gestiona las actividades escolares
          </p>

        </div>

        {/* CALENDARIO */}
        <div
          className="dashboard-card"
          onClick={() => navigate("/calendario")}
        >

          <div className="card-icon grades">
            
          </div>

          <h2>Calendario de Actividades</h2>

          <p>
            Consulta eventos y actividades
          </p>

        </div>

      </div>

    </div>

  );
}

export default Dashboard;