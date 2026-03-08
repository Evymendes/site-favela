import Layout from '../../../Layout';
import Photos from './photos';

import * as S from './styles';
import useScrollToTop from '../../../../utils/useScrollToTop';

function AprovedProjects() {
  useScrollToTop();

  return (
    <Layout>
      <h2>Aprovados 2025</h2>
      <S.BackText>
        Após um café da manhã caprichado de boas-vindas, o Coordenador, Charles Siqueira, ressaltou a diferença que aqueles atores sociais fazem nas favelas e com seu conjunto tão especial de propostas. Lembrou que o fim daquela etapa para uns não diminui sua grandeza apenas faz um recorte de acesso a recursos financeiros limitados e segue disponibilizando apoios e o itinerário formativo do Programa a todos os 15 semifinalistas.
      </S.BackText>
      <S.BackText>
        Selma Magalhães apresentou o Casarão dos Prazeres - equipamento da Prefeitura do Rio que sempre nos acolhe - tão importante na história da Educação naquelas favelas.
      </S.BackText>
      <S.BackText>
        Isaura Bredariol, Analista Ambiental do ICMBio, resumiu a essência do Programa Favela Parque e seu caráter colaborativo, comprometido com a boa gestão dos recursos e a valorização dos agentes sociais daquele entorno do Parque Nacional da Tijuca.
      </S.BackText>
      <S.BackText>
        Cris dos Prazeres, Vice-presidente do Instituto Precisa Ser, orgulhou-se de ser ativista social em companhia de tanta gente comprometida, engajada e valorosa.
      </S.BackText>
      <S.BackText>
        Em seguida, cada projeto apresentou suas defesas finais e os coletivos debateram e registraram seus votos.
      </S.BackText>
      <S.BackText>
        Enquanto a coordenação e a equipe de Supervisão computavam os lançamentos, ocorreu mais uma atividade primorosa de Educação Ambiental com a equipe do GEASur/UNIRIO. Discutindo a obra de Leonardo Boff "Saber Cuidar", o grupo refletiu sobre a ética do Cuidado como base para uma abordagem de Educação Ambiental contextualizando aqueles princípios aos seus projetos. Também apresentou-se a obra "As três ecologias" de Félix Guattari, propondo uma atividade na qual os coletivos articularam as três ecologias (dimensões ambiental, mental e social) em cada um dos projetos, desenhando uma logomarca ou sintetizando frases que trouxessem as reflexões sobre aqueles elementos nas suas propostas de ação.
      </S.BackText>
      <S.BackText>
        Ao final do dia, apresentou-se o resultado obtido com as votações dos Coletivos, da Equipe de Gestão e de Supervisão, que definiu os 13 projetos aprovados em 2025.
      </S.BackText>
      <S.BackText>
        Após o Carnaval, começa o ano-novo!
      </S.BackText>

      <Photos />

    </Layout>
  );
}

export default AprovedProjects;
