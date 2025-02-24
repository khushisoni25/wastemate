import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ContactPage from "./Contact/Contact";

function App() {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element= {<About />} />
        <Route path="/contact" element= {<ContactPage />} />
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
