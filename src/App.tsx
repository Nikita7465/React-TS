import React from "react";
import { Route, Routes } from "../node_modules/react-router-dom/dist/index";

import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";
import Home from "./pages/Home/Home";
import Pricing from "./pages/Pricing/Pricing";
import Faq from "./pages/faq/Faq";
import Benefits from "./pages/Benefits/Benefits";
import Reg from "./pages/Reg/Reg";
import Auth from "./pages/Auth/Auth";

function App() {
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
      <Route path="/reg" element={<Reg />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}

export default App;
