import Layout from '../../../Layout';
import Photos from './photos';

import * as S from './styles';
import useScrollToTop from '../../../../utils/useScrollToTop';

function AprovedProjects() {
  useScrollToTop();

  return (
    <Layout>
      <h2>Aprovados 2024</h2>
      <S.BackText>
        Dia de Gala do Programa Favela Parque 2024!
      </S.BackText>
      <S.BackText>
        Chegou o momento de definir os projetos que receberão recursos financeiros do Edital 2024 e a turma esteve toda reunida mais uma vez no Casarão dos Prazeres para essa data tão especial.
      </S.BackText>
      <S.BackText>
        Após um delicioso café da manhã integrador o evento foi aberto pelo coordenador, Charles Siqueira, que ressaltou o quanto são especiais aqueles coletivos em sua atuação nos territórios e destacou que todos são vencedores, por isso aquele momento não define quem é melhor do que outro, mas apenas quem - pela limitação do orçamento anual - vai aplicar recursos após conquistar os demais coletivos.
      </S.BackText>
      <S.BackText>
        Em seguida Marcio Ranauro, da Consultoria Saberes, reafirmou o valor do investimento em conhecimento que o Programa ampliou esse ano e os coletivos aproveitaram muito bem. Cris dos Prazeres, vice-presidente do Instituto Precisa Ser falou do orgulho daquela instituição de tocar um projeto com justiça e coparticipação de todo/as. Gleiciane Oliveira, representando o Parque Nacional da Tijuca celebrou o segundo ano de execução do Programa e seu caráter estratégico para a administração do Parque.
      </S.BackText>
      <S.BackText>
        Em seguida, o momento das Defesas de cada projeto. Este ano com a novidade de inserir vídeos ou apresentação ao longo de 2 minutos e meio de duração total da apresentação.
      </S.BackText>
      <S.BackText>
        Finalizada esta etapa, os coletivos se reuniram para retificar ou reafirmar o ranking previamente estabelecido na leitura de cada projeto e chegar ao resultado. Também avaliar o Programa Favela Parque nesta primeira etapa (Formativa) finalizada.
      </S.BackText>
      <S.BackText>
        Enquanto eram contabilizados os rankings com o apoio de Jaime Villas (Equipe de Supervisão), a equipe do Diretório de Psicologia da UFRJ explicou aos presentes as dinâmicas do Projeto de Extensão que desenvolvemos em parceria e o momento mais esperado foi precedido de novo agradecimento à participação de todos pelo Coordenação do Programa, que ressaltou o valor individual de cada um.
      </S.BackText>

      <Photos />

    </Layout>
  );
}

export default AprovedProjects;
