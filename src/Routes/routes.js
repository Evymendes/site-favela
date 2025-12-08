import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Maintenance from "../Pages/Maintenance";

const RoutesScreens = () => {
   return (
      <BrowserRouter>
         <Routes>
            {/* Todas as rotas redirecionam para a página de manutenção */}
            <Route path='*' element={<Maintenance />} />
         </Routes>
      </BrowserRouter>
   )
}

export default RoutesScreens;
