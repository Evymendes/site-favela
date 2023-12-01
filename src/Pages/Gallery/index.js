import { Link } from 'react-router-dom';

import * as S from './styles';
import styled from 'styled-components';

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
  max-width: 1500px;
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 3rem;
  color: #fff;
  background: #b33f10;
  border-radius: 12px;

  @media(max-width: 1499px) {
    padding: 3rem 1rem;
    flex-direction: column;
  }

  @media(max-width: 768px) {
    width: 90%;
  }
`;

function Gallery() {

  return (
    <Content id='galeria'>
      <BoxContent>
        <div>
          <h2>Galeria</h2>
          <S.BackText>
            Seja muito bem-vindo/a para uma viagem visual pelas etapas de nosso Programa em 2023!
            <br />
            Clique em algum desses momentos e conheça detalhes de nossas atividades.
          </S.BackText>
        </div>
        <S.Ol>
          <S.List><Link to='/lancamento-do-programa'>Lançamento do Programa</Link></S.List>
          <S.List><Link to='/seminario-de-refinamento'>Seminário de Refinamento do Edital</Link></S.List>
          <S.List><Link to='/curso-de-gestao'>Curso de Gestão em Projetos</Link></S.List>
          <S.List><Link to='/definicao-dos-projetos'>Definição dos Projetos Apoiados em 2023</Link></S.List>
          <S.List><Link to='/apresentando-os-projetos'>Apresentando os projetos às comunidades</Link></S.List>
          <S.List><Link to='/lancamento-do-livro'>Lançamento do Livro-Síntese do Programa Favela Parque</Link></S.List>
          <S.List><Link to='/projetos-em-andamento'>Projetos em andamento</Link></S.List>
          <S.List><a href='#vocenoparque'>Você no parque!</a></S.List>
        </S.Ol>
      </BoxContent>
    </Content>
  );
}

export default Gallery;
