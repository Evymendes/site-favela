
import Cozinha1 from "./assets/cozinha1.jpg";
import Cozinha2 from "./assets/cozinha2.jpg";
import Cozinha3 from "./assets/cozinha3.jpg";
import Cozinha4 from "./assets/cozinha4.jpg";

import Moradores1 from "./assets/moradores1.jpg";
import Moradores2 from "./assets/moradores2.jpg";
import Moradores3 from "./assets/moradores3.jpg";
import Moradores4 from "./assets/moradores4.jpg";

import Residuos1 from "./assets/residuos1.jpg";
import Residuos2 from "./assets/residuos2.jpg";
import Residuos3 from "./assets/residuos3.jpg";
import Residuos4 from "./assets/residuos4.jpg";

import Desbravadores1 from "./assets/desbravadores1.jpg";
import Desbravadores2 from "./assets/desbravadores2.jpg";
import Desbravadores3 from "./assets/desbravadores3.jpg";
import Desbravadores4 from "./assets/desbravadores4.jpg";

import Potencializa1 from "./assets/potencializa1.jpg";
import Potencializa2 from "./assets/potencializa2.jpg";
import Potencializa3 from "./assets/potencializa3.jpg";
import Potencializa4 from "./assets/potencializa4.jpg";

import Memoria1 from "./assets/memoria1.jpg";
import Memoria2 from "./assets/memoria2.jpg";
import Memoria3 from "./assets/memoria3.jpg";
import Memoria4 from "./assets/memoria4.jpg";

import Esporte1 from "./assets/esporte1.jpg";
import Esporte2 from "./assets/esporte2.jpg";
import Esporte3 from "./assets/esporte3.jpg";
import Esporte4 from "./assets/esporte4.jpg";

import Bau1 from "./assets/bau1.jpg";
import Bau2 from "./assets/bau2.jpg";
import Bau3 from "./assets/bau3.jpg";
import Bau4 from "./assets/bau4.jpg";

import EducacaoPzr1 from "./assets/educacaopzr1.jpg";
import EducacaoPzr2 from "./assets/educacaopzr2.jpg";
import EducacaoPzr3 from "./assets/educacaopzr3.jpg";
import EducacaoPzr4 from "./assets/educacaopzr4.jpg";

import Horta1 from "./assets/horta1.jpg";
import Horta2 from "./assets/horta2.jpg";
import Horta3 from "./assets/horta3.jpg";
import Horta4 from "./assets/horta4.jpg";

import Prevest1 from "./assets/prevest1.jpg";
import Prevest2 from "./assets/prevest2.jpg";
import Prevest3 from "./assets/prevest3.jpg";
import Prevest4 from "./assets/prevest4.jpg";
import styled from "styled-components";

const PhotosContainer = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    margin-bottom: 5rem;
    > h3 {
      margin-bottom: 3rem;
    }
  }
`;

const BoxImages = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-left: 1rem;
`

const PhotoWrapper = styled.div`
  width: 400px;
  overflow: hidden;
  margin: 10px;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  border-radius: 10px;

  }
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;


const photos = () => {
  const conteudo = [
    {
      title: "Cozinha Solidária",
      img: [
        Cozinha1,
        Cozinha2,
        Cozinha3,
        Cozinha4,
      ],
    },
    {
      title: "Nós, Moradores",
      img: [
        Moradores1,
        Moradores2,
        Moradores3,
        Moradores4,
      ],
    },
    {
      title: "Gestão de Resíduos",
      img: [
        Residuos1,
        Residuos2,
        Residuos3,
        Residuos4,
      ],
    },
    {
      title: "Clube dos Desbravadores",
      img: [
        Desbravadores1,
        Desbravadores2,
        Desbravadores3,
        Desbravadores4,
      ],
    },
    {
      title: "Potencializa",
      img: [
        Potencializa1,
        Potencializa2,
        Potencializa3,
        Potencializa4,
      ],
    },
    {
      title: "Feira Cultural: Verde é a Memória",
      img: [
        Memoria1,
        Memoria2,
        Memoria3,
        Memoria4,
      ],
    },
    {
      title: "Atividades Esportivas Integradas",
      img: [
        Esporte1,
        Esporte2,
        Esporte3,
        Esporte4,
      ],
    },
    {
      title: "Bau Alfabetização",
      img: [
        Bau1,
        Bau2,
        Bau3,
        Bau4,
      ],
    },
    {
      title: "Educação no Morro dos Prazeres",
      img: [
        EducacaoPzr1,
        EducacaoPzr2,
        EducacaoPzr3,
        EducacaoPzr4,
      ],
    },
    {
      title: "Coletivo MUDHA: Horta e Jardim",
      img: [
        Horta1,
        Horta2,
        Horta3,
        Horta4,
      ],
    },
    {
      title: "Pré-Vestibular Comunitário",
      img: [
        Prevest1,
        Prevest2,
        Prevest3,
        Prevest4,
      ],
    },
  ];
  return (
    <PhotosContainer>
      {conteudo.map((section, index) => (
        <div key={index}>
          <h3>{section.title}</h3>
          <BoxImages>
            {section.img.map((photo, idx) => (
              <PhotoWrapper key={idx}>
                <Photo src={photo} alt={`${section.title}-${idx}`} />
              </PhotoWrapper>
            ))}
          </BoxImages>
        </div>
      ))}
    </PhotosContainer>
  );
};

export default photos