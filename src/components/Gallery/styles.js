import styled from "styled-components";

export const Figure = styled.figure`
  width: 40%;
  height: 213px;
`;

export const ContainerPhoto = styled.div`
  max-width: 780px;
`;

export const ContentPhoto = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  
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

export const Img = styled.img`
  // max-width: ${props => props.type === 'standing' ? `calc(100% / 3 - 18px)` : '48%'};
  max-width: ${props => props.type === 'standing' ? `calc(50% - 17px)` : '48%'};
  // max-height: 313px;
  // object-fit: contain;
  object-fit: cover;
  object-position: top left;

  @media (max-width: 800px) {
    max-width: 100%;
  }
`;
