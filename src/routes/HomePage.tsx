import TaskForm from "../components/TaskForm";
import type { TaskData } from "../components/TaskForm";

const HomePage = () => {

  const handleAddTask = (
    task: TaskData
  ) => {

    console.log(task);

  };

  return (

    <div className="
      min-h-screen
      flex
      justify-center
      items-center
      bg-gray-100
    ">

      <TaskForm
        onAddTask={handleAddTask}
      />

    </div>
  );
};

export default HomePage;