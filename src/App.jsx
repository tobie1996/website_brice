import React from "react";
import Navbar from "./components/Navbar";
import Home from "../src/pages/Home";
import Footer from "./components/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./pages/Services";
import About from "./pages/About";
import Contacts from "./pages/Contacts";

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/apropos" element={<About />}/>
        <Route path="/contacts" element={<Contacts />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
