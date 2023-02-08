import styled from "styled-components";

export const Content = styled.div`
  display: flex;
`;

export const BackText = styled.p`
  padding-bottom: .75rem;
  font-size: 1rem;
  color: ${props => props.link ? 'var(--color_blue)' : 'var(--color_lightGray)'};
  font-family: FiraSans;
  line-height: 1.8;
`;
