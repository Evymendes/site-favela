import React, { useState } from 'react';
import styled from 'styled-components';
import communitiesData from '../../data/communities.json';

const Content = styled.section`
  width: 100%;
  max-width: 1440px;
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


const BoxContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 5px 40px 6px 40px;
  gap: 3rem;

  @media(max-width: 1534px) {
    height: auto !important;
  }

  > span {
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
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px 0 0 0;
  border: 1px solid #ccc;
  background: #0076b3;
  margin-bottom: 20px;
  border-radius: 12px;
  height: fit-content;

  @media(max-width: 878px) {
      
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
  max-height: ${({ expanded }) => (expanded ? 'none' : '100px')};
  padding: 0 1rem;
  color: #fff;
  transition: max-height 0.3s ease-in-out;
`;

const ExpandButton = styled.button`
  background-color: #007aff;
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 0 0 12px 12px;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SlideContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  gap: 2rem;
  
  @media(max-width: 941px) {
    flex-direction: column;
  }
`

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
  const { communities } = communitiesData;

  return (
    <Content id="as-comunidades">
      <BoxContent>
        <span>
          <h2>As<p>Comunidades</p></h2>
          <p>Se aventurar pelas ruelas pitorescas do Rio de Janeiro revela não apenas a magnífica paisagem urbana, mas também as histórias vibrantes que permeiam as comunidades locais. Nesta jornada, destacamos dois destinos fascinantes: o Morro dos Prazeres e o Complexo Guararapes.</p>
        </span>
        <SlideContainer>
          {communities.map((item, index) => (
            <ExpandableText key={index} title={item.title} image={item.image} text={item.text} />
          ))}
        </SlideContainer>
      </BoxContent>
    </Content>
  );
}

export default YouAtThePark;
