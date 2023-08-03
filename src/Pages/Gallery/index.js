import { Link } from 'react-router-dom';
import Layout from '../Layout';

import * as S from './styles';
  
function Gallery() {
  
  return (
    <Layout>
      <S.BackText>
        Seja muito bem-vindo/a para uma viagem visual pelas etapas de nosso Programa em 2023!
      </S.BackText>
      <S.BackText>
        Clique em algum desses momentos e conheça detalhes de nossas atividades.
      </S.BackText>
      <S.Ol>
        <S.List><Link to='/lancamento-do-programa'>Lançamento do Programa</Link></S.List>
        <S.List><Link to='/Seminário-de-Refinamento'>Seminário de Refinamento do Edita</Link>l</S.List>
        <S.List><Link to='/curso-de-gestao'>Curso de Gestão em Projetos</Link></S.List>
        <S.List><Link to='/definicao-dos-projetos'>Definição dos Projetos Apoiados em 2023</Link></S.List>
        <S.List><Link to='/apresentando-os-projetos'>Apresentando os projetos às comunidades</Link></S.List>
        <S.List><Link to='/lancamento-do-livro'>Lançamento do Livro-Síntese do Programa Favela Parque</Link></S.List>
        <S.List><Link to='/voce-no-parque'>Você no parque!</Link></S.List>
      </S.Ol>
    </Layout>
  );
}
  
export default Gallery;
  