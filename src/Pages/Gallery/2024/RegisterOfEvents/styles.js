import styled from "styled-components";

export const Content = styled.div`
  background: pink;
  padding: 0 0 0 3rem;
`;

export const BackText = styled.p`
  padding-bottom: .75rem;
  font-size: 1rem;
  color: var(--color_black);
  font-family: FiraSans;
  line-height: 1.5;

  span {
    font-family: HandSean;
    font-size: 1.25rem;
    color: var(--color_lightGray);
  }
`;

export const Ol = styled.ol`
  padding-top: 2.5rem;
`;

export const List = styled.li`
  padding-bottom: .4rem;
  font-size: 1rem;
  color: var(--color_black);
  font-family: FiraSans;
  list-style-position: inside;
`;

export const Subtitle = styled.h4`
  font-family: HandSean;
  /* font-size: 1rem; */
  color: var(--color_lightGray);
  padding-bottom: .75rem;
  line-height: 1.5;
`
