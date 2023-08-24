import { Link } from 'react-router-dom';
import Layout from '../../Layout';
import Photos from './photos';

import * as S from '../globalPhotoStyle';
  
function DefinitionOfSupportedProjects() {  
  return (
    <Layout>
      <S.Title>
        Definição dos Projetos Apoiados em 2023
      </S.Title>

      <S.Text>
        Chegamos ao fim da etapa de formação do/as proponentes!
        Um dia abençoado, clima agradável, espaço incrível e uma turma pra lá de animada foram os destaques de nosso último 
        final de semana coletivo. Agora pra definir os projetos aprovados para uso dos recursos do primeiro edital do Programa 
        Favela Parque.
      </S.Text>

      <S.Text>
        A manhã teve início com exposição de Marcio Ranauro sobre o incrível avanço que cada proponente imprimiu: de uma ideia 
        inicial a um projeto descrito em detalhes e a composição de uma “apostila” com 15 projetos e seus elementos. 
        Prontos para que cada coletivo siga aplicando para outros editais.
      </S.Text>

      <S.Text>
        Charles Siqueira, coordenador do Programa, parabenizou a todo/as e agradeceu a presença de Viviane Lasmar, Chefe do 
        Parque Nacional da Tijuca, de Selma Magalhães, que cedeu o espaço do Casarão dos Prazeres e da turma de Psicologia 
        da UFRJ, que acompanha a sistematização de nosso Programa.
      </S.Text>

      <S.Text>
        Em seguida, cada proponente teve dois minutos para defender sua proposta perante os jurados (os demais proponentes, 
        os membros da Equipe Supervisora e a Equipe de Gestão). Terminada esta etapa, os coletivos se espalharam pela área do 
        Casarão (e suas belas vistas) e fecharam seus rankings individuais.
      </S.Text>

      <S.Text>
        Votos computados pela Coordenação, com acompanhamento de Jaime Vilas (Equipe de Supervisão), chegamos ao ranking final 
        que definiu 11 projetos aprovados.
      </S.Text>

      <S.Text>
        É sempre triste estabelecer aqueles que ficam sem recursos, mas admirável o fairplay de todos diante dos resultados e 
        do legítimo processo que construímos para chegar àquele momento. A Coordenação animou o grupo com a perspectiva de 
        encontrarmos maneiras de valorização dos resultados obtidos também por aqueles coletivos, o que seguiremos fazendo em 
        sintonia com o Conselho Consultivo Comunitário criado a partir do grupo de WhatsApp com todo/as o/as participantes 
        pré-selecionado/as.
      </S.Text>

      <Photos />

    </Layout>
  );
}
  
export default DefinitionOfSupportedProjects;
  