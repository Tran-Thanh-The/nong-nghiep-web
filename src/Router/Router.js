import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Views/Dashboard/Dashboard";
import Login from "../Views/Login/Login";
import ProductManager from "../Views/Manager/ProductManager/ProductManager";
import Manager from "../Views/Manager/Manager";
import OrderManager from "../Views/Manager/OrderManager/OrderManager";
import Banner from "../Views/Dashboard/Components/Banner/Banner";
import Search from "../Views/Dashboard/Components/Search/Search";
import ProductDetail from "../Views/Dashboard/Components/ProductDetail/ProductDetail";
import Order from "../Views/Dashboard/Components/Order/Order";
import ProductList from "../Views/Dashboard/Components/ProductList/ProductList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: (
          <>
            <Banner />
            <Search />
            <ProductList />
          </>
        )
      },
      {
        path: "/order/:id",
        element: <Order />
      },
      {
        path: "/product/:id",
        element: <ProductDetail />
      }
    ],
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