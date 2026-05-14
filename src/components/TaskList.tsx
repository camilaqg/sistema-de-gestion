import { useState } from "react";
import "../styles/TaskList.css";


function TaskList() {
 
  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState<string[]>([]); //tasks almacena y setTasks actualiza

  const addTask = () => {

   
    if (task === "") {

      alert("Debe escribir una tarea");

      return;
    }

    // tasks para copiar las tareas y task para agregar una nueva
   
    setTasks([...tasks, task]);

    setTask("");

  };


  const deleteTask = (index: number) => {

    //aqui se recorren las tareas y se elinima la tarea seleccionada
    const nuevasTareas = tasks.filter(

      // _ lo usamos para representar la tarea, i es la posicion en la que se encuentra la tarea
      (_, i) => i !== index

    );

    // aqui se Actualiza la lista sin la tarea eliminada
    setTasks(nuevasTareas);

  };

  return (

    <div className="task-container">

      {/* TITULO PRINCIPAL */}
      <h1>Lista de Tareas</h1>


      {/* CONTENEDOR INPUT + BOTON */}
      <div className="task-input-container">

        {/* INPUT */}
        <input

          type="text"

          placeholder="Ingrese una tarea"

          // se conecta el input con el estado
          value={task}

          // se actualiza el estado mientras escribe
          onChange={(e) => setTask(e.target.value)}

        />

        {/* BOTON AGREGAR */}
        <button onClick={addTask}>

          Agregar

        </button>

      </div>

      {/* CONTENEDOR DE LA LISTA */}
      <div className="task-list">

        {/* RECORRE TAREAS */}
        {tasks.map((tarea, index) => (

          <div
            className="task-card"
            key={index}
          >

            {/* TEXTO DE LA TAREA */}
            <span>{tarea}</span>

            {/* PARA EL BOTON DE ELIMINAR */}
            <button
              onClick={() => deleteTask(index)}
            >

              Eliminar

            </button>

          </div>

        ))}

      </div>

    </div>

  );
}

export default TaskList;
