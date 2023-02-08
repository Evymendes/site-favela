import styled from "styled-components";

export const Figure = styled.figure`
  width: 40%;
  height: 213px;
`;

export const Img = styled.img`
  margin: 0 1rem 1rem 0;
  max-width: 40%;
  max-height: 313px;
  object-fit: contain;
  object-position: top left;
`;

export const BackText = styled.p`
  padding-top: 2rem;
  padding-bottom: .75rem;
  width: max-content;
  font-size: 1.25rem;
  color: var(--color_black);
  font-family: FiraSans;
  line-height: 1.8;
`;
