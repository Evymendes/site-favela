import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "../Pages/Home";
import Program from "../Pages/Program";
import Notice from "../Pages/Notice";
import TheCommunities from "../Pages/TheCommunities";
import Gallery from "../Pages/Gallery";
import ProgramLaunch from "../Pages/Gallery/ProgramLaunch";
import Prazeres from "../Pages/Gallery/ProgramLaunch/prazeres";
import CerroCora from "../Pages/Gallery/ProgramLaunch/cerroCora";
import GuararapeseVilaCandido from "../Pages/Gallery/ProgramLaunch/guararapes-vilaCandido";
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
           <Route path="/lancamento-do-programa" element={<ProgramLaunch />} />
           <Route path="/lancamento-do-programa-prazeres" element={<Prazeres />} />
           <Route path="/lancamento-do-programa-cerro-cora" element={<CerroCora />} />
           <Route path="/lancamento-do-programa-guararapes-e-vila-candido" element={<GuararapeseVilaCandido />} />
           <Route path="/realizadores" element={<Directors />} />
           <Route path="/voce-no-parque" element={<YouInThePark />} />
           <Route path="/equipe" element={<Team />} />
        </Routes>
       </BrowserRouter>
   )
}

export default RoutesScreens;