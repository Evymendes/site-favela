import styled from "styled-components";

export const Content = styled.div`
  background: pink;
  padding: 0 0 0 3rem;
`;

export const BackText = styled.p`
  padding-top: 1rem;
  padding-bottom: .75rem;
  font-size: 1rem;
  color: #fff;
  font-family: FiraSans;
  line-height: 1.5;
  width: 100%;

  @media(max-width: 1499px) {
    width: 100%;
  }
`;

export const Ol = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const List = styled.li`
  font-size: 1rem;
  color: #329af1;
  font-family: FiraSans;
  list-style-position: inside;
  padding: 0.7rem 0.5rem;
  background: #fff;
  border-radius: 12px;

  > a {
    text-decoration: none;
    color: #329af1;
  }

  &:hover {
    background: #329af1;
    color: #fff;

    > a {
    color: #fff;
    }
  }
`;
