import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "../Pages/Home";
import Contact from "../Pages/Contact";

const RoutesScreens = () => {
   return(
       <BrowserRouter>
        <Routes>
           {/* <Route component = { Home }  path="/" exact /> */}
           <Route path="/" element={<Home/>} exact />
           <Route path="/contato" element={<Contact/>} exact />
           {/* <Route component = { Contact }  path="/contato" /> */}
        </Routes>
       </BrowserRouter>
   )
}

export default RoutesScreens;