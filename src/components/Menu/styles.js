import styled from "styled-components";
import {
  ImgFavela
} from '../../assets';

export const Nav = styled.nav`
  padding: .75rem 3rem 0 3rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 4rem;
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
    font-size: 1rem;
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

export const ImgIcon = styled.img`
  margin-left: 1rem;
  width: 18px;
  cursor: pointer;
`;
