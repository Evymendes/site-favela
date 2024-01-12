import styled from 'styled-components';
import * as S from './styles';


const Content = styled.section`
  position: relative;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  z-index: 1;
  margin-bottom: -3rem;

  @media(max-width: 1024px) {
  margin-bottom: 0;
    }
`;

const BoxContent = styled.div`
  width: 40%;
  text-align: center;
  padding: 3rem;
  background: #008742;
  border: 3px solid black;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: rgb(255, 255, 255) 1px 0px 8px;


   @media(max-width: 1024px) {
      width: 90%;
    }

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
    color: #fff;

    > p {
      position: absolute;
      left: 1rem; 
      bottom: -2.7rem;
      color: #b33f10;
    }
  }

  > a {
    text-decoration: none;
     color: #329af1;
     font-weight: 600;
     background: red;
     width: auto;
     border-radius: 12px;
     padding: 2rem;
     background: yellow;
     margin-top: 2rem;
  }

  @media(max-width: 1499px) {
    padding: 3rem 1rem;
  }
`

function YouAtThePark() {
  return (
    <Content id='vocenoparque'>
      <BoxContent>
        <h2>Você no<p>Parque</p></h2>
        <S.BackText>
          Com o objetivo de ampliar o conhecimento socioambiental das populações das
          comunidades com ações educativas lúdicas dentro da Unidade de Conservação do
          Parque Nacional da Tijuca, realizaremos uma série de passeios e atividades ao longo
          de 2023, unindo o lazer, a vivência ambiental na prática e a descoberta de locais
          especiais do PNT. E de quebra você também pode conhecer o Cristo Redentor no
          passeio especial do Trem do Corcovado.
        </S.BackText>
        <S.BackText>
          Inscreva-se aqui e entraremos em contato para agendar as datas das atividades
          comunitárias.
        </S.BackText>
        <a href='https://forms.gle/sCAqAibJr4VHPEVr9'
          rel="noreferrer"
          target="_blank"
        >
          Inscreva-se aqui.
        </a>
      </BoxContent>
    </Content>
  );
}

export default YouAtThePark;
