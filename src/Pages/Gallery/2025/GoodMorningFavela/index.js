import Layout from '../../../Layout';
import Photos from './photos';

import * as S from './styles';
import useScrollToTop from '../../../../utils/useScrollToTop';

function GoodMorningFavela() {
  useScrollToTop();

  return (
    <Layout>
      <h2>Bom Dia Favela</h2>
      <S.BackText>
        O Bom Dia Favela, programa da TV Bandeirantes dedicado ao cotidiano das comunidades do Brasil fez um registro primoroso do impacto que o Programa Favela Parque vem fazendo nas comunidades do Cerro-Corá, Guararapes/Vila Cândido e Prazeres.
      </S.BackText>
      <S.BackText>
      </S.BackText>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/kCDvWabU6Ok?si=Cs642r29LVJYV80E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <Photos />
    </Layout>
  );
}

export default GoodMorningFavela;
