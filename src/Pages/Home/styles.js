import styled from "styled-components";
import {
  ImgFavela,
} from '../../assets';

export const Container = styled.div`
  max-height: 100vh;
`;

export const Main = styled.main`
  padding: .75rem 3rem 1rem 3rem;
  display: flex;
  height: calc(100vh - 75.39px);
`;

export const Background = styled.section`
  width: 40%;
  background-image: url(${ImgFavela});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: center;
`;

export const ImageFav = styled.img`
  max-width: 100%;
  height: 100%;
`;

export const Section = styled.section`
  padding: 0 2rem;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImgLogo = styled.img`
  width: 45%;
`;

export const LogoText = styled.h1`
  padding-bottom: 1.4rem;
  color: var(--color_black);
  font-size: 1rem;
  font-family: HandSean;
  max-width: 330px;
  text-align: center;
`;

export const Footer = styled.div`
  width: 100%;
  min-height: 3rem;
`;

export const ContentHighlight = styled.div`
  margin-bottom: 2rem;
  width: 100%;
  height: 3rem;
  background: var(--color_mustard);
  display: flex;
  justify-content: space-between;
  border: 1px solid #0000007d;
`;

export const BackHighlight = styled.div`
  display: flex;
`;

export const TextHighlight = styled.p`
  padding: 0 .75rem;
  font-size: 1.3rem;
  color: var(--color_white);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  padding-bottom: 1rem;
  max-width: 470px;
  font-size: .85rem;
  font-family: FallingSky;
  color: var(--color_lightGray);
  text-align: center;
`;

export const Span = styled.span`
  width: 2.5rem;
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
