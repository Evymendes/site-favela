import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "../Pages/Home";
import Program from "../Pages/Program";
import Contact from "../Pages/Program";

const RoutesScreens = () => {
   return(
       <BrowserRouter>
        <Routes>
           {/* <Route component = { Home }  path="/" exact /> */}
           <Route path="/" element={<Home/>} exact />
           <Route path="/contato" element={<Contact/>} exact />
           <Route path="/o-programa" element={<Program />} exact />
        </Routes>
       </BrowserRouter>
   )
}

export default RoutesScreens;