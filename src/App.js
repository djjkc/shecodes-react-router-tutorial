import React from "react";
import { BrowserRouter as Router, Routes, Route } from"react-router-dom";
import Nav from "./components/Nav";
import ContactPage from './pages/ContactPage';
import './App.css';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";


function App() {
  return (
    <Router>
    <div>
    <Nav />
      
    <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;