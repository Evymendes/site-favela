import { useState } from 'react'
import { Link } from 'react-router-dom';

import * as S from './styles';
import styled, { css } from 'styled-components';

import ImageAPC from "../../assets/Photos/DefinitionOfSupportedProjects/DefinitionOfSupportedProjectsOne.jpg";
import ImageCGE from "../../assets/Photos/DefinitionOfSupportedProjects/DefinitionOfSupportedProjectsFive.jpg";
import BookRelease from "../../assets/Photos/BookRelease/BookReleaseTwo.jpg";
import ProjectAction from "./2023/PrejectsInAction/assets/moradores1.jpg";
import Seminario from "../../assets/Photos/EdictRefinementSeminar/EdictRefinementSeminarOne.jpg";
import { Aprovacao2024Three, Aprovacao2025Nine, AtividadesDeFormacao2024Twelve, BomDiaFavela2025, EdictRefinementSeminar2024Four, Seminario2025One } from '../../assets';

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

  ${(props) => (props.selected && !props.disabled) ? css`
    color: #e89f02;
    transform: scale(0.95);
  ` : ''}
`;

const galleryData = {
  2023: [
    {
      to: '/2023/apresentando-os-projetos',
      img: ImageAPC,
      text: 'Apresentando os projetos às comunidades'
    },
    {
      to: '/2023/curso-de-gestao',
      text: 'Curso de Gestão em Projetos'
    },
    {
      to: '/2023/definicao-dos-projetos',
      img: ImageCGE,
      text: 'Definição dos Projetos Apoiados em 2023'
    },
    {
      to: '/2023/lancamento-do-livro',
      img: BookRelease,
      text: 'Lançamento do Livro-Síntese do Programa Favela Parque'
    },
    {
      to: '/2023/lancamento-do-programa',
      text: 'Lançamento do Programa'
    },
    {
      to: '/2023/projetos-em-andamento',
      img: ProjectAction,
      text: 'Projetos em andamento'
    },
    {
      to: '/2023/seminario-de-refinamento',
      img: Seminario,
      text: 'Seminário de Refinamento do Edital 2023'
    },
    {
      to: '/2023/registros-de-eventos',
      text: 'Registro de Eventos'
    },
    // { 
    //   to: '/vocenoparque',
    //   text: 'Você no parque!'
    // }
  ],
  2024: [
    {
      to: '/2024/seminario-de-refinamento',
      img: EdictRefinementSeminar2024Four,
      text: 'Seminário'
    },
    {
      to: '/2024/aprovados',
      img: Aprovacao2024Three,
      text: 'Aprovados'
    },
    {
      to: '/2024/atividades-de-formacao',
      img: AtividadesDeFormacao2024Twelve,
      text: 'Atividades de Formação'
    },
    {
      to: '/2024/fortalecimento-organizacional',
      text: 'Fortalecimento Organizacional'
    },
    {
      to: '/2024/projetos-em-andamento',
      text: 'Projetos em andamento'
    },
    {
      to: '/2024/interacoes-com-o-parque-nacional-da-tijuca',
      text: 'Interações com o Parque Nacional da Tijuca'
    },
    {
      to: '/2024/registros-de-eventos',
      text: 'Registro de Eventos'
    }
  ],
  2025: [
    {
      to: '/2025/seminario-de-refinamento',
      img: Seminario2025One,
      text: 'Seminário de Refinamento do Edital'
    },
    {
      to: '/2025/aprovados',
      img: Aprovacao2025Nine,
      text: 'Aprovados'
    },
    {
      to: '/2025/mentorias',
      text: 'Mentorias'
    },
    {
      to: '/2025/bom-dia-favela',
      img: BomDiaFavela2025,
      text: 'Bom dia Favela'
    },
  ],
  // Adicione outros anos conforme necessário
};

function Gallery() {
    const [activeButton, setActiveButton] = useState(2025);
  
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
            {Object.keys(galleryData).sort((a, b) => b - a).map((year) => (
              <MenubyYearOption
                key={year}
                selected={activeButton === Number(year)}
                onClick={() => setActiveButton(Number(year))}
                disabled={galleryData[year].length === 0}
              >
                {year}
              </MenubyYearOption>
            ))}
          </MenubyYear>
        </div>
        <S.Ol>
          {galleryData[activeButton]?.map((item, idx) => (
            <S.List key={idx}>
              {item.to.startsWith('/') ? (
                <Link to={item.to}>
                  {item.img && <img src={item.img} alt='' />}
                  <p>{item.text}</p>
                </Link>
              ) : (
                <a href={item.to}>
                  {item.img && <img src={item.img} alt='' />}
                  <p>{item.text}</p>
                </a>
              )}
            </S.List>
          ))}
        </S.Ol>
      </BoxContent>
    </Content>
  );
}

export default Gallery;
