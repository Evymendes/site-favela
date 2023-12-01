import React, { useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Content = styled.section`
  width: 100%;
  max-width: 1550px;
  height: auto;
  padding: 3rem 0 3rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  position: relative;

  @media(max-width: 1499px) {
    padding: 3rem 1rem;
    flex-direction: column;
  }
`;

const Box = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  border-radius: 5px 40px 6px 40px;
  overflow: hidden;

  .swiper-container {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
  }

  .card {
    width: 100%;
    height: 65vh;
    border-radius: inherit;
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    @media(max-width: 1534px) {
      height: 70vh;
    }

    @media(max-width: 941px) {
      height: 90vh;
    }

    @media(max-width: 800px) {
      height: 90vh;
    }

    @media(max-width: 620px) {
      height: 120vh;
    }

    @media(max-width: 485px) {
      height: 135vh;
    }
  }

  .card .front-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 1s;
  }

  .card .front-content img {
    opacity: 1;
    background-clip: text;
    transition: all 1s cubic-bezier(0.23, 1, 0.320, 1);
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card:hover .front-content img {
    opacity: 0;
  }

  .card .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    gap: 10px;
    color: #e8e8e8;
    padding: 1.3rem 4rem 1.3rem 1.3rem;
    line-height: 1.5;
    border-radius: 5px;
    pointer-events: none;
    transform: translateX(-96%);
    transition: all 1s;
    background: #007aff;
  }

  .card .content .heading {
    font-size: 32px;
    font-weight: 700;

    @media(max-width: 1024px) {
    font-size: 1.8rem;
    line-height: 22px;
    }
  }

  .card:hover .content {
    transform: translateY(0);
  }

  .card:hover .front-content {
    transform: translateX(-30%);
  }

  .card:hover .front-content p {
    opacity: 0;
  }
`;

const BoxContent = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  border-radius: 5px 40px 6px 40px;
  gap: 3rem;

  @media(max-width: 1534px) {
    flex-direction: column;
    height: auto !important;
  }

  @media(max-width: 941px) {
    height: 90vh;
  }

  .swiper-slide {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    @media(max-width: 878px) {
      display: none;
  }
  }

  .swiper {
    width: 100%;

    @media(max-width: 1534px) {
      height: 70vh;
    }

    @media(max-width: 916pxpx) {
      height: 80vh;
    }

    @media(max-width: 878px) {
      display: none;
  }
  }

  @media (max-width: 868px) {
    .swiper {
      display: none;
    }
  }

  .swiper-vertical .swiper-pagination-bullets, .swiper-pagination-vertical.swiper-pagination-bullets {
    top: 50%;

    @media(max-width: 700px) {
      top: 0;
    }
  }

  .swiper-slide .swiper-slide-visible .swiper-slide-fully-visible .swiper-slide-active {
    width: auto !important;
    height: auto !important;
  }

  .swiper-pagination-bullet {
    background: #e89f02;
    position: relative;
    bottom: 0;
    width: 3rem;
    height: 3rem;
  }

  > span {
    width: 30%;
    display: flex;
    flex-direction: column;

    @media(max-width: 1024px) {
      width: 100%;
      margin-bottom: 3rem;
    }

    > h2 {
      color: #000;
      width: auto;
      text-align: start;
      display: flex;
      align-items: center;
      font-weight: 600;
      display: flex;
      position: relative;
      margin-bottom: 5rem;
      font-size: 3rem;

      > p {
        position: absolute;
        left: 1rem; 
        bottom: -2.7rem;
        color: #b33f10;
      }
    }

    > p {
      font-family: FiraSans;
      font-size: 1.5rem;
    }
  }
`;

const ExpandableTextContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px 0 0 0;
  border: 1px solid #ccc;
  background: #0076b3;
  margin-bottom: 20px;
  border-radius: 12px;
  display: none;

  @media(max-width: 878px) {
      display: flex;
      flex-direction: column;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #fff;
  padding: 1rem;
`;

const Image = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 10px;
  overflow: hidden;
  height: ${({ expanded }) => (expanded ? 'auto' : '100px')};
  padding: 0 1rem;
  color: #fff;
`;

const ExpandButton = styled.button`
  background-color: #007aff;
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 0 0 12px 12px;
`;

const ExpandableText = ({ title, image, text }) => {
  const [isExpanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!isExpanded);
  };

  return (
    <ExpandableTextContainer>
      <Title>{title}</Title>
      <Image src={image} alt={title} />
      <Text expanded={isExpanded}>{text}</Text>
      <ExpandButton onClick={handleToggle}>
        {isExpanded ? 'Ver menos' : 'Ver mais'}
      </ExpandButton>
    </ExpandableTextContainer>
  );
};

function YouAtThePark() {
  const slides = [
    {
      title: "Morro dos Prazeres",
      text: `Localizado em Santa Teresa, esse local é um dos mais interessantes da Cidade Maravilhosa, ponto final do
      charmoso Bonde elétrico que vem da Carioca, atravessa os Arcos da Lapa e cruza quase todo o bairro até o
      ponto do Dois Irmãos.

      Em meados dos anos 1940, o Morro começou a ser dominado por algumas casas e, no início, as residências modestas
      eram distantes umas das outras e habitadas, sobretudo, por pessoas de baixo poder aquisitivo. O Censo de 2010 aponta
      2.136 moradores, um número já contestado naquela época por seus moradores que atribuem uma população muito maior.
      Parecem ter razão, já que ainda nos anos 1950, durante o governo federal de Getúlio Vargas, o órgão do Estado que fazia a
      contabilidade de pessoas e habitações no Rio de Janeiro, confirmou pouco mais de mil moradores no Morro dos Prazeres.
      Aguarda-se o resultado do Censo 2022.

      Apesar da vista da cidade que, de fato, dá imenso prazer, o Morro dos Prazeres tem essa denominação por outro motivo.
      O sugestivo nome Prazeres, capaz de evocar ideias pagãs, ironicamente foi inspirado em uma freira. A senhora, que se
      chamava Maria dos Prazeres, era frequentadora do lugar e costumava realizar orações para a população local - destacam
      Inês Garçoni e Sergio Bloch no livro Guia Gastronômico das Favelas do Rio.

      Do alto dos Prazeres, a vista é de arrepiar: Pão de Açúcar, Baía de Guanabara, parte das zonas Norte e Sul, Relógio da
      Central do Brasil e outros pontos da cidade podem ser vistos de lá. Outro atrativo do alto do Morro dos Prazeres é o conhecido
      campo de futebol, reformado recentemente pela Prefeitura do Rio. O “Campão” possibilita lazer e, como em quase todo o Morro,
      uma prazerosa vista de 360 graus aos frequentadores, incluindo a Floresta da Tijuca, o Maracanã e até a Serra dos Órgãos e
      o Dedo de Deus, em dias mais limpos.`,
      image: "https://gustavosirelli.files.wordpress.com/2010/04/morro-dos-prazeres-2.jpg"
    },
    {
      title: "Cerro-Corá, Guararapes e Vila Cândido",
      text: `A leste do Maciço da Tijuca, na bacia do Rio Carioca está a parte alta dos bairros do Cosme Velho e Santa Teresa
      e as favelas Guararapes, Vila Cândido e Cerro-Corá, que formam o hoje denominado “Complexo Guararapes”.
      A Vila Cândido, mais antiga daquelas comunidades, possui essa denominação devido ao senhor Cândido que recebia o
      aluguel dos casarões que alugavam suas dependências, na altura das atuais Ruas Lourenço e Sampaio, no Cosme Velho.
      A ocupação daquela favela data do começo do século XX, aproximadamente, em 1917, mas se expandiu somente após a morte do
      senhor Cândido, com novas moradias erguidas.
      Sua habitação começou a ocorrer em 1930, quando moradores de uma região chamada "Fazendinha" iniciaram a ocupação do local,
      com a permissão dos proprietários. A proprietária, a Senhora Maria Elisa de Oliveira Passos, cobrava uma taxa de ocupação a
      cada morador. Com o tempo, a área foi crescendo demograficamente, pela migração de novos moradores para o local, que na sua
      maioria eram oriundos do Nordeste, Minas Gerais e Espírito Santo.
      No bairro do Cosme Velho, a localização da Fazendinha concentrou a construção das casas mais nobres. Por essa razão, muitas
      famílias foram progressivamente migrando para os Guararapes. A notícia das facilidades encontradas para a ocupação daquela área
      foi se espalhando e novos moradores, amigos e parentes das famílias. Novos conglomerados de barracos foram sendo criados,
      modelando a feição do espaço até torná-lo uma típica favela de encosta. Este recorte apresenta fragmentos paisagísticos
      heterogêneos: floresta em estágios sucessionais diversos (avançado, alterado e em recomposição) protegida em parte pelo
      Parque Nacional da Tijuca e outras áreas protegidas em âmbito municipal; ocorrência esparsa de gramíneas; urbanização com
      padrões diferenciados: lotes urbanizados originários de antigos loteamentos e glebas de grandes dimensões não ocupadas
      em Cosme Velho e Santa Teresa.
      Pela proximidade da zona Sul carioca, do Parque Nacional da Tijuca e da estátua do Cristo Redentor, o Complexo Guararapes é uma
      atração de grande potencial turístico, atividade que gera renda para vários grupos organizados, desde guias a serviços de transporte
      de passageiros.
      Juntas, também pelo Censo de 2010, o conjunto das três comunidades abriga 2.805 pessoas.`,
      image: "https://pbs.twimg.com/media/Ed8dAr4UEAYidOd.jpg"
    }
  ];

  return (
    <Content id="as-comunidades">
      <BoxContent>
        <span>
          <h2>As<p>Comunidades</p></h2>
          <p>Se aventurar pelas ruelas pitorescas do Rio de Janeiro revela não apenas a magnífica paisagem urbana, mas também as histórias vibrantes que permeiam as comunidades locais. Nesta jornada, destacamos dois destinos fascinantes: o Morro dos Prazeres e o Complexo Guararapes.</p>
        </span>
        <Swiper
          direction={'vertical'}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          effect="coverflow"
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
        >
          {slides.map((item, index) => (
            <SwiperSlide key={item.id}>
              <Box key={index}>
                <div className="card">
                  <div className="front-content">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="content">
                    <div className="heading">{item.title}</div>
                    <p>{item.text}</p>
                  </div>
                </div>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
        {slides.map((item, index) => (
          <ExpandableText key={index} title={item.title} image={item.image} text={item.text} />
        ))}
      </BoxContent>
    </Content>
  );
}

export default YouAtThePark;
