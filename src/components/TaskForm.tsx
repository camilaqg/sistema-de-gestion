import { useState } from "react";
import "./TaskForm.css";

interface TaskFormProps {
  onAddTask: (task: TaskData) => void;
}

export interface TaskData {
  title: string;
  description: string;
  priority: string;
}

const TaskForm = ({ onAddTask }: TaskFormProps) => {
  const [task, setTask] = useState<TaskData>({
    title: "",
    description: "",
    priority: "media",
  });

  const [errors, setErrors] = useState({
    title: "",
    description: "",
  });

  // Manejar cambios
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  // Validaciones
  const validateForm = () => {
    let valid = true;
    const newErrors = {
      title: "",
      description: "",
    };

    if (!task.title.trim()) {
      newErrors.title = "El título es obligatorio";
      valid = false;
    }

    if (!task.description.trim()) {
      newErrors.description = "La descripción es obligatoria";
      valid = false;
    }

    setErrors(newErrors);

    return valid;
  };

  // Enviar formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    onAddTask(task);

    // Limpiar formulario
    setTask({
      title: "",
      description: "",
      priority: "media",
    });
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2 className="task-title">
        Crear Nueva Tarea
      </h2>

      {/* TÍTULO */}
      <div className="form-group">
        <label>Título</label>

        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          placeholder="Ingrese el título"
        />

        {errors.title && (
          <p className="error">
            {errors.title}
          </p>
        )}
      </div>

      {/* DESCRIPCIÓN */}
      <div className="form-group">
        <label>Descripción</label>

        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          placeholder="Ingrese la descripción"
        />

        {errors.description && (
          <p className="error">
            {errors.description}
          </p>
        )}
      </div>

      {/* PRIORIDAD */}
      <div className="form-group">
        <label>Prioridad</label>

        <select
          name="priority"
          value={task.priority}
          onChange={handleChange}
        >
          <option value="alta">Alta</option>
          <option value="media">Media</option>
          <option value="baja">Baja</option>
        </select>
      </div>

      <button type="submit">
        Guardar Tarea
      </button>
    </form>
  );
};

export default TaskForm;