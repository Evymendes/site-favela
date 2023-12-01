import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';


const Content = styled.section`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: fff;
  z-index: 1;
  overflow: hidden;
`;

const BoxContent = styled.div`
  width: 100%;
  max-width: 1500px;
  padding: 3rem 2rem 3rem 2rem;
`

const TextBold = styled.p`
  font-weight: 600;
  margin-bottom: 1.2rem;
`

const Text = styled.p`
  margin-bottom: 1rem;

  > span {
    border-bottom: 1px solid #000;
  }
`

const BoxBack = styled.div`
padding-top: 2rem;
width: 100%;
max-width: 1500px;
> div {
  max-width: 246px;
  > a {
    align-items: center;
    gap: 0.7rem;
    text-decoration: none;
    color: #000;
    font-weight: 600;
    display: ${(props) => (!props.showLink ? 'flex' : 'none')};
    margin-bottom: 5rem;

  }
}
`

const index = () => {
  return (
    <Content>
      <BoxContent>
        <BoxBack>
          <div>
            <Link to="/recursos">
              <div>
                <i class='bx bxs-chevron-left' ></i>
              </div>
              Voltar
            </Link>
          </div>
        </BoxBack>
        <TextBold>Perguntas Mais Frequentes</TextBold>
        <Text>LEIA e RELEIA com cuidado este Edital para entender o Programa antes de enviar a sua proposta. Se ainda tiver dúvidas, veja se ela se enquadra em algum dos questionamentos abaixo.</Text>
        <br />

        <Text>1-<span> Se o meu projeto já tiver em andamento posso participar?</span></Text>
        <Text>Sim. Ao descrever sua ideia você deve estabelecer o que pretende com o recurso: abrir novas turmas; apoiar turmas que existem; realizar outros eventos etc. Sempre definindo objetivos a serem alcançados e o usos dos recursos no período de cada Ciclo.</Text>
        <br />
        <Text>2-<span>Preciso ter tudo definido logo na inscrição?</span></Text>
        <Text>Não. Você precisa apresentar as informações fundamentais para a análise da sua proposta. Ou seja: definir qual o valor total da proposta; com o que ele será gasto (ter feito um orçamento para saber a realidade dos custos de pessoal, de material etc.). Precisa saber quais as atividades que ocorrerão (aulas disso ou daquilo, atividade tal e tal etc.). Qual o cronograma de execução (todos os dias, por tantos meses? Duas vezes na semana? Tantas horas por dia? etc.). Enfim, a visão geral você precisa apresentar e, se for pré-selecionado para o Curso de Gestão, você desenvolve os detalhes naquele momento, com nosso apoio.<br />
          Mas é preciso informar quanto você está propondo receber e para quê e como as ações se desenvolvem nos Ciclos, de maneira independente (se for mais do R$ 5 mil a sua proposta).
        </Text>
        <br />

        <Text>3-<span>Quero fazer um evento. Preciso que ele seja por pelo menos dois meses do Ciclo 1?</span></Text>
        <Text>Não. Ele pode estar enquadrado no tempo dele, com uma ou mais edições, observando a questão dos Ciclos (o custo e o período de dois meses): Se for até 5 mil as edições podem enquadrado no período de dois meses, mas em qualquer momento de abril a setembro. O primeiro recurso de qualquer projeto é sempre de R$ 5 mil. Apenas depois de executado todo ou parte do recurso (de acordo com o cronograma apresentado) é que pode ser avaliada a pertinência de um novo Ciclo.</Text>
        <br />

        <Text>4-<span>O meu evento é de 5 mil mas vai ocorrer depois dos dois meses iniciais. Posso concorrer?</span></Text>
        <Text>Sim. A primeira aprovação é para utilizar R$ 5 mil num período de até dois meses. Mesmo que esses dois meses sejam depois do Ciclo inicial dos outros.</Text>
        <br />

        <Text>5-<span>Meu grupo não tem tempo para participar de atividades além do projeto em si.</span></Text>
        <Text>A decisão é sua. Há atividades obrigatórias ao longo do período que precisam ter, ao menos, um representante com conhecimento do projeto e/ou do coletivo. Divulgaremos antecipadamente as datas, mas é necessário que os grupos possuam uma capacidade de organização interna e disponibilidade que permita a participação.</Text>
        <br />

        <Text>6-<span>Preciso ter nota fiscal para receber os recursos?</span></Text>
        <Text>Sim. Mas, caso nenhum dos integrantes seja MEI (Microempreendedor Individual) ou possua outro tipo de CNPJ compatível com a natureza de suas atividades, é possível fazer parcerias com outros.</Text>
        <br />

        <Text>7-<span>Não sei se consigo organizar minha Proposta nessa dinâmica de Ciclos. Como faço?</span></Text>
        <Text>Procure inscrever seu projeto logo nas semanas iniciais para ter tempo de agendar o apoio das Mobilizadoras e da Coordenação na organização desse aspecto.</Text>
        <br />

        <Text>8-<span>Acho melhor não dizer que tenho apoiadores pra não diminuir chances.</span></Text>
        <Text>Não aja assim. Ter ou não apoiadores não aumenta nem diminui as chances de aprovação, mas possibilita ter um entendimento melhor da sua dinâmica para facilitar a execução.</Text>
        <br />

        <Text>9-<span>A minha iniciativa é individual. Posso participar?</span></Text>
        <Text>Não. O Programa visa apoiar coletivos. Caso você identifique que outras pessoas podem somar com sua iniciativa deve confirmar esses vínculos antes e se inscrever como coletivo.</Text>
        <br />

        <Text>10-<span>Meu Projeto quer usar R$ 5 mil em meses diferentes de Abril e Maio (ou seja além do bimestre inicial) e gostaria de ter R$ 10 mil. Como faço?</span></Text>
        <Text>Você vai apresentar a sua Proposta para o uso dos R$ 5 mil no período que for do seu interesse (com começo, meio e fim) e continuará sendo recurso e atividade do chamado Ciclo 1, mesmo após Maio. Mas terá incluído na Proposta o período e atividades dos outros R$ 5 mil (Ciclo 2). No final de Maio você fará a prestação de contas do que ocorreu até lá (Ciclo 1). Se for um dos 6 aprovados para um Ciclo 2 pode receber mais R$ 5 mil e prestar contas na execução final (limitada a setembro). Se não for aprovado para mais um Ciclo, vai realizar as atividades e utilizar o restante do recurso inicial, prestando contas em seguida.
        </Text>
      </BoxContent>
    </Content>
  )
}

export default index