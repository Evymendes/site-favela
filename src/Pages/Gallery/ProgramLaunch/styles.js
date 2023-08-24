import styled from "styled-components";

export const Content = styled.div`
  padding: 0 0 0 3rem;
  
  a {
    p {
      color: var(--color_blue);
    }
  }
`;

export const Title = styled.h1`
  padding-bottom: .75rem;
  font-size: 1rem;
  color: var(--color_black);
  font-family: FiraSans;
  font-weight: bold;
  line-height: 1.5;
`;

export const Text = styled.p`
  padding-bottom: .75rem;
  font-size: 1rem;
  color: var(--color_black);
  font-family: FiraSans;
  line-height: 1.5;
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
