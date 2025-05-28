import styled from "styled-components";

export const Content = styled.div`
  background: pink;
  padding: 0 0 0 3rem;
`;

export const BackText = styled.p`
  padding-top: 1rem;
  padding-bottom: 2.75rem;
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
  justify-content: center;
  gap: 1rem;
  overflow-x: scroll;
  padding: 0 1rem 1rem 1rem;
  width: 100vw;
`;

export const List = styled.li`
  font-size: 1rem;
  color: #329af1;
  font-family: FiraSans;
  list-style-position: inside;
  background: #fff;
  border-radius: 12px;
  list-style: none;
  text-align: center;
  box-shadow: -1px 2px 3px #329af1;
  width: 250px;
  height: 250px;
  overflow: hidden;
 

  > a {
    text-decoration: none;
    color: #329af1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    position: relative;
    overflow: hidden;
    width: 100%;

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 12px;
      filter: blur(1.5rem);
      transition: filter 0.5s ease;
    }

    > p {
      position: absolute;
      transition: opacity 0.3s ease;
      font-weight: 600;
      width: 90%;
    }
  }

  &:hover {
    background: #329af1;
    color: #fff;
    box-shadow: -1px 2px 3px #329af1;
    transition: all 0.3s ease;

    > a {
      color: #fff;

      > img {
        filter: blur(0);
      }

      /* > p {
        opacity: 0;
      } */
    }
  }
`;
