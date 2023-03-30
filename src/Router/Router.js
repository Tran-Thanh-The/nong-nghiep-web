import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Views/Dashboard/Dashboard";
import Login from "../Views/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Login props={{ registerMode: true }} />,
  },
]);