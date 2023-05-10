import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Views/Dashboard/Dashboard";
import Login from "../Views/Login/Login";
import ProductManager from "../Views/Manager/ProductManager/ProductManager";
import Manager from "../Views/Manager/Manager";
import OrderManager from "../Views/Manager/OrderManager/OrderManager";

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
  {
    path: "/manager",
    element: <Manager />,
    children: [
      {
        path: "",
        element: <ProductManager />
      },
      {
        path: "order",
        element: <OrderManager />
      }
    ],
  }
]);