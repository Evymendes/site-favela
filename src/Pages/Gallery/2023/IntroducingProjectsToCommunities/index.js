import { Link } from 'react-router-dom';
import Layout from '../../../Layout';
import Photos from './photos';

import * as S from './styles';

function IntroducingProjectsToCommunities() {
  return (
    <Layout>
      <h2>
        Apresentando os projetos às comunidades
      </h2>

      <S.BackText>
        Voltamos às comunidades para celebrar o Programa Favela-Parque!
      </S.BackText>

      <S.BackText>
        Num final de semana pra lá de festivo celebramos o conjunto de aprovados com moradore/as do Morro dos Prazeres e
        Cerro-Corá (no sábado, dia 20/5) e do Morro dos Guararapes/Vila Cândido (no domingo, 21/5).
      </S.BackText>

      <S.BackText>
        Nos Prazeres, atividades educativas voltadas para crianças e suas responsáveis, na quadra dos Prazeres pra conhecer as
        iniciativas em suas práticas. Os projetos “Educação no Morro dos Prazeres” e “Baú-AlfabetizAção” fizeram contação de
        histórias, distribuição de revistas e colagem com temas como Prevenção ao Bullying e um painel “O que Vejo das janelas
        do Morro”, além de um Bingo de Matemática com ingressos para o Trem do Corcovado. A moradora e ex-aluna Lorenna Krisha do
        Pré-Vestibular Social deu um depoimento emocionante sobre sua trajetória de aspirante a formada no curso de Ciências da
        Computação da UERJ. E o lanche desenvolvido pelo “Coletivo Mudha: Horta e Jardim” trouxe alimentos integrais e nutritivos
        para todo mundo e distribuiu mudas de espécies aromáticas e temperos.
      </S.BackText>

      <S.BackText>
        Atração especial, o Clube dos Desbravadores apresentou a unidade de Santa Teresa e convidou crianças e jovens para
        suas atividades. O projeto Top Charme, não contemplado nessa edição, mostrou sua grandeza alegrando nossa manhã com
        músicas inspiradas e ensinando a criançada as artes do DJ. Mais uma vez presente, o subprefeito do Centro (Alberto
        Szafran, vizinho dos Prazeres) segue acompanhando as iniciativas para identificar sinergias nos projetos que agora
        partem para sua execução.
      </S.BackText>

      <S.BackText space>
        À tarde, no Cerro-Corá, nossa atividade também foi especial. A turma do projeto “Atividades Esportivas Integradas”
        realizou a primeira etapa do torneio de integração entre as comunidades do Cerro e Guararapes. As proponentes do
        “Cozinha Solidária” prepararam um super cachorro-quente e junto com os presentes finalizaram as sobremesas: cupcakes
        e pirulitos de chocolate que fizeram muito sucesso. Os “Moradores em Movimento” deram início à pintura de um mural na
        quadra e divulgaram as atividades do Museu e da Biblioteca; e a turma do “Gestão de Resíduos” também apresentou seu
        projeto e cuidou da limpeza da quadra. O Clube dos Desbravadores, fez nova apresentação para captar alunos para a
        unidade do Silvestre.
      </S.BackText>

      <S.BackText>
        Já no domingo a festa foi nos Guararapes. Na quadra do Cantão fechamos o torneio com os jogos de semifinal e final.
        Do time campeão, o “Listrado”, veio o melhor Artilheiro (Gabriel) e do segundo colocado, o “Cruz”, o goleiro destaque
        (Lucas). Os quatro donos dos troféus e medalhas.
      </S.BackText>

      <S.BackText>
        No Largo do 20, o projeto “Feira Cultural” apresentou a Biblioteca dos Guararapes, sede de sua iniciativa e parte
        importante também para as iniciativas de reforço escolar do “Potencializando”. Mais uma vez tivemos apresentação dos
        projetos “Atividades Esportivas Integradas” e “Desbravadores” cujas sedes ficam naquela comunidade mas envolvem crianças e jovens dali e do Cerro.
      </S.BackText>

      <S.BackText>
        Competindo com o cachorro-quente, as receitas do “Coletivo Mudha: Horta e Jardim” mais uma vez fizeram surpreendente
        sucesso entre as crianças com sua alimentação nutritiva e saudável e a turma do “Top Charme” mais uma vez arrasou na
        seleção musical.
      </S.BackText>

      <S.BackText>
        Dias de integração de comunidades e projetos que ficarão na memória de todo/as nós!
      </S.BackText>

      <Photos />

    </Layout>
  );
}

export default IntroducingProjectsToCommunities;
