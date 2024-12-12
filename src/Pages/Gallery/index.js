import { useState } from 'react'
import { Link } from 'react-router-dom';

import * as S from './styles';
import styled from 'styled-components';

import ImageAPC from "../../assets/Photos/DefinitionOfSupportedProjects/DefinitionOfSupportedProjectsOne.jpg";
import ImageCGE from "../../assets/Photos/DefinitionOfSupportedProjects/DefinitionOfSupportedProjectsFive.jpg";
import BookRelease from "../../assets/Photos/BookRelease/BookReleaseTwo.jpg";
import ProjectAction from "../Gallery/PrejectsInAction/assets/moradores1.jpg";
import Seminario from "../../assets/Photos/EdictRefinementSeminar/EdictRefinementSeminarOne.jpg";

export const Content = styled.div`
  width: 100vw;
  height: auto;
  background-size: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const BoxContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;  
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem;
  color: #fff;
  background: #b33f10;
  border-radius: 12px;
  box-shadow: #b33f10 1px 0px 8px;
  text-align: center;


  @media(max-width: 1591px) {
    padding: 3rem 1rem;
    flex-direction: column;
    gap: 1.5rem;
  }

  @media(max-width: 768px) {
    width: 90%;
  }

  > div {
    width: 100%;
  }
`;

const MenubyYear = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 2rem;
`;

const MenubyYearOption = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background: none;
  cursor: pointer;
  outline: none;
  color: #fff;
  font-family: HandSean;
  font-size: 2rem;
  font-weight: 300;

  :disabled {
    color: #aeaeae;
    cursor: not-allowed;
  }

  :active {
    color: #e89f02;
    transform: scale(0.95);
  }
`;

function Gallery() {
    const [activeButton, setActiveButton] = useState(2023);
  
  return (
    <Content id='galeria'>
      <BoxContent>
        <div>
          <h2>Galeria</h2>
          <S.BackText>
            Seja muito bem-vindo/a para uma viagem visual pelas etapas de nosso Programa em 2023!
            <br />
            Clique em algum desses momentos e conheça detalhes de nossas atividades :
          </S.BackText>
          <MenubyYear> 
            <MenubyYearOption active={activeButton === 2023}>2023</MenubyYearOption>
            <MenubyYearOption active={activeButton === 2024} disabled>2024</MenubyYearOption>
            <MenubyYearOption active={activeButton === 2025} disabled>2025</MenubyYearOption>
          </MenubyYear>
        </div>
        <S.Ol>
          <S.List><Link to='/apresentando-os-projetos'><img src={ImageAPC} alt='' /><p>Apresentando os projetos às comunidades</p></Link></S.List>
          <S.List><Link to='/curso-de-gestao'> Curso de Gestão em Projetos</Link></S.List>
          <S.List><Link to='/definicao-dos-projetos'><img src={ImageCGE} alt='' /><p>Definição dos Projetos Apoiados em 2023</p></Link></S.List>
          <S.List><Link to='/lancamento-do-livro'><img src={BookRelease} alt='' /><p>Lançamento do Livro-Síntese do Programa Favela Parque</p></Link></S.List>
          <S.List><Link to='/lancamento-do-programa'>Lançamento do Programa</Link></S.List>
          <S.List><Link to='/projetos-em-andamento'><img src={ProjectAction} alt='' /><p>Projetos em andamento</p></Link></S.List>
          <S.List><Link to='/seminario-de-refinamento'><img src={Seminario} alt='' /><p>Seminário de Refinamento do Edital</p></Link></S.List>
          <S.List><Link to='/registros-de-eventos'>Registro de Eventos</Link></S.List>
          <S.List><a href='#vocenoparque'>Você no parque!</a></S.List>
        </S.Ol>
      </BoxContent>
    </Content>
  );
}

export default Gallery;
