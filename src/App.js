import React from "react";
import { BrowserRouter,Route, Routes } from 'react-router-dom'


import "./App.css";
import "./contact.css";

import About from './components/About';

import Home from "./components/Home";
import Footer from "./components/Foter";
import Service from './components/Service';
import Contact from './components/Contact';
import { Navbar } from "./components/Navbar";
import OurProjects from "./components/OurProjects";
// import Nav from './components/Nav';



function App() {
  

  

  return (

  <>
  
  <BrowserRouter>
  <Navbar/>
  {/* <Nav/> */}
    <Routes>
        <Route exact path = "/" element={<Home/>}/>
        <Route exact path = "service" element={<Service/>}/>
        <Route exact path = "about" element={<About/>}/>
        <Route exact path = "contact" element={<Contact/>}/>
        <Route exact path = "ourprojects" element={<OurProjects/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>

  </>


   
  );
}

export default App;




