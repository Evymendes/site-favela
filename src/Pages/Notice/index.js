import { useState } from 'react'
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import Onda from "../../assets/wave.svg"
import Graph from "../../assets/graphcs.jpeg";
import GraphHora from "../../assets/graphc-hours.jpg";

import Cozinha from "../../Pages/Gallery/PrejectsInAction/assets/cozinha1.jpg";
import Moradores from "../../Pages/Gallery/PrejectsInAction/assets/moradores4.jpg";
import Residuos from "../../Pages/Gallery/PrejectsInAction/assets/residuos3.jpg";

const Content = styled.section`
  position: relative;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #008742;
  z-index: 1;
`;

const BoxContent = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 3rem 0 0 0;

  > a {
    width: 100%;
  }

  > h2 {
    margin-bottom: 1rem;
    color: #fff;
    font-size: 3rem;
    position: relative;
    max-width: 18rem;
    font-weight: 300;
  }

  > div {
      width: 100%;
  }
  @media(max-width: 1499px) {
    padding: 3rem 1rem 1rem 1rem;
    flex-direction: column;
  }

  @media(max-width: 690px) {
    padding: 6rem 1rem 1rem 1rem;
  } 
`

const Text = styled.p`
  margin-bottom: 1rem;
  color: #fff;

  
  > span {
    border-bottom: 3px solid #000;
    margin-right: 0.5rem;
    color: #fff;

  }
`

const BoxGraph = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.centered ? 'center' : 'flex-start')};
  margin-bottom: ${(props) => (props.centered ? '4rem' : '2rem')};

  > p {
    margin: 0.7rem 0;
    color: #fff;

  }


  > img {
    max-width: ${(props) => (props.centered ? '400px' : '600px')};
    width: 90%;
    border-radius: 12px;
    box-shadow: #fff 0 0 7px;

      @media(max-width: 768px) {
        width: 100%;
      }
  }
`;

const Figure = styled.figure`
  width: 100%;
  max-width: 300px;
  display: flex;
  position: relative;
  gap: 3rem;
  margin-bottom: 3rem;

  > img {
    width: 50%;
    border-radius: 12px;

    :hover {
      z-index: 4;
      transition: 0.3s ease-in;
      box-shadow: 0 0 1px 1px white;
    }
  }

  .image-position {
    width: 50%;
    height: 100%;
    left: 35%;
    margin-top: 1rem;
    position: absolute;
    box-shadow: 0 0 1px 1px white;
  }
`

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

const Wavee = styled.img`
width: 100vw;
margin-top: -3px;
`

const Notice = () => {
  const [activeButton, setActiveButton] = useState(2023);

  return (
    <>
      <Content id='resultados'>
        <BoxContent>
          <h2>Resultados</h2>
          <MenubyYear> 
            <MenubyYearOption selected={activeButton === 2023}>2023</MenubyYearOption>
            <MenubyYearOption selected={activeButton === 2024} disabled>2024</MenubyYearOption>
          </MenubyYear>
          <Text>Fruto dos anos de planejamento e meticulosa construção participativa com as comunidades o Programa Favela Parque nasceu maduro em 2023  e pode já no primeiro ano de atividades estabelecer resultados palpáveis. Grande parte dele pode ser verificada em números:</Text>
          <Text>Total de Recursos aplicados em 2023: <b>R$ 268.291,79</b></Text>
          <BoxGraph>
            <img src={Graph} alt='graficos' />
          </BoxGraph>

          <BoxGraph centered>
            <img src={GraphHora} alt='graficos' />
          </BoxGraph>
          <Text>Já para aqueles que gostam do “brilho nos olhos” dos beneficiários, veja a seguir uma seleção de fotografias dos Projetos em andamento (se quiser conhecer mais das atividades desenvolvidas em 2023 veja as nossas Galerias </Text>
          <Link to="/projetos-em-andamento"><Figure>
            <img src={Cozinha} alt='galeria' />
            <img src={Moradores} alt='galeria' className='image-position' />
            <img src={Residuos} alt='galeria' />
          </Figure>
          </Link>
          <Text>Em 2023, o Programa atingiu <b>1009</b> beneficiários diretos</Text>
          <Text>Os que participaram das atividades dos projetos foram <b>377</b> ao todo.</Text>
          <Text>Já as pessoas que estiveram nas demais ações comunitárias (eventos de divulgação e celebração, visitas ao PNT e ao Cristo e a participação em Cursos e Seminário) foram: <b>632</b> pessoas. </Text>
          <Text><b>11 coletivos</b> foram diretamente atendidos pelo Edital de Acesso a Recursos, deixando um legado de <b>98 agentes sociais</b> fortalecidos para desenvolver seus grupos e executar atividades. </Text>
          <Text><b>662 horas ofertadas em benefício da população</b> pelos próprios atores sociais das comunidades, apenas no período de duração do Programa (boa parte dos projetos segue em atividade, maximizando aqueles benefícios). A isso se somam as horas de trabalho da <b>Equipe de Gestão</b>, ao longo do ano: <b>4.800 horas.</b></Text>
          <Text>Destacamos dois depoimentos que trazem a grandeza do impacto de nossas ações:</Text>
          <Text>“Pela primeira vez eu pude me dedicar a outras coisas do projeto. Dinheiro garantido fez a gente ter chance de olhar mais para dentro e desejar saltos maiores” (Janice Delfim, projeto “Educação no Morro dos Prazeres”).
          </Text>
          <Text>“Não tínhamos um coletivo de mulheres (no Cerro-Corá). Então no quesito social ajudou muito pois outras mulheres que não tinham essa visão crítica acabaram por entender aquele espaço. Tanto que ele se tornou mais leve, teve uma importância e um peso social importantes” (Renata Dias, realizadora do “Cozinha Solidária”).
          </Text>
        </BoxContent>
      </Content>
      <Wavee src={Onda} />
    </>
  )
}

export default Notice;
