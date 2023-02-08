import Layout from '../Layout';
import FileEdital from '../../files/EditaldeAcessoaRecursos2023.pdf';

import * as S from './styles';
  
function Notice() {

  const renderNotice = () => (
    <>
      <S.NoticeTitle>
        Programa Favela-Parque
      </S.NoticeTitle>
      <S.NoticeTitle>
        Edital de Acesso a Recursos para as comunidades do Cerro-Corá, Guararapes/Vila
      </S.NoticeTitle>
      <S.NoticeTitle>
        Cândido e Prazeres
      </S.NoticeTitle>
      <S.NoticeText>
        Edição 2023
      </S.NoticeText>
      <S.NoticeText>
        O Instituto Precisa Ser, organização não-governamental em atividade no Morro dos Prazeres
        desde 2017 e instituição executora do Programa Favela Parque, realiza chamada local para
        iniciativas das comunidades Cerro-Corá, Guararapes/Vila Cândido e Prazeres de acesso a
        recursos daquele Programa, conforme descrito no Regulamento a seguir.
      </S.NoticeText>
      <S.NoticeText>
        O Programa Favela Parque é parte do Programa Socioambiental do Parque Nacional da
        Tijuca e é gerido com recursos do contrato de concessão do Trem do Corcovado, conforme
        item 18.3 de seu projeto básico. Tem o objetivo de apoiar o Desenvolvimento Local
        Sustentável dos Morros Cerro-Corá, Guararapes/Vila Cândido e Prazeres ampliando suas
        relações com o Parque Nacional da Tijuca e fortalecendo as organizações comunitárias e o
        protagonismo social através de atividades de geração de renda, saúde, educação, cultura e
        ações ambientais engajadas e fomentando melhoria da qualidade de vida da população
        residente.
      </S.NoticeText>
      <S.NoticeText>
        Vem sendo desenvolvido desde 2018, quando foi realizado o Diagnóstico Socioambiental
        Participativo em parceria com o/as moradore/as daquelas favelas e cujos resultados
        propuseram o estabelecimento de uma linha de ação permanente, anual e contínua de
        recursos para o desenvolvimento e implementação de estratégias de melhoria da qualidade
        de vida da população residente naquelas comunidades, de maneira colaborativa e adequada
        às realidades ali verificadas e aos objetivos do Programa.
      </S.NoticeText>
      <S.NoticeText>
        Informações mais detalhadas sobre o Programa e sua etapa anterior podem ser obtidas
        baixando os arquivos PDF no site do Programa.
      </S.NoticeText>
      <S.NoticeText>
        Este Edital de Acesso tem o objetivo de selecionar iniciativas a serem apoiadas com
        <strong>recursos técnicos e financeiros, qualificando agentes e possibilitando o
        desenvolvimento de projetos comunitários que ocorram e beneficiem as comunidades
        do Cerro-Corá, Guararapes/Vila Cândido e Prazeres no período de Março a Agosto de
        2023</strong>. Todas estão no entorno do Parque Nacional da Tijuca, entre os bairros do Cosme Velho
        e Santa Teresa, no município do Rio de Janeiro.
      </S.NoticeText>
      <S.NoticeTitle>
        Quem pode se inscrever:
      </S.NoticeTitle>
      <S.UL>
        <li>
          Indivíduos organizados em grupos de, ao menos, 2 pessoas maiores de 18 anos.
        </li>
        <li>
          Coletivos informais e Instituições que atuem em, pelo menos, uma das comunidades listadas acima e/ou desejem desenvolver projetos ali.
        </li>
      </S.UL>
      <S.NoticeTitle>
        Quem não pode inscrever propostas para este Edital:
      </S.NoticeTitle>
      <S.UL>
        <li>
          Lideranças comunitárias membros da Equipe de Supervisão.
        </li>
        <li>
          Membros da Equipe de Gestão do Programa.
        </li>
        <li>
          Membros das instituições representantes do Comitê de Seleção e Avaliação.
        </li>
      </S.UL>
      <S.NoticeText>
        A qualquer momento em que se verifique a ocorrência de qualquer das situações acima, a
        Proposta ou Projeto será desclassificada e interrompida.
      </S.NoticeText>
      <S.NoticeTitle>
        Definições relevantes:
      </S.NoticeTitle>
      <S.NoticeText>
        <S.UnderlineText underline> Proposta:</S.UnderlineText>
        Ideia básica apresentada no momento da inscrição.
      </S.NoticeText>
      <S.NoticeText>
        <S.UnderlineText underline> Projeto:</S.UnderlineText>
        Formulação derivada da Proposta, aperfeiçoada durante o Curso de Gestão.
      </S.NoticeText>
      <S.NoticeText>
        <S.UnderlineText underline> Propostas Selecionadas:</S.UnderlineText>
        Aquelas selecionadas após a inscrição e que participarão da etapa
        seguinte de seleção (Seminário de Refinamento do Edital e Curso de Gestão de Projetos). 
      </S.NoticeText>
        <S.NoticeText>
        <S.UnderlineText underline> Projetos Aprovados:</S.UnderlineText>
        Aqueles que efetivamente receberão recursos do Edital, após o Curso de Gestão.
      </S.NoticeText>
      <S.NoticeText>
        <S.UnderlineText underline>Comitê de Seleção e Avaliação:</S.UnderlineText>
        Conjunto de responsáveis por todas as decisões oriundas
        deste Edital aqui tratadas ou derivadas de questões não contempladas até o momento. Será do processo e suas 
        decisões serão soberanas. Composto pela Equipe de Gestão do Programa (Coordenador e um/a mobilizador/a 
        comunitário/a das comunidades envolvidas) e os representantes da Equipe de Supervisão do contrato do Programa.
      </S.NoticeText>
      <S.NoticeTitle>
        Dinâmica Resumida:
      </S.NoticeTitle>
      <S.Ol>
        <li>
          <S.NoticeText>Data de Inscrição:</S.NoticeText>
          <S.NoticeText>
            Após a leitura atenta desse Edital, interessados avaliam se cumprem os requisitos para
            participação e reúnem a documentação necessária e a Proposta a ser submetida e
            inscrevem suas Propostas no prazo estipulado: 04 de Fevereiro a 19 de Março de 2023.
          </S.NoticeText>
        </li>
        <li>
          <S.NoticeText>Seminário:</S.NoticeText>
          <S.NoticeText>
            Após anúncio das Propostas selecionadas no pós-inscrição, que ocorrerá em 21 de Março,
            será realizado um Seminário para refinamento das regras do Edital não contempladas até
            aqui, incluindo os critérios de aprovação final e do modelo de participação. O Seminário
            ocorrerá no dia 25 de março e a participação será pré-requisito para a continuidade do apoio.
          </S.NoticeText>
        </li>
        <li>
          <S.NoticeText>Curso de Gestão de Projetos:</S.NoticeText>
          <S.NoticeText>
            A seguir, os responsáveis pelas propostas participarão de um Curso de Gestão de Projetos
            com atividades presenciais nas manhãs de sábados dias 01, 15 e 29 de Abril e remotas para
            o desenvolvimento de suas Propostas nos Projetos Finais. A participação no Curso será prérequisito para a continuidade do apoio.
          </S.NoticeText>
        </li>
        <li>
        <S.NoticeText>Projetos Aprovados:</S.NoticeText>
        <S.NoticeText>
          Ao final do Curso de Gestão haverá a definição dos Projetos efetivamente aprovados para
          receberem recursos financeiros nesta edição do Programa Favela Parque. Em 03 de maio
          será tornada pública a lista de Projetos Aprovados. Em 06 e 07 de Maio ocorrerão os eventos
          locais de celebração e apresentação dos Projetos às comunidades.
        </S.NoticeText>
        </li>
        <li>
          <S.NoticeText>Realização dos Projetos:</S.NoticeText>
          <S.NoticeText>
            Os Projetos deverão ser realizados entre 22 de Maio e 20 de Agosto e os repasses de
            recursos ocorrerão em princípio nos dias 24 de Maio (50%), 24 de Julho (40%) e ao final das
            entregas (10%). O pagamento da segunda parcela do recurso estará condicionado à
            execução e prestação de contas satisfatória da primeira fase do projeto. Outras propostas
            de repasse podem ser apresentadas e serão devidamente avaliadas conforme planejamento
            apresentado.
          </S.NoticeText>
        </li>
        <li>
          <S.NoticeText>Prestação de Contas:</S.NoticeText>
          <S.NoticeText>
            A prestação de contas da parcela inicial e breve relato das atividades do Projeto na primeira
            fase ocorrerão até dia 19 de Julho. A prestação de contas e Relatório Final deverão ser
            entregues até dia 27 de Agosto.
          </S.NoticeText>
        </li>
        <li>
        <S.NoticeText>Resultados Finais:</S.NoticeText>
        <S.NoticeText>
          Apresentações dos resultados às comunidades ocorrerão nos dias 02 e 03 de Setembro com
          participação dos representantes dos Projetos.
        </S.NoticeText>
        </li>
      </S.Ol>
      <S.NoticeTitle>
        Quais áreas temáticas de projetos são possíveis de enquadramento neste Edital:
      </S.NoticeTitle>
      <S.UL>
        <li>Educação;</li>
        <li>Economia solidária;</li>
        <li>Ações, Campanhas e Atividades de saúde;</li>
        <li>Gestão de resíduos;</li>
        <li>Inserção cultural;</li>
        <li>Atividades esportivas associadas a processos educativos;</li>
        <li>Realização de cursos, reforço escolar e/ou palestras;</li>
        <li>
          Eventos culturais, rodas de música, publicações de memórias ou histórias das comunidades e exposições, 
          associadas a processos educativos ou de organização comunitária; 
        </li>
        <li>
          Melhoria de infraestrutura de espaços comunitários (de acordo com critérios legais);
          Projetos ambientais de reflorestamento e conservação da biodiversidade, recuperação
          dos rios, jardins suspensos e horta comunitária;
        </li>
        <li> Promoção da igualdade racial nas políticas ambientais; </li>
        <li> Empoderamento feminino para atuação no território; </li>
        <li> Comunicação comunitária com fins inclusivos/educativos; </li>
        <li> Outros afins à temática socioambiental. </li>
      </S.UL>
      <S.NoticeTitle>
        Quantas Propostas serão apoiadas efetivamente?
      </S.NoticeTitle>
      <S.NoticeText>
        Os valores aplicados no conjunto de Projetos aprovados pelo primeiro Edital de Repasse de
        Recursos será de R$ 100.000,00 (Cem Mil Reais). Neste momento o Edital não indicará a
        quantidade de Projetos a serem realizados nas comunidades, nem quanto será destinado a
        cada um. Essa definição ocorrerá após o período de inscrição, a partir do conjunto de
        Propostas e valores verificados sendo, preferencialmente, uma discussão realizada de
        maneira participativa pelos integrantes do Seminário de Refinamento do Edital ou pelo
        Comitê de Seleção e Avaliação (caso aquele/as participantes não cheguem a denominadores
        comuns), considerando ainda um equilíbrio proporcional de distribuição de recursos pelas
        comunidades e pertinência de temáticas abrangidas.
      </S.NoticeText>
    <S.NoticeText>
      Em caso de coletivos ou instituições que desejem apresentar mais de uma proposta, cada
      uma delas deverá indicar representantes e objetivos distintos para o seu desenvolvimento
      em todas as etapas (da inscrição à realização), de maneira independente uma da outra.
    </S.NoticeText>
    <S.NoticeText>
      Ressaltamos ainda que se uma Proposta representar parte de uma ação continuada,
      permanente (ou seja, já em andamento ou com futura continuidade) ou parte de um projeto
      maior com outros apoiadores e recursos, a ideia deve descrever objetivamente quais serão
      as ações, indicadores e custos capazes de execução, avaliação e prestação de contas
      durante o período estipulado neste Edital.
    </S.NoticeText>
    <S.NoticeText>
      Ao final do Curso de Gestão os Projetos serão reavaliados observando sua executabilidade
      nas condições deste edital e o cumprimento dos demais requisitos aqui descritos para então
      haver a definição final do número de projetos apoiados e respectivos valores de apoio. 
    </S.NoticeText>
    <S.NoticeTitle>
      Qual o valor das Propostas Aprovadas?
    </S.NoticeTitle>
    <S.NoticeText>
      As Propostas deverão estar enquadradas até o valor máximo de R$ 10.000,00 (Dez mil
      Reais) para o repasse financeiro das etapas previstas na proposição. 
    </S.NoticeText>
    <S.NoticeTitle>
      Período e Forma de Inscrição de Propostas:
    </S.NoticeTitle>
    <S.NoticeText>
      O período de inscrição será de <strong>04 de Fevereiro a 19 de Março de 2023</strong> (às 23h59m),
      exclusivamente através do preenchimento de formulário próprio no site do Programa. Serão
      solicitadas as seguintes informações básicas acerca de sua proposta:
    </S.NoticeText>
    <S.Ol>
      <li>Nome da Proposta</li>
      <li>Nome da Comunidade</li>
      <li>Área Temática (Múltipla escolha)</li>
      <li>
        Proponentes: Nomes, contatos e minibio dos responsáveis pela proposta (falem um
      pouco sobre vocês: o histórico dos responsáveis, seu envolvimento com a comunidade, etc.)</li>
      <li>Idem do coletivo</li>
      <li>Proposta: Identifica algum problema que seu projeto tenta resolver? O que vai fazer?
      Como? Com quem?</li>
     <li>Justificativa: Por que acha que seu projeto é importante para a comunidade?</li>
      <li>Cronograma de Atividades: Detalhamento das ações que serão executadas sequencialmente por datas estimadas.</li>
      <li>Orçamento: Como vão ser utilizados os recursos (bens, produtos e serviços adquiridos e outros tipos de custeio 
        com valores estimados)</li>
      <li>
        Há parceiros na execução dessa Proposta? Cite-os e identifique a forma de
        participação de cada (Troca de conhecimento, cessão de espaço para execução, outros recursos
        financeiros, etc)
      </li>
      <li>Resultados finais esperados.</li>
      <li>Como você ficou sabendo do Programa (Múltipla escolha)?</li>
    </S.Ol>
    <S.NoticeText>
      O objetivo da etapa de seleção de Propostas é identificar relevâncias, consistências e
      capacidade de realização final. Uma vez selecionada, sua Proposta será desenvolvida em
      conjunto com a equipe de mentores do Curso de Gestão de Projetos, em Abril de 2023.
      Assim, desejamos ter entre as Propostas inscritas desde ideias de grupos já experientes
      como de novos agentes que desejam promover transformações em suas comunidades,
      mesmo sem experiências na elaboração de Projetos.
    </S.NoticeText>
    <S.NoticeText>
      Outras informações e/ou dúvidas poderão ser obtidas em contato com a Coordenação do Programa, 
      pelo WhatsApp: (21) 99366-0821, ou com o/a Mobilizador/a de sua comunidade:
    </S.NoticeText>
    <S.NoticeText>Cerro-Corá | Luciane Medeiros | 98348-7096</S.NoticeText>
    <S.NoticeText>Guararapes | Leonice Paimx | 99808-0608</S.NoticeText>
    <S.NoticeText>Vila Cândido | Graciele Teixeira | 99865-6346</S.NoticeText>
    <S.NoticeText>Prazeres | Jacson Lima | 96531-7978</S.NoticeText>
    <S.NoticeText>
      Se precisar de ajuda para escrever sua proposta, busque o/a Mobilizador/a da sua comunidade.
    </S.NoticeText>
    <S.NoticeTitle>
      Definição de Propostas Selecionadas Pós-Inscrição
    </S.NoticeTitle>
    <S.NoticeText>
      A seleção pós-inscrição ocorrerá até o dia 21 de Março, quando serão divulgadas as 20
      Propostas selecionadas para o Seminário de Refinamento do Edital e o Curso de Gestão de
      Projetos.
    </S.NoticeText>
    <S.NoticeText>
      Um dos principais objetivos do Programa Favela-Parque é estabelecer-se como um processo
      transparente, participativo e desenvolvido com as lideranças comunitárias, instituições locais
      e a própria população das comunidades. Também objetiva tornar-se uma referência como
      modelo de valorização dos saberes locais que reconhece e estimula a busca de seus
      moradores pelo melhor desenvolvimento das comunidades, através de visão e estratégias
      próprias para superação de desafios que enfrentam. Ao mesmo tempo, busca a participação
      igualitária, maximizando os processos de divulgação, comunicação e avaliação efetivos de
      maneira a evitar privilégios para qualquer comunidade, áreas ou grupos locais em detrimento
      de outros.
    </S.NoticeText>
    <S.NoticeText>
      Uma vez avaliada a necessária capacidade de realização da ideia, a intenção deste
      Programa é selecionar até 20 Propostas para debaterem as etapas posteriores do Edital,
      revendo e refinando-o no Seminário e preparando, em conjunto, os critérios definitivos tanto
      para a participação no Curso de Gestão quanto para a aprovação dos Projetos que receberão
      os recursos daquele ano. Sempre valorizando a relação com o Parque Nacional da Tijuca e
      sua conservação, melhorando e adaptando as edições posteriores do Programa FavelaParque e seus Editais à identidade das comunidades.
    </S.NoticeText>
    <S.NoticeText>Há dois momentos previstos para a atuação do Comitê de Seleção e Avaliação:</S.NoticeText>

    <S.Ol>
      <li>A definição das Propostas selecionadas para a etapa seguinte ao pós-inscrição (o Seminário e o Curso);</li>
      <li> A definição dos aprovados para acesso aos recursos daquele ano. Neste caso, o
      Comitê será acionado soberanamente apenas no caso de não haver comum acordo
      entre o/as participantes do Curso de Gestão de Projetos.</li>
    </S.Ol>

    <S.NoticeText>
      Esta equipe vai elaborar um ranking das Propostas inscritas, pontuando-as de acordo com
      os seguintes critérios:
    </S.NoticeText>
    <S.Ol>
      <li><strong>Objetividade da Proposta:</strong> a ideia destacada apresenta visão e organização iniciais
      para sua elaboração e desenvolvimento nas etapas posteriores?
      </li>
      <li><strong>Relevância para a comunidade e objetivos do Programa:</strong> apresenta alguma
      questão importante para o desenvolvimento daquela comunidade e/ou sua
      população? Identifica possível solução, ainda que parcial, para algum problema?</li>
      <li><strong>Capacidade de execução:</strong> o/as proponentes demonstram interesse, capacidade e
      conhecimento para desenvolver as ações do projeto? Têm um cronograma coerente?
      Os gastos são compatíveis com os recursos a serem disponibilizados?</li>
    </S.Ol>
    <S.NoticeText>
      Apurada a pontuação de cada Proposta, estará formado o conjunto de participantes por
      comunidade no Seminário de Refinamento e no Curso de Gestão de Projetos.
      Importante ressaltar que esse ranking será feito por comunidade (Cerro-Corá,
      Guararapes/Vila Cândido e Prazeres) para buscar uma distribuição coerente de Propostas
      por comunidades, tal como:</S.NoticeText>
    <S.NoticeText><S.UnderlineText>Cerro-Corá e Prazeres:</S.UnderlineText> até 6 Propostas para cada comunidade.</S.NoticeText>
    <S.NoticeText><S.UnderlineText>Guararapes/Vila Cândido:</S.UnderlineText> até 8 Propostas.</S.NoticeText>
    <S.NoticeTitle>Seminário de Refinamento do Edital</S.NoticeTitle>
    <S.NoticeText>
      É prevista a realização em período integral (de 9 às 16h) do dia 25 de Março de 2023 do
      Seminário de Refinamento do Edital do Programa Favela Parque.</S.NoticeText>
    <S.NoticeText>
      Essa etapa é intermediária entre o conjunto de Propostas pré-selecionadas e aquelas que
      serão efetivamente Projetos aprovados após o Curso de Gestão. Assim, todas as Propostas
      participantes do Seminário participarão do Curso, mas <S.UnderlineText>nem todas</S.UnderlineText> utilizarão os recursos
      financeiros disponíveis nesta edição do Programa Favela Parque.
    </S.NoticeText>
    <S.NoticeText>
      A participação integral no Seminário é obrigatória a dois integrantes de cada Proposta e o
      não atendimento desta regra ensejará sua desclassificação. Em caso de desistência de um
      dos integrantes inscritos para o Seminário, será possível efetuar a troca de integrante.
    </S.NoticeText>
    <S.NoticeText>
      Durante o Seminário serão debatidos e aprovados em conjunto aspectos, questões e
      sugestões para a maior eficácia do Edital nesta e em futuras edições; além das regras para
      o funcionamento do Curso de Gestão, que serão apresentadas pela Equipe de Gestão do
      Programa. Entre elas estarão:
    </S.NoticeText>

    <S.UL>
      <li> Definição dos Critérios de Aprovação após o Curso.</li>
      <li>Garantia da mesma proporcionalidade entre as comunidades, diante da realidade de
    propostas e valores apresentados nas Propostas e o recurso total deste ano.</li>
      <li>Dinâmicas de execução das tarefas do Curso de Gestão.</li>
      <li>Indicadores de Avaliação da participação dos proponentes.</li>
      <li>Consequências de possíveis ausência de participantes e não cumprimento de
    tarefas durante o Curso.</li>
      <li>Encaminhamento de banco dos projetos que cumprirem os critérios mas não forem
    contemplados para apoio naquela edição.</li>
      <li>Possíveis interações de Propostas similares entre as comunidades.</li>
      <li>Critérios para recebimento de recursos e Prestação de Contas, observadas as
    devidas garantias legais.</li>
    </S.UL>
    <S.NoticeText>
      Importante ressaltar que, sempre que se estabeleça a elaboração de rankings ou votações
      em qualquer etapa, cada Proposta/Projeto terá direito a uma manifestação (ou seja,
      independente do tamanho do grupo proponente seu peso será igual aos demais). Os
      participantes do Seminário poderão propor outras questões relevantes para essa etapa do
      Favela-Parque que julgarem pertinentes.
    </S.NoticeText>
    <S.NoticeTitle>
      Curso de Gestão de Projetos
    </S.NoticeTitle>
    <S.NoticeText>
      Nos dias 01, 15 e 29 de Abril (sábados intervalados), das 9 às 13h será realizado o Curso de
      Gestão de Projetos, com a mentoria de profissionais da Consultoria de Projetos
      Socioambientais Saberes e da Coordenação do Programa Favela-Parque.
    </S.NoticeText>
    <S.UnderlineText>Será obrigatória:</S.UnderlineText>
    <S.Ol>
      <li>A participação dos integrantes do grupo (pelo menos um, preferencialmente dois) a
    cada dia, do início ao fim das atividades.</li>
      <li>A realização das tarefas intermediárias de elaboração dos projetos que ocorrerão com
    mentoria virtual ou presencial a ser agendada com cada proposta entre uma quinzena
    e outra.</li>
    </S.Ol>
    <S.NoticeText>Nesta etapa as Propostas se tornam Projetos, elaborando suas metodologias a partir dos
    seguintes conteúdos:</S.NoticeText>
    <S.NoticeText>
      Dia 1: Reflexão Inicial/Objetivos/Relevância/Indicadores de Avaliação do Impacto.
    </S.NoticeText>
    <S.NoticeText>
      Dia 2: Cronograma/Orçamento/Registro/Prestação de Contas/Ética.
    </S.NoticeText>
    <S.NoticeText>
      Dia 3: Leitura e defesa dos Projetos finalizados e definição de aprovados com base nos critérios elencados no Seminário 
      e na avaliação coletiva.
    </S.NoticeText>
    <S.NoticeText>
      Mais uma vez ressaltando um dos objetivos do Programa Favela Parque: dar protagonismo
      aos moradores das comunidades em instâncias decisórias dos processos que envolvem este
      Programa em 2023 e nos anos seguintes. Assim, intencionamos que o/as próprio/as
      participantes do Curso de Gestão (além da Equipe de Gestão e do Comitê de Seleção e
      Avaliação) definam, após as defesas dos Projetos, quais serão apoiados a cada ano. Pode
      ainda haver a participação de representantes de instituições e convidados para auxiliar nessa
      definição. Critérios e mecanismos dessa regulamentação também serão desenvolvidos de
      maneira participativa e autoral pelo/as integrantes do Seminário de Refinação ocorrido antes
    </S.NoticeText>
    <S.NoticeTitle>Considerações finais</S.NoticeTitle>
    <S.NoticeText>
      Questões derivadas deste Edital e não tratadas aqui serão deliberadas pelo Comitê de
      Seleção e Avaliação do Edital do Programa Favela-Parque e sua decisão será soberana.
    </S.NoticeText>
    <S.NoticeText>Acesse aqui o formulário e inscreva sua ideia
    <a href='https://forms.gle/rGfepK7cy9LJmQSu8.'
      rel="noreferrer" target="_blank"> https://forms.gle/rGfepK7cy9LJmQSu8.</a> Você
      receberá um e-mail com as respostas que deu ao formulário e isso confirma sua inscrição.
      No caso de enviar mais de uma vez a mesma Proposta, será considerada apenas a última
      enviada. Ficaremos muito felizes de recebê-la!
    </S.NoticeText>
    </>
  )

  return (
    <Layout>
      <S.BackText>
        O Edital de Acesso a Recursos 2023 é a primeira iniciativa do Programa Favela-
        Parque.
      </S.BackText>
      <S.BackText>
        Ao longo de 2023 teremos ainda o Edital de Fortalecimento Comunitário
        (voltado para coletivos já organizados e permanentes nas comunidades) e atividades
        socioambientais de aprofundamento da relação do Parque com as comunidades e
        vice-versa.
      </S.BackText>
      <S.BackText>
        Esta primeira ação visa identificar propostas de interesse comunitário, qualificar seus
        proponentes e ações e financiar as atividades ao final do processo.
      </S.BackText>
      <S.BackText>
      <a href={FileEdital} download>Baixe aqui o Edital 2023.</a>
      </S.BackText>

      {renderNotice()}
    </Layout>
  );
}
  
export default Notice;
  