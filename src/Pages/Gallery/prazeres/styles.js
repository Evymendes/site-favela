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

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const BackText = styled.p`
  padding-top: 2rem;
  padding-bottom: .75rem;
  font-size: 1.25rem;
  color: var(--color_black);
  font-family: FiraSans;
`;
