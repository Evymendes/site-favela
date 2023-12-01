import styled from 'styled-components';
import * as S from './styles';

import Onda from "../../assets/wave-blue.svg"


const Content = styled.div`
  margin-top: -5px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0076b3;
`

const BoxContent = styled.div`
  width: 100%;
  max-width: 1500px;
  padding: 3rem 0;

  > h2 {
    color: #fff;
    margin-bottom: 3rem;
  }

  @media(max-width: 1499px) {
    padding: 3rem 1rem;
    flex-direction: column;
  }
`

const Wave = styled.img`
width: 100vw;
`

function Team() {
  return (
    <>
      <Wave src={Onda} />
      <Content id='equipe'>
        <BoxContent>
          <h2>Equipe</h2>
          <S.BackText>
            O acompanhamento do programa Favela-Parque é composto de duas instâncias:
          </S.BackText>
          <S.ContentTexts>
            <S.BackText>
              <strong>A Equipe Supervisora:</strong>
            </S.BackText>
            <S.BackText>
              Composta por membros do Parque Nacional da Tijuca e da Câmara de Educação
              Ambiental; do Trem do Corcovado e uma liderança das comunidades do
              Guararapes/Vila Cândido, Cerro-Corá e Morro dos Prazeres. Reúne-se regularmente a
              cada três meses, ou sob demandas que surjam ao longo do processo.
            </S.BackText>
          </S.ContentTexts>
          <S.BackText><strong>Equipe de Gestão:</strong></S.BackText>
          <S.BackText>Equipe executora do Programa, composta por:</S.BackText>

          <S.ContentTexts team>
            <S.BackText>
              <strong> Charles Siqueira - </strong> Coordenador
            </S.BackText>
            <S.BackText>
              Morador e membro da Associação de Moradores do Morro dos Prazeres.
              Graduado em Tecnologia em Gestão Ambiental pela Universidade Veiga de Almeida, Rio de Janeiro, Rio de Janeiro.
              Desenvolveu projetos autorais para populações de áreas periféricas da cidade do Rio de Janeiro com a ONG Instituto Cultural Pólen e outras organizações não governamentais, com destaque para o projeto CriaAtivo Film School e Nave Lab CriaAtivo - qualificação profissional e empreendedorismo em áreas de Cinema e economia criativa para centenas de jovens de favelas e bairros periféricos do Rio de Janeiro, desenvolvidos de 2017 a 2021.
              Foi Coordenador da Nave do Conhecimento de Triagem, equipamento de Ciência e Tecnologia da Prefeitura do Rio, com administração da REDEH e do Instituto Rio Cultural, entre os anos de 2010 a 2020.
              Co-produtor do Prêmio de Inovação Comunitária e Coordenador das atividades de Economia Criativa para a Inclusão Social, da Brazil Foundation (Nova York/Rio), entre os anos de 2011 a 2017.
              Conselheiro da Universidade das Quebradas - Projeto de Extensão do Programa Avançado de Cultura Contemporânea da UFRJ, desde 2011.
              Palestrante sobre Estratégias de Economia Criativa para a Inclusão Social.
            </S.BackText>
            <S.BackText>
              WhatsApp: 21 99366-0821
            </S.BackText>
            <S.BackText>
              E-mail: charles.siqueira@precisaser.org
            </S.BackText>
          </S.ContentTexts>
          <S.ContentTexts team>
            <S.BackText>
              <strong>Leonice Paimx - </strong> Mobilizadora da comunidade dos <strong>Guararapes</strong>.
            </S.BackText>
            <S.BackText>
              Diretora da Associação de Moradores dos Guararapes desde 2017.
              Voluntaria no combate à COVID, Primeiros Socorros e Prevenção a Desastres em programa comunitário da Defesa Civil do Rio de Janeiro na comunidade.
              Capacitadora de instrutores da ONG Uma Janela para o Mundo nos morros dos Guararapes, Cerro Corá, Morro Azul e Sumaré, em 1998.
              Agente de Desenvolvimento Comunitário em 2002, pelo Programa Vida Nova do Governo do Rio de Janeiro.
              Multiplicadora do Projeto Jovem Salva Vidas, do HemoRio, em 2002.
              Formadora do Projeto Núcleo de Resiliência Comunitária, da Associação de Moradores.
              Co-Fundadora da Brinquedoteca da Comunidade, em 2021.
            </S.BackText>
            <S.BackText> Telefone: (21) 99808-0608</S.BackText>
          </S.ContentTexts>

          <S.ContentTexts team>
            <S.BackText>
              <strong>Luciane Belmiro - </strong>  Mobilizadora da comunidade do <strong>Cerro-Corá</strong>.
            </S.BackText>
            <S.BackText>
              Formada pela Universidade Federal Rural do Rio de Janeiro pelo curso de Administração de Empresas.
              Cria da comunidade do Cerro-Corá, onde faz parte desde 2013 do coletivo Cerro e Moradores em Movimento
              que se uniu com o objetivo de organizar o movimento popular e trazer cultura e conhecimento para os moradores.
              Co-fundadora da Biblioteca local e do grupo de Pré-Vestibular que atua na comunidade desde 2014 e também do
              Museu de Memórias.do Guararapes.
            </S.BackText>
            <S.BackText>
              Telefone: (21) 98348-7096
            </S.BackText>
          </S.ContentTexts>

          <S.BackText>
            <strong>Geyza França - </strong> Mobilizador da comunidade <strong>Morro dos Prazeres</strong>.
          </S.BackText>
          <S.BackText>
            Graduando em Relações Internacionais pela Universidade Veiga de Almeida. Atua como colaborador da Agência de Notícias das
            Favelas, onde escreve matérias sobre a realidade de favelas cariocas desde 2020.
            Morador do Morro dos Prazeres atuou no planejamento e execução de ações no projeto social da Escolinha de Arte e Reforço
            Escolar (2015 a 2019) e na mesma comunidade foi voluntário no combate à COVID (2020 a 2022).
            Parceiro do Instituto Fechando o Ciclo (ações de limpezas de praia, praças e conscientização de crianças e adultos sobre
            o meio ambiente) de 2021 a 2023. Foi Gerente do Hostel Santa Teresa Guest House, de 2017 a 2021.
          </S.BackText>
          <S.BackText>
            Telefone: (21) 97446-1013
          </S.BackText>
        </BoxContent>
      </Content>
    </>
  );
}

export default Team;
