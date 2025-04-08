import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// import Home from "../Pages/Home";
import Program from "../Pages/Program";
import Notice from "../Pages/Notice";
import TheCommunities from "../Pages/TheCommunities";
import Gallery from "../Pages/Gallery";
import ProgramLaunch from "../Pages/Gallery/ProgramLaunch";
import Prazeres from "../Pages/Gallery/ProgramLaunch/prazeres";
import CerroCora from "../Pages/Gallery/ProgramLaunch/cerroCora";
import GuararapeseVilaCandido from "../Pages/Gallery/ProgramLaunch/guararapes-vilaCandido";
import EdictRefinementSeminar from "../Pages/Gallery/EdictRefinementSeminar";
import DefinitionOfSupportedProjects from "../Pages/Gallery/DefinitionOfSupportedProjects";
import IntroducingProjectsToCommunities from "../Pages/Gallery/IntroducingProjectsToCommunities";
import ProjectManagementCourse from "../Pages/Gallery/ProjectManagementCourse";
import BookRelease from "../Pages/Gallery/BookRelease";
import LaunchYouInThePark from "../Pages/Gallery/LaunchYouInThePark";
// import Recursos from "../Pages/EditalRecursos";
// import Perguntas from "../Pages/EditalRecursos/Perguntas";
// import PreSelecao from "../Pages/Pre-selecionados"
// import Edital2025 from "../Pages/Edital2025";
import ProjectsInAction from "../Pages/Gallery/PrejectsInAction"
import RegisterOfEvents from "../Pages/Gallery/RegisterOfEvents"
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
            <Route path='/lancamento-do-programa' element={<ProgramLaunch />} />
            <Route path='/lancamento-do-programa-prazeres' element={<Prazeres />} />
            <Route path='/lancamento-do-programa-cerro-cora' element={<CerroCora />} />
            <Route path='/lancamento-do-programa-guararapes-e-vila-candido' element={<GuararapeseVilaCandido />} />
            <Route path='/seminario-de-refinamento' element={<EdictRefinementSeminar />} />
            <Route path='/curso-de-gestao' element={<ProjectManagementCourse />} />
            <Route path='/definicao-dos-projetos' element={<DefinitionOfSupportedProjects />} />
            <Route path='/apresentando-os-projetos' element={<IntroducingProjectsToCommunities />} />
            <Route path='/lancamento-do-livro' element={<BookRelease />} />
            <Route path='/lancamento-voce-no-parque' element={<LaunchYouInThePark />} />
            <Route path='/projetos-em-andamento' element={<ProjectsInAction />} />
            <Route path='/registros-de-eventos' element={<RegisterOfEvents />} />

            <Route path='/realizadores' element={<Directors />} />
            <Route path='/voce-no-parque' element={<YouInThePark />} />
            <Route path='/equipe' element={<Team />} />
         </Routes>
      </BrowserRouter>
   )
}

export default RoutesScreens;
