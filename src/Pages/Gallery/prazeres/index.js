import Layout from '../../Layout';

import * as S from './styles';
  
function CommunitiesGalleries() {
  const listCommunities = [
    {
      id: 0,
      name: 'Prazeres',
      route: '/lancamento',
    },
    {
      id: 1,
      name: 'Cerro-Corá',
      route: '/comunidades',
    },
    {
      id: 2,
      name: 'Guararapes/Vila Cândido',
      route: '/comunidades',
    },
  ];

  return (
    <Layout>
      <S.BackText>
        Aqui nesta página você acompanhará o desenvolvimento visual do Programa a partir do seu lançamento.
      </S.BackText>
      <S.Content>
        {listCommunities.map(i => (
          <S.BackText>{i.name}</S.BackText>
        ))}
        -
      </S.Content>
    </Layout>
  );
}
  
export default CommunitiesGalleries;
  

