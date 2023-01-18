import styled from "styled-components";
import {
  ImgFavela
} from '../../assets';

export const Nav = styled.nav`
  padding: .75rem 3rem 0 3rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media screen and (max-width: 970px) {
    background: pink;
  }
`;

export const Logo = styled.img`
  width: 4rem;
  display: flex;
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 1;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      padding: 1rem 1rem 0 2rem;
      color: #fff;
    }
  }
`;

export const ContentIcon = styled.div`
  padding: 1rem 0 0 2rem;
  display: flex;

  li {
    padding: 0;
    margin: 0;
  }
`;

// export const Ul = styled.ul`
//   display: flex;
//   align-items: center;
//   flex-wrap: wrap;
//   justify-content: end;
// `;

export const Li = styled.li`
  display: flex;

  a {
    font-size: 1rem;
    color: #000;

    // color: ${props => props.currentPage ? '#000' : '#ccc'};
    font-family: HandSean;
    text-decoration: none;
    cursor: pointer;

    span  {
      color: #000;
    }

    :hover  {
      color: #000;
    }

    @media (max-width: 768px) {
      span  {
        display: none;
      }
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
  width: 1.125rem;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-right: 1rem;
    width: 1.563rem;
  }
`;

export const StyledBurger = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 20px;
    z-index: 20;
    display: none;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#fff' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;