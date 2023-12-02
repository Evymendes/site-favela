import styled from 'styled-components';
import FileDiagnosticoSocioambiental from '../../files/DiagnosticoSocioambientalParticipativo.pdf';
import FileProgramaFavelaParque from '../../files/ProgramaFavelaParqueEmAção.pdf';

import Image from "../../assets/Photos/Apresentando o Programa (2).jpeg"

import * as S from './styles';

const Content = styled.section`
  width: 100vw;
  height: auto;
  max-width: 1440px;
  padding: 3rem 0 6rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media(max-width: 940px) {
    padding: 2rem 0 0 0;
  }
`

const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: auto;
  padding-bottom: 5rem; 

  > h2 {
    color: #000;
    width: auto;
    text-align: start;
    display: flex;
    align-items: center;
    font-weight: 600;
    display: flex;
    position: relative;
    margin-bottom: 5rem;
    font-size: 3rem;

    > p {
      position: absolute;
      left: 50%; 
      bottom: -2.7rem;
      color: #b33f10;
    }
  }

  @media(max-width: 1499px) {
    padding: 3rem 1rem;
    flex-direction: column;
  }
`

const Figure = styled.figure`
  width: 100%;
  display: flex;
  position: relative;

  > div {
    width: 50%;

    @media(max-width: 1106px) {
      width: 80%;
    }

    @media(max-width: 800px) {
      width: 100%;
    }
     > img {
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 0 10px #e89f02;
    ${'' /* position: absolute; */}
  }
  }

  @media(max-width: 1106px) {
    flex-direction: column;
    align-items: center;
  }
`

const BoxTexts = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  box-shadow: 0 0 10px 2px #e89f02;
  border-radius: 12px;
  background: #e89f02;
  transform: translate(-5rem, 5rem);

  @media(max-width: 1106px) {
    width: 90%;
  }

  @media(max-width: 950px) {
    transform: translate(-2rem, -2rem);
  }
`

const Button = styled.a`
    padding: 1rem 2rem;
    background: #329af1;
    border-radius: 8px;
    color: #fff;
    font-weight: 600;
    -webkit-text-decoration: none;
    text-decoration: none;
    margin-top: 1rem;

    > i {
      padding-left: 1rem;
    }

    @media(max-width: 1024px) {
      font-size: 0.875rem;
    }
`;

const Triangule = styled.figure`
  width: 6rem;
  height: 20rem;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid #fff;
  transform: rotate(180deg);
  position: absolute;
  top: 100%;
  margin-top: -12px;
  z-index: 3;
`

function Program() {
  return (
    <Content>
      <BoxContent>
        <h2 id='o-programa'>Favela <p>Parque</p></h2>
        <Figure>
          <div>
            <img src={Image} alt='Favela Parque' />
          </div>
          <BoxTexts>
            <S.BackText>
              O <strong>Programa Favela Parque </strong> é parte do Programa Socioambiental do Parque Nacional da Tijuca,
              sendo administrado pelo Instituto Precisa Ser, com recursos do Trem do Corcovado.
            </S.BackText>

            <S.BackText>
              Tem o objetivo de apoiar o Desenvolvimento Local Sustentável dos Morros Guararapes,
              Cerró-Corá, Prazeres e Vila Cândido ampliando suas relações com o Parque Nacional da Tijuca
              e fortalecendo as organizações comunitárias e o protagonismo social através de atividades
              de geração de renda, saúde, educação, cultura e ações ambientais engajadas.
            </S.BackText>

            <S.BackText>
              Vem sendo desenvolvido desde 2018, quando foi realizado o Diagnóstico Socioambiental
              Participativo em parceria com os moradores daquelas favelas, cujos resultados propuseram o
              estabelecimento de uma linha de ação permanente, anual e contínua de recursos para o
              desenvolvimento e implementação de estratégias de melhoria da qualidade de vida da
              população residente naquelas comunidades, de maneira colaborativa e adequada às realidades
              ali verificadas.
            </S.BackText>

            <S.BackText>
              Em 2023, realizou o primeiro ano de aplicação nas comunidades, cuja as atividades e resultados, voe pode conhecer melhor clicando aqui :
            </S.BackText>
            <S.BackText>Para conhecer mais, clique nos links para baixar o arquivo em pdf:</S.BackText>
            <Button href={FileDiagnosticoSocioambiental} download>Diagnóstico Socioambiental Participativo<i class='bx bxs-download'></i></Button>
            <Button href={FileProgramaFavelaParque} download>Programa Favela Parque <i class='bx bxs-download'></i></Button>
          </BoxTexts>
        </Figure>
      </BoxContent>
      <Triangule />
    </Content>
  );
}

export default Program;
