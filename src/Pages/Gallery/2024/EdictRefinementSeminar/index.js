import Layout from '../../../Layout';
import Photos from './photos';

import * as S from './styles';
import useScrollToTop from '../../../../utils/useScrollToTop';

function EdictRefinementSeminar() {
  useScrollToTop();

  return (
    <Layout>
      <h2>Seminário de Refinamento do Edital</h2>
      <S.BackText>
        Começamos pra valer!
      </S.BackText>

      <S.BackText>
        Em 05 de fevereiro realizamos o Seminário do Edital 2024.
      </S.BackText>

      <S.BackText>
        Dois representantes de cada uma das 20 propostas pré-selecionadas foram reunidos no Salão Nobre do Parque Lage para apresentar-se uns aos outros e entender a dinâmica da Etapa 2.
      </S.BackText>

      <S.BackText>
        Agora começa a etapa formativa quando disponibilizamos conhecimentos variados de Gestão de Projetos Sociais e Ferramentas Digitais de Administração e Comunicação e escrevemos juntos a proposta final de cada um.
      </S.BackText>

      <S.BackText>
        Uma série de encontros presenciais e mentorias on-line levam os grupos ao momento da decisão dos 11 aprovados para acessar recursos do Ciclo 1 (e os próprios coletivos definem as pontuações e regras).
      </S.BackText>

      <S.BackText>
        Terminamos a manhã com um almoço fantástico das mulheres empreendedoras do Cerro-Corá.
      </S.BackText>

      <S.BackText>
        Muito obrigado ao ICMBio e ao Trem do Corcovado pela cessão de espaço e transportes.
      </S.BackText>

      <Photos />

    </Layout>
  );
}

export default EdictRefinementSeminar;
