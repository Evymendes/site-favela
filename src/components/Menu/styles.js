import styled, {css} from "styled-components";

export const Header = styled.header`
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
  background: #fff;
  box-shadow: rgb(255, 255, 255) 1px 0px 8px;
  z-index: 2;

`;

export const Nav = styled.nav`
  max-width: 1440px;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1519px) {
    margin: auto;
    padding: 0;
    width: 90%;
  }
`;

export const Logo = styled.img`
  width: 7rem;
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: flex-end;
  z-index: 2;
  
  @media (max-width: 1168px) {
    padding-top: 3.5rem;
    flex-flow: column nowrap;
    align-items: flex-start;
    background-color: var(--color_green);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    transition: transform 0.3s ease-in-out;

    li {
      padding: 1rem 1rem 0 2rem;
      color: #fff;
    }
  }
`;

export const ContentIcon = styled.div`
  display: flex;
  
  li {
    padding: 0;
  }

  > span {
   font-size: 1rem;
    color: #000;
    font-family: HandSean;
    padding-left: 1rem;
}
  
  @media (max-width: 1168px) {
    padding: 1rem 0 0 2rem;
  }
`;

export const Li = styled.li`
  display: flex;

  a {
    font-size: 1.3rem;
    font-weight: 600;
    color: ${({ disabled }) => disabled ? '#cecece' : '#000'};
    font-family: HandSean;
    text-decoration: none;
    cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
    padding: 0.5rem 1rem;
    border-radius: 12px;
    transition: color 0.3s, background-color 0.3s;

    @media(max-width: 1443px) {
    font-size: 1rem;
  }

  @media(max-width: 1443px) {
    font-size: 0.875rem;
  }

    span  {
      color: #000;
    }

    ${({ disabled }) => !disabled && css`
    :hover  {
      color: #fff;
      background:  #e89f02;
    }`}

    @media (max-width: 1168px) {
      color: var(--color_white);

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

  @media (max-width: 1168px) {
    margin-left: 0;
    margin-right: 1rem;
    width: 1.563rem;
  }
`;

export const StyledBurger = styled.div`
  display: none;
  
  @media (max-width: 1168px) {
    width: ${({ open }) => !open && '2rem'};
    height: 1.5rem;
    z-index: 20;
    display: none;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: ${({ open }) => open && '1.6rem'};
    height: .10rem;
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