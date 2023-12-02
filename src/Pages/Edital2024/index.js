import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


import Graph from "../../../assets/graphcs.png";
import GraphHora from "../../../assets/graphc-hours.png";


const Content = styled.section`
  width: 100%;
  height: auto;
  padding: 3rem 0 6rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media(max-width: 940px) {
    padding: 2rem 0 0 0;
  }
`

const BoxContent = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

const TextBold = styled.p`
  font-weight: 800;
  margin-bottom: 1.2rem;
`

const Text = styled.p`
  margin-bottom: 1rem;
  
  > span {
    border-bottom: 3px solid #000;
    margin-right: 0.5rem;
  }
`

const Information = styled.p`
  font-size: 0.7rem;
  font-weight: 800;
`

const BoxGraph = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.centered ? 'center' : 'flex-start')};
  margin-bottom: ${(props) => (props.centered ? '4rem' : '2rem')};

  > p {
    margin: 0.7rem 0;
  }


  > img {
    max-width: ${(props) => (props.centered ? '400px' : '600px')};
    width: 90%;
  }
`;

const Edital = () => {
  return (
    <Content>
      <BoxContent>
        <TextBold>Ano 2023</TextBold>
        <Text>Fruto dos anos de planejamento e meticulosa construção participativa com as comunidades o Programa Favela Parque nasceu maduro em 2023  e pode já no primeiro ano de atividades estabelecer resultados palpáveis. Grande parte dele pode ser verificada em números:</Text>
        <Text>Total de Recursos aplicados em 2023: <b>R$ 268.291,79</b></Text>
        <BoxGraph>
          <Information>Natureza dos projetos apoiados em 2023</Information>
          <img src={Graph} alt='graficos' />
          <Information>Total de recursos investidos nas comunidades: R$188.837,21</Information>
        </BoxGraph>

        <BoxGraph centered>
          <Information>Horas de capacitação direta ofertada para os proponentes: 113 horas</Information>
          <img src={GraphHora} alt='graficos' />
        </BoxGraph>
        <Text>Já para aqueles que gostam do “brilho nos olhos” dos beneficiários, veja a seguir uma seleção de fotografias dos Projetos em andamento (se quiser conhecer mais das atividades desenvolvidas em 2023 veja as nossas Galerias </Text>
        <Link to="/projetos-em-andamento">Ir para Galerias</Link>
        <Text>Em 2023, o Programa atingiu 1009 beneficiários diretos</Text>
        <Text>Os que participaram das atividades dos projetos foram 377 ao todo.</Text>
        <Text>Já as pessoas que assinaram estiveram nas demais ações comunitárias (eventos de divulgação e celebração, visitas ao PNT e ao Cristo e a participação em Cursos e Seminário) foram: <b>632</b> pessoas. </Text>
        <Text><b>11 coletivos</b> foram diretamente atendidos pelo Edital de Acesso a Recursos, deixando um legado de <b>98 agentes sociais</b> fortalecidos para desenvolver seus grupos e executar atividades. </Text>
        <Text><b>662 horas ofertadas em benefício da população</b> pelos próprios atores sociais das comunidades, apenas no período de duração do Programa (boa parte dos projetos segue em atividade, maximizando aqueles benefícios). A isso se somam as horas de trabalho da <b>Equipe de Gestão</b>, ao longo do ano: <b>4.800 horas.</b></Text>
        <Text>Destacamos dois depoimentos que trazem a grandeza do impacto de nossas ações:</Text>
        <Text>“Pela primeira vez eu pude me dedicar a outras coisas do projeto. Dinheiro garantido fez a gente ter chance de olhar mais para dentro e desejar saltos maiores” (Janice Delfim, projeto “Educação no Morro dos Prazeres”).
        </Text>
        <Text>“Não tínhamos um coletivo de mulheres (no Cerro-Corá). Então no quesito social ajudou muito pois outras mulheres que não tinham essa visão crítica acabaram por entender aquele espaço. Tanto que ele se tornou mais leve, teve uma importância e um peso social importantes” (Renata Dias, realizadora do “Cozinha Solidária”).
        </Text>
      </BoxContent>
    </Content>
  )
}

export default Edital