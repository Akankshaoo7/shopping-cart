import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/Main";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import AuthGuard from "./components/AuthGuard";
import axiosInterceptor from "./services/interceptor";
import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";

function App() {
  const interceptor = axiosInterceptor();
  useEffect(() => {
    interceptor();
  }, []);
  return (
    <HelmetProvider>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productSlug" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route element={<AuthGuard />}>
            <Route path="/checkout" element={<Checkout />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </HelmetProvider>
  );
}

export default App;
