import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "../components/Navbar";
import { Home } from "../pages";
import Footer from "../components/Footer";
import About from "../pages/About";
import Services from "../pages/Services";
import ContactUs from "../pages/ContactUs";
import Client from "../pages/Client";
import Article from "../pages/Article";
import ArticleDetail from "../pages/Article/ArticleDetail";
import Career from "../pages/Career";
import NotFound from "../pages/NotFound";

const Routers = () => {

  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/article/:slug" element={<ArticleDetail />} />
        <Route path="/client" element={<Client />} />
        <Route path="/article" element={<Article />} />
        <Route path="/career" element={<Career />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
};

export default Routers;
