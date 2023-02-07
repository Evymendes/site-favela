import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "../Pages/Home";
import Program from "../Pages/Program";
import Notice from "../Pages/Notice";
import TheCommunities from "../Pages/TheCommunities";
import Gallery from "../Pages/Gallery";
import Prazeres from "../Pages/Gallery/prazeres";
import CerroCora from "../Pages/Gallery/cerroCora";
import GuararapeseVilaCandido from "../Pages/Gallery/guararapes-vilaCandido";
import Directors from "../Pages/Directors";
import YouInThePark from "../Pages/YouInThePark";
import Team from "../Pages/Team";

const RoutesScreens = () => {
   return(
       <BrowserRouter>
        <Routes>
           <Route path="/" element={<Home/>} exact />
           <Route path="/o-programa" element={<Program />} />
           <Route path="/edital" element={<Notice />} />
           <Route path="/as-comunidades" element={<TheCommunities />} />
           <Route path="/galeria" element={<Gallery />} />
           <Route path="/galeria-prazeres" element={<Prazeres />} />
           <Route path="/galeria-cerro-cora" element={<CerroCora />} />
           <Route path="/galeria-guararapes-e-vila-candido" element={<GuararapeseVilaCandido />} />
           <Route path="/realizadores" element={<Directors />} />
           <Route path="/vocenoparque" element={<YouInThePark />} />
           <Route path="/equipe" element={<Team />} />
        </Routes>
       </BrowserRouter>
   )
}

export default RoutesScreens;