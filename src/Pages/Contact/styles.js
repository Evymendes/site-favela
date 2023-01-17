import styled from "styled-components";
import {
  ImgFavela,
} from '../../assets';

export const Container = styled.div`
  max-height: 100vh;
`;

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

export const Link = styled.li`
  display: flex;
  font-size: 18px;
  color: #000;
  text-decoration: none;

  span {
    padding: 0 1rem;
  }
`;

export const Main = styled.main`
  display: flex;
  height: calc(100vh - 75.39px);
  
  section {
    width: 50%;
  }
`;

export const Background = styled.section`
  width: 50%;
  background-image: url(${ImgFavela});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ImageFav = styled.img`
  max-width: 100%;
  height: 100%;
`;

export const Section = styled.section`
  padding: 0 2rem;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImgLogo = styled.img`
  width: 50%;
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 20px;
  min-height: 3rem;
`;

export const ContentHighlight = styled.div`
  margin-bottom: 2rem;
  background: green;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const BackHighlight = styled.div`
  display: flex;
`;

export const TextHighlight = styled.p`
  padding: 0 .75rem;
  width: inherit;
  background: green;
  text-align: center;
`;

export const Text = styled.p`
  font-size: 1rem;
  max-width: 560px;
`;

export const Span = styled.span`
  width: 3rem;
  background: ${props => props.color};
`;

export const ContentPartnerships = styled.span`
  display: flex;
  justify-content: center;

  img {
    padding-right: 1rem;
  }
`;

export const ImgPartnerships = styled.img`
  width: 5rem;
  object-fit: contain;
`;

export const ImgICM = styled.img`
  width: 2rem;
`;
