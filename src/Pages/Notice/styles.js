import styled from "styled-components";

export const Content = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 3;
`;

export const BoxLists = styled.div`
  margin-top: 2rem !important;

  > div {
    margin: 2rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 1rem;
    flex-wrap: wrap;

    :before {
      content: '';
      width: 100%;
      height: 2px;
      position: absolute;
      top: -5px;
    }

    > span {
      background: var(--color_brown);
      padding: 2rem;
      width: 25rem;
      height: 20rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      border-radius: 12px;
      transition: box-shadow 0.3s;

      &:hover {
        box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5); /* Cambiar la sombra al pasar el mouse */
      }

      > h3 {
        margin-bottom: 1rem;
        font-size: 1.5rem;
      }
    }
  }
`;

export const BackText = styled.div`
  margin-top: 2rem;
  width: 100%;
  padding-bottom: .75rem;
  font-size: 1rem;
  color: #fff;
  font-family: FiraSans;
  line-height: 1.8;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;

  > a {
    padding: 1rem 2rem;
    background: #329af1;
    border-radius: 8px;
    color: #fff;
    font-weight: 600;
    text-decoration: none;
    max-width: 23rem;
    margin-top: 1rem;

    > i {
      padding-left: 1rem;
    }
  }
`;

export const NoticeTitle = styled.h3`
  font-size: 1rem;
  color: #fff;
  font-family: FallingSky;
  text-align: justify;
`;

export const NoticeText = styled.p`
  padding-top: ${props => props.noSpace || '.75rem'};
  padding-bottom: ${props => props.paddingBottom && '.75rem'};
  font-size: 1rem;
  color: #fff;
  font-family: FiraSans;
  line-height:  1.8rem;
  text-align: justify;

   @media(max-width: 1024px) {
      font-size: 0.875rem;
    }

  a {
    text-decoration: none;
    color: #329af1;
  }
`;

export const UnderlineText = styled.span`
  border-bottom: 2px solid black;
  text-align: justify;
  line-height: ${props => props.margin && '2rem'};
`;

export const UL = styled.ul`
  list-style: none;

  li {
    padding-bottom: .5rem;
    font-size: 1rem;
    color: #fff;
    font-family: FiraSans;

    :before {
      content: "• ";
      margin-right: 0.7rem;
    }
  }
`;