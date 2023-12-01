import styled from "styled-components";

export const ContentTexts = styled.div`
  padding-bottom: ${props => props.team ? '2rem' : '3rem'};
 
  @media (max-width: 768px) {
      padding-bottom: ${props => props.team ? '3rem' : '3rem'};
  }
`;

export const BackText = styled.p`
  padding-bottom: .75rem;
  font-size: 1rem;
  color: #fff;
  font-family: FiraSans;
  line-height: 1.8;
`;
