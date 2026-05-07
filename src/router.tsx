import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./routes/AppLayout";
import HomePage from "./routes/HomePage";
import AboutPage from "./routes/AboutPage";
import Login from "./routes/Login";
import Register from "./routes/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "login", element: <Login /> },
      { path: "registro", element: <Register /> },
    ],
  },
]);