import styled from "styled-components";
import {
  ImgFavela,
} from '../../assets';

export const Nav = styled.nav`
  padding: 0 3rem;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 5.625rem;
  display: flex;
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: end;
`;

export const Li = styled.li`
  display: flex;

  a {
    font-size: 1.125rem;
    color: ${props => props.currentPage ? '#000' : '#ccc'};
    font-family: HandSean;
    text-decoration: none;
    cursor: pointer;

    span  {
      color: #000;
    }

    :hover  {
      color: #000;
    }
  }

  span {
    padding: 0 1rem;
  }
`;

export const Text = styled.p`
  font-size: 1rem;
  max-width: 560px;
`;
