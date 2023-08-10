// import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "font-awesome/css/font-awesome.min.css";
import "./assets/css/style.css";
import { Provider } from "react-redux";
import store from "./store/index.js";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
        <ToastContainer/>
      </Provider>
    </BrowserRouter>
  // </React.StrictMode>
);
