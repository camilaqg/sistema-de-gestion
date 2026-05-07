import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./routes/AppLayout";
import HomePage from "./routes/HomePage";
import AboutPage from "./routes/AboutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
    ],
  },
]);