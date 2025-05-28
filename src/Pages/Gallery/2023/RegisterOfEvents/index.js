import Layout from '../../../Layout';

import * as S from './styles';
import useScrollToTop from '../../../../utils/useScrollToTop';

function RegisterOfEvents() {
  useScrollToTop();
  return (
    <Layout>
      <h2>
        Registro dos Eventos
      </h2>

      <S.BackText>
        Pra celebrar o nosso primeiro ano de atividades, uma série de registros dos eventos de encerramento do Programa Favela Parque nas comunidades.
      </S.BackText>
      <S.BackText>
        No Cerro - Corá, lançamos o Museu Memórias do Cerro - Corá.As crianças participaram da oficina de Contação de Histórias(que reapresentava a Biblioteca do Cerro aos pequenos); e os jovens, adultos e idosos conheceram a nova exposição permanente.As fotos, reorganizadas pelas décadas de transformação da comunidade emocionaram muita gente que se reconheceu e viajou pelas transformações do espaço físico, social e cultural daquele morro.
        A semana seguinte foi de celebração no Morro dos Prazeres no Dia da Árvore, um chamamento simbólico às temáticas ambientais do Programa Favela.
      </S.BackText>
      <S.BackText>
        No meio de uma onda de calor, juntamos a criançada dos projetos e adultos da comunidade para celebrar o fechamento do ciclo se refrescando com um festival de picolés na quadra.Contamos com uma apresentação do grupo de Capoeira do Mestre Cascavel e seus alunos dos projetos apoiados.
      </S.BackText>
      <S.BackText>
        Já o domingo de atividades no Morro dos Guararapes, ocorreu em torno da Biblioteca e da abertura do Festival GuaraRaps, com apresentações de capoeira, freestyle de rima e Taekwondo e distribuição de flores e poesias.
      </S.BackText>
    </Layout>
  );
}

export default RegisterOfEvents;