import React from "react";
import reactDom from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About.js";
import Home from "./Pages/Home.js";
import Topmenu from "./Topmenu.js";
import Contact from "./Pages/Contact.js";
import Pets from "./Pages/Pets.js";
import More from "./Pages/More.js";
import "./App.css";
import Footer from "./Footer.js";
// import Card from './Pages/card.js';

const App = () => {
  // const mycard= Placements.map((key)=> <Placements title={key.title} info={key.info} about={key.about}/>);
  return (
    <>
      <Router>
        <Topmenu />
        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Pets" element={<Pets />} />
          <Route path="/More" element={<More />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
