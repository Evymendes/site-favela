import styled from "styled-components";
import {
  ImgFavela,
} from '../../assets';

export const Nav = styled.nav`
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 110px;
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
    font-size: 18px;
    color: ${props => props.currentPage ? '#000' : '#ccc'};
    text-decoration: none;
    cursor: pointer;

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
