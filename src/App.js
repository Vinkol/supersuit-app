import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import CostumeCard from "./components/CostumeCard/CostumeCard";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./styles/global.sass";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/costume/:id" element={<CostumeCard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
