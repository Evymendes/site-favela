import styled from "styled-components";

export const Figure = styled.figure`
  width: 40%;
  height: 213px;
`;

export const Img = styled.img`
  margin-right: 1rem;
  width: 40%;
  height: 100%;
  max-height: 313px;
  object-fit: contain;
  object-position: left;
`;

export const BackText = styled.p`
  padding-bottom: .75rem;
  width: max-content;
  font-size: 1rem;
  color: var(--color_lightGray);
  font-family: FiraSans;
  line-height: 1.8;
`;
