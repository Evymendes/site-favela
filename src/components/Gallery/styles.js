import styled from "styled-components";

export const ImG = styled.figure`
  width: 25%;
  height: 213px;
`;

export const ContainerPhoto = styled.div`
  width: 100%;
`;

export const ContentPhoto = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  
  @media (max-width: 820px) {
    flex-direction: column;
  }
`;

export const BackText = styled.p`
  padding-top: 2rem;
  padding-bottom: .75rem;
  font-size: ${props => props.subtitle ? '1rem' : '1.25rem'};
  color: var(--color_black);
  font-family: FiraSans;
`;

export const FigureImG = styled.figure`
  overflow: hidden;
  position: relative;
  width: 25%;
  height: 280px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    img {
      transform: scale(1.2); /* Ajuste o valor conforme necessário */
    }
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Alterado para cover para preencher a área, ajuste conforme necessário */
  object-position: center center; /* Ajuste conforme necessário */
  transition: transform 0.3s ease; /* Adiciona um efeito de transição suave */

  @media (max-width: 800px) {
    max-width: 100%;
  }
`;
