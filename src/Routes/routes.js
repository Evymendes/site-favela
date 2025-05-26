import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// import Home from "../Pages/Home";
import Program from "../Pages/Program";
import Notice from "../Pages/Notice";
import TheCommunities from "../Pages/TheCommunities";
import Gallery from "../Pages/Gallery";
import ProgramLaunch from "../Pages/Gallery/2023/ProgramLaunch";
import Prazeres from "../Pages/Gallery/2023/ProgramLaunch/prazeres";
import CerroCora from "../Pages/Gallery/2023/ProgramLaunch/cerroCora";
import GuararapeseVilaCandido from "../Pages/Gallery/2023/ProgramLaunch/guararapes-vilaCandido";
import EdictRefinementSeminar from "../Pages/Gallery/2023/EdictRefinementSeminar";
import DefinitionOfSupportedProjects from "../Pages/Gallery/2023/DefinitionOfSupportedProjects";
import IntroducingProjectsToCommunities from "../Pages/Gallery/2023/IntroducingProjectsToCommunities";
import ProjectManagementCourse from "../Pages/Gallery/2023/ProjectManagementCourse";
import BookRelease from "../Pages/Gallery/2023/BookRelease";
import LaunchYouInThePark from "../Pages/Gallery/2023/LaunchYouInThePark";
// import Recursos from "../Pages/EditalRecursos";
// import Perguntas from "../Pages/EditalRecursos/Perguntas";
// import PreSelecao from "../Pages/Pre-selecionados"
// import Edital2025 from "../Pages/Edital2025";
import ProjectsInAction from "../Pages/Gallery/2023/PrejectsInAction"
import RegisterOfEvents from "../Pages/Gallery/2023/RegisterOfEvents"
import Aprovaos2025 from "../Pages/Aprovados2025"

import Directors from "../Pages/Directors";
import YouInThePark from "../Pages/YouInThePark";
import Team from "../Pages/Team";
import MainPage from "../Pages/MainPage";

const RoutesScreens = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<MainPage />} exact />
            {/* <Route path='/recursos' element={<Recursos />} /> */}
            {/* <Route path='recursos/perguntas-mais-frequentes' element={<Perguntas />} /> */}
            {/* <Route path='/pre-selecao' element={<PreSelecao />} /> */}
            {/* <Route path='/edital2025' element={<Edital2025 />} /> */}
            <   Route path='/aprovados2025' element={<Aprovaos2025 />} />

            <Route path='/o-programa' element={<Program />} />
            <Route path='/edital' element={<Notice />} />
            <Route path='/as-comunidades' element={<TheCommunities />} />
            <Route path='/galeria' element={<Gallery />} />
            {/* 2023 */}
            <Route path='/2023/lancamento-do-programa' element={<ProgramLaunch />} />
            <Route path='/2023/lancamento-do-programa-prazeres' element={<Prazeres />} />
            <Route path='/2023/lancamento-do-programa-cerro-cora' element={<CerroCora />} />
            <Route path='/2023/lancamento-do-programa-guararapes-e-vila-candido' element={<GuararapeseVilaCandido />} />
            <Route path='/2023/seminario-de-refinamento' element={<EdictRefinementSeminar />} />
            <Route path='/2023/curso-de-gestao' element={<ProjectManagementCourse />} />
            <Route path='/2023/definicao-dos-projetos' element={<DefinitionOfSupportedProjects />} />
            <Route path='/2023/apresentando-os-projetos' element={<IntroducingProjectsToCommunities />} />
            <Route path='/2023/lancamento-do-livro' element={<BookRelease />} />
            <Route path='/2023/lancamento-voce-no-parque' element={<LaunchYouInThePark />} />
            <Route path='/2023/projetos-em-andamento' element={<ProjectsInAction />} />
            <Route path='/2023/registros-de-eventos' element={<RegisterOfEvents />} />

            {/* 2024 */}

            
            <Route path='/realizadores' element={<Directors />} />
            <Route path='/voce-no-parque' element={<YouInThePark />} />
            <Route path='/equipe' element={<Team />} />
         </Routes>
      </BrowserRouter>
   )
}

export default RoutesScreens;
