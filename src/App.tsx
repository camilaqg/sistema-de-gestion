import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./routes/AppLayout";
import HomePage from "./routes/HomePage";
import AboutPage from "./routes/AboutPage";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Dashboard from "./routes/Dashboard";
import TaskList from "./components/TaskList";

export const App = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "login", element: <Login /> },
      { path: "registro", element: <Register /> },
      {path: "dashboard", element: <Dashboard />},
      {path:"tasklist", element: <TaskList />}
    ],
  },
]);