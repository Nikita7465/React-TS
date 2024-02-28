import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";
import Home from "./pages/Home/Home";
import Pricing from "./pages/Pricing/Pricing";
import Faq from "./pages/faq/Faq";
import Benefits from "./pages/Benefits/Benefits";
import Register from "./pages/Register/Register";
import Auth from "./pages/Auth/Auth";
import Cookies from "js-cookie";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const token = Cookies.get("token");

  useEffect(() => {
    if (
      token &&
      (location.pathname === "/register" || location.pathname === "/auth")
    ) {
      navigate("/notfound");
    }
  }, [token, location.pathname, navigate]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
      <Route
        path="/gallery"
        element={
          <Layout>
            <Gallery />
          </Layout>
        }
      />
      <Route
        path="/pricing"
        element={
          <Layout>
            <Pricing />
          </Layout>
        }
      />
      <Route
        path="/faq"
        element={
          <Layout>
            <Faq />
          </Layout>
        }
      />
      <Route
        path="/benefits"
        element={
          <Layout>
            <Benefits />
          </Layout>
        }
      />
      <Route path="/register" element={<Register />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
