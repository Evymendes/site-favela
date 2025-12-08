import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #008742 0%, #0076b3 100%);
  padding: 2rem;
  position: relative;
  overflow: hidden;
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.1;
  background-image: 
    repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px);
  animation: ${rotate} 20s linear infinite;
`;

const Content = styled.div`
  max-width: 800px;
  text-align: center;
  z-index: 1;
  animation: ${fadeIn} 1s ease-out;
`;

const IconContainer = styled.div`
  margin-bottom: 2rem;
  animation: ${pulse} 2s ease-in-out infinite;
`;

const Icon = styled.div`
  font-size: 6rem;
  color: #e89f02;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

const Title = styled.h1`
  font-family: 'HandSean', cursive;
  font-size: 3.5rem;
  color: #fdfeff;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Message = styled.p`
  font-family: 'FiraSans', sans-serif;
  font-size: 1.25rem;
  color: #fdfeff;
  line-height: 1.8;
  margin-bottom: 2rem;
  opacity: 0.95;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Decoration = styled.div`
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, transparent, #e89f02, transparent);
  margin: 2rem auto;
  border-radius: 2px;
`;

const Maintenance = () => {
  return (
    <Container>
      <BackgroundPattern />
      <Content>
        <IconContainer>
          <Icon>
            <i className='bx bx-cog'></i>
          </Icon>
        </IconContainer>
        <Title>Em Manutenção</Title>
        <Message>
          Estamos trabalhando para melhorar nossa plataforma e trazer uma experiência ainda melhor para você.
        </Message>
        <Message>
          Em breve estaremos de volta!
        </Message>
        <Decoration />
        <Message style={{ fontSize: '0.9rem', opacity: 0.8 }}>
          Obrigado pela compreensão.
        </Message>
      </Content>
    </Container>
  );
};

export default Maintenance;

