import { Link } from 'react-router-dom';
import Layout from '../../../Layout';

import * as S from './styles';
import useScrollToTop from '../../../../utils/useScrollToTop';

function Gallery() {
  useScrollToTop();
  const listCommunities = [
    {
      id: 0,
      name: 'Prazeres',
      route: '/lancamento-do-programa-prazeres',
    },
    {
      id: 1,
      name: 'Cerro-Corá',
      route: '/lancamento-do-programa-cerro-cora',
    },
    {
      id: 2,
      name: 'Guararapes/Vila Cândido',
      route: '/lancamento-do-programa-guararapes-e-vila-candido',
    },
  ];

  return (
    <Layout>
      <h2>
        Lançamento do Programa nas comunidades:
      </h2>
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
      ))}
    </Layout>
  );
}

export default Gallery;
