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
        17 coletivos dos Morros do Cerro-Corá, Guararapes, Vila Cândido e Prazeres realizado no último sábado, no Parque Lage.
      </S.BackText>
      <S.BackText>
        A programação teve início com a deslumbrante história do palacete que abriga a Escola de Artes Visuais de onde surgiram gigantes da Arte brasileira. Cuja história de séculos fascina integração entre natureza e arquitetura. Plinio Barboza, do ICMBio, conduziu uma fascinante narrativa e apresentou o Parque Nacional da Tijuca, órgão federal responsável por aquele espaço e promotor do Programa.
      </S.BackText>
      <S.BackText>
        Em seguida Charles Siqueira, Coordenador do Favela Parque detalhou o Programa ao longo da primeira etapa, onde propostas pré-selecionadas desenvolverão suas ideias com mentorias e trocas de experiências, aprendendo fundamentos essenciais a projetos sociais e definindo de maneira participativa e compartilhada os critérios que decidirão o conjunto de aprovados para os recursos de 2025.
      </S.BackText>
      <S.BackText>
        A participação do público fez desta uma das edições mais marcantes. Em seguida todos se apresentaram aos demais. Que emoção ouvir pessoas tão engajadas nas suas comunidades apresentar propostas diversificadas para questões relevantes naquele universo de desafios!
      </S.BackText>
      <S.BackText>
        E o dia ainda reservava mais deslumbres com a apresentação de conceitos fundamentais da Educação Ambiental de Bases Comunitárias que o GEASur, profissionais da UNIRIO, desenvolvem há anos no Rio de Janeiro. Os professores Celso Sanchez e Maria Emília Martins não deram apenas uma aula célebre: encantaram os presentes com a leitura das colaborações entre si e das conexões de cada projeto com os desafios humanos enfrentados hoje e no futuro das gerações. Olhos brilharam ao perceber suas ações integradas aos ODS da ONU: o conjunto de proponentes encontravam conexões com quase todos aqueles indicadores fundamentais à sobrevivência humana!
      </S.BackText>
      <S.BackText>
        Se o Século XXI representa um gigantesco desafio para a humanidade, estamos prontos nas favelas do Rio para dar respostas e melhorar a qualidade de vida das nossas populações, com alegria, criatividade e muita inovação.
      </S.BackText>

      <Photos />

    </Layout>
  );
}

export default EdictRefinementSeminar;
