import { Link } from 'react-router-dom';
import Layout from '../Layout';

import * as S from './styles';
  
function Gallery() {
  const listCommunities = [
    {
      id: 0,
      name: 'Prazeres',
      route: '/galeria-prazeres',
    },
    {
      id: 1,
      name: 'Cerro-Corá',
      route: '/galeria-cerro-cora',
    },
    {
      id: 2,
      name: 'Guararapes/Vila Cândido',
      route: '/galeria-guararapes-e-vila-candido',
    },
  ];
  
  return (
    <Layout>
      <S.Content>
      {/* <S.BackText>
         Lançamento do Programa nas comunidades:
      </S.BackText>
      <S.BackText>
        Neste fim de semana, o Cerro-Corá, a Vila Cândido, o Guararapes e o Prazeres receberam o lançamento do Programa
        Favela-Parque, uma iniciativa de educação socioambiental do Parque Nacional da Tijuca.   
        A inauguração foi marcada com a realização de eventos multiculturais e o lançamento do edital que vai escolher projetos
        de moradores das quatro comunidades. 
        Em dois dias de muito sol e calor recorde no Rio de Janeiro, os lançamentos foram um refresco pro corpo e pro espírito, 
        tanto pelos lanches e sucos proporcionados pelo programa quanto pela beleza das atrações culturais.
      </S.BackText>
      <S.BackText>
        No Morro dos Prazeres tivemos a discotecagem do DJ 2B e a apresentação de Marcos Bandeira, fundador e diretor do Grupo 
        Origens que há 12 anos incentiva a arte e a cultura, pelo resgate das danças de matrizes africanas. 
      </S.BackText>
      <S.BackText>
        No Cerro-Corá, mais uma vez, o DJ 2B animou a turma com uma trilha de pop e funk “das antigas”. Já no Guararapes, as 
        atrações foram o grupo Desbravadores, um coletivo juvenil no estilo “Escoteiros", da Igreja Adventista; e o saxofonista 
        Leonardo Brasil, ator, rapper e produtor cultural, fundador e integrante do coletivo Piratas da Guanabara, que promove 
        a inclusão social através do movimento de arte na rua.
      </S.BackText>
      <S.BackText>
        Veja a seguir alguns desses momentos.
      </S.BackText>
      {listCommunities.map(i => (
        <Link to={i.route}>
          <S.BackText link>{i.name}</S.BackText>
        </Link>
      ))} */}
      <S.BackText>
        Seja muito bem-vindo/a para uma viagem visual pelas etapas de nosso Programa em 2023!
      </S.BackText>
      <S.BackText>
        Clique em algum desses momentos e conheça detalhes de nossas atividades.
      </S.BackText>
      <S.Ol>
        <S.List>Lançamento do Programa</S.List>
        <S.List>Seminário de Refinamento do Edital</S.List>
        <S.List>Curso de Gestão em Projetos</S.List>
        <S.List>Definição dos Projetos Apoiados em 2023</S.List>
        <S.List>Apresentando os projetos às comunidades</S.List>
        <S.List>Lançamento do Livro-Síntese do Programa Favela Parque</S.List>
        <S.List>Você no parque!</S.List>
      </S.Ol>
      </S.Content>
    </Layout>
  );
}
  
export default Gallery;
  