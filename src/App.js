import { Provider } from 'react-redux';
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './App.css';
import store from "./Redux/store";
import { router } from "./Router/Router";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={router} />
        <ToastContainer />
      </div>
    </Provider>
  );
}

export default App;
