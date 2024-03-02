import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Navbar from "../components/Navbar";
import { Home } from "../pages";
import Footer from "../components/Footer";
import About from "../pages/About";
import Services from "../pages/Services";
import ContactUs from "../pages/ContactUs";
import Client from "../pages/Client";

const Routers = () => {
  const location = useLocation();
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/client" element={<Client />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
};

export default Routers;
