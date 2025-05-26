import { Link } from 'react-router-dom';
import Layout from '../../../Layout';

import * as S from './styles';

function ProjectManagementCourse() {
  return (
    <Layout>
      <h2>
        Curso de Gestão em Projetos
      </h2>
      <S.BackText>
        Em três sábados presenciais de Abril realizamos o Curso de Gestão de Projetos do Programa Favela Parque,
        com o objetivo de qualificar os proponentes e configurar a versão final das propostas. A condução dos mestres
        Marcio Ranauro - da Consultoria Saberes - e Gustavo Melo da UFRJ, trouxe conteúdos e ricas informações sobre Objetivos,
        Justificativa, Metas, Cronogramas de Atividades e Orçamento, Indicadores de Resultados e Riscos. A turma participou
        ativamente potencializando o diálogo com questões acerca de suas propostas.
      </S.BackText>

      <S.BackText>
        Os encontros contaram ainda com aluno/as do curso de Psicologia da UFRJ (que vão nos acompanhar durante o curso e
        na execução dos projetos), também com as sólidas colaborações de Cris dos Prazeres, coordenadora do Instituto Precisa
        Ser e dos líderes comunitários André Genival (Prazeres) e nosso anfitrião Nielson Santos (Guararapes). Também de Jaimes
        Villas (membro da Equipe Supervisora) e Caio Fonseca (advogado do Instituto).
      </S.BackText>

      <S.BackText>
        No intervalo dos encontros quinzenais, o Coordenador Charles Siqueira realizou as mentorias com cada grupo para
        sintetizar a aprendizagem do curso e aplicá-la a cada projeto, gerando a proposta final.
      </S.BackText>

      <S.BackText>
        Um longo e exaustivo trabalho, mas recompensador pela qualidade verificada ao final desta etapa.
      </S.BackText>

    </Layout>
  );
}

export default ProjectManagementCourse;
