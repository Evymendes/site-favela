import Layout from '../Layout';
import FileEdital from '../../files/EditaldeAcessoaRecursos2023.pdf';

import * as S from './styles';
  
function Notice() {

  const renderNotice = () => (
    <>
      <S.NoticeText>O Edital de Acesso a Recursos 2023 superou nossas expectativas!</S.NoticeText>

      <S.NoticeText space>
        Para chegarmos nas comunidades não poupamos esforços: para além dos murais Favela-Parque, 
        banners volantes, reuniões e encontros de divulgação percorremos todas as ruas, becos e vielas identificando 
        locais de aglomeração de pessoas, afixando anúncios e conversando muito, ao longo de 44 dias de inscrições abertas.
      </S.NoticeText>

      <S.NoticeText space>
        Essa capilaridade de informação e agentes resultou em 40 propostas para avaliação do Comitê de Seleção e 
        Avaliação e a certeza de estabelecer um processo justo e igualitário de informação e oportunidades para todo/as das 
        comunidades.
      </S.NoticeText>

      <S.NoticeText space>Obrigado a cada um/a que desenvolveu e inscreveu sua ideia. </S.NoticeText>

      <S.NoticeText space>
        Inscreva-se nas atividades <a href={'/voce-no-parque'}>“Você no Parque”</a>, aproveite atividades e passeios para o Parque e o Trem do 
        Corcovado e curta nossas redes sociais para estar sempre colaborando conosco e sabendo de oportunidades.
      </S.NoticeText>

      <S.NoticeText space>
        Não ter sido selecionado não indica nosso afastamento: o Programa Favela-Parque é construído e reconstruído 
        permanentemente com a participação, sugestão e críticas de todo/as.  Momentos e oportunidades serão construídos em 
        conjunto e queremos continuar tendo a sua presença e colaboração.
      </S.NoticeText>

      <S.NoticeText space>
        Nessa primeira edição do Programa, diante de tantas propostas dos próprios comunitários e/ou de relações 
        já constituídas internamente, pesou muito o apoio ao empoderamento local - objetivo maior do Programa Favela-Parque. 
        Apresentamos então os 20 proponentes que foram pré-selecionados para a etapa que definirá os Projetos efetivamente 
        aprovados para acessar os recursos de 2023:
      </S.NoticeText>

      <S.NoticeTitle>Atividades obrigatórias:</S.NoticeTitle>
      <S.NoticeText noSpace>Seminário: 25 de Março (9h às 15h) e </S.NoticeText>
      <S.NoticeText noSpace>Curso de Gestão de Projetos: 01, 15 e 29 de abril (9h30 às 13h).</S.NoticeText>

      <S.NoticeTitle>Cerro-Corá:</S.NoticeTitle>
      <S.UL>
        <li>Moradores em Movimento</li>
        <li>Gestão de Resíduos</li>
        <li>Favela Sustentável</li>
        <li>Roda Cultural 2C</li>
        <li>Cozinha Solidária</li>
        <li>Curso Profissionalizante de Barbeiro</li>
      </S.UL>

      <S.NoticeTitle>Guararapes e Vila Cândido:</S.NoticeTitle>
      <S.UL>
        <li>Clube Desbravadores</li>
        <li>Guararapes FC</li>
        <li>Marketing Digital</li>
        <li>Feira Cultural dos Guararapes</li>
        <li>Potencializa</li>
        <li>Capoeira</li>
        <li>Comunidade Saudável</li>
        <li>Vila Pondé Tem Arte</li>
      </S.UL>

      <S.NoticeTitle>Morro dos Prazeres:</S.NoticeTitle>
      <S.UL>
        <li>Horta Comunitária</li>
        <li>Educação no Morro</li>
        <li>Pré-Vestibular</li>
        <li>Jardim dos Prazeres</li>
        <li>Top Charme</li>
        <li>Baú Alfabetização</li>
      </S.UL>
      <S.NoticeText paddingBottom>
        Se você está nesta lista, pelo que contate com urgência a coordenação do Programa para alinharmos detalhes de 
        transporte para o Seminário neste sábado (99366-0821 - Charles).
      </S.NoticeText>
    </>
  )

  return (
    <Layout>
      {renderNotice()}
      <S.BackText>
        <a href={FileEdital} download>Se quiser conhecer o Edital 2023: Baixe aqui.</a>
      </S.BackText>
    </Layout>
  );
}
  
export default Notice;
  