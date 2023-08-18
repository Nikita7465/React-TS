import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "../node_modules/react-router-dom/dist/index";

import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";
import Home from "./pages/Home/Home";
import Pricing from "./pages/Pricing/Pricing";
import Faq from "./pages/FAQ/FAQ";
import Benefits from "./pages/Benefits/Benefits";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/benefits" element={<Benefits />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
