import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "../Pages/Home";
import Program from "../Pages/Program";
import Contact from "../Pages/Contact";
import Gallery from "../Pages/Gallery";

const RoutesScreens = () => {
   return(
       <BrowserRouter>
        <Routes>
           {/* <Route component = { Home }  path="/" exact /> */}
           <Route path="/" element={<Home/>} exact />
           <Route path="/contato" element={<Contact/>} exact />
           <Route path="/o-programa" element={<Program />} exact />
           <Route path="/galeria" element={<Gallery />} exact />
           
        </Routes>
       </BrowserRouter>
   )
}

export default RoutesScreens;