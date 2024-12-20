import styled, { keyframes } from 'styled-components';

// import {
//   ImgFavela,
// } from '../../assets';

import Banner from "../../assets/banner.jpeg"
import BaennerMobile from "../../assets/logomobile.jpg"


export const Container = styled.section`
  width: 100vw;
  height: 78vh;
  background-image: url(${Banner});
  background-size: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-repeat: round;
  padding: 3rem 0 0 0;
  position: relative;

  @media (max-width: 1525px) {
    height: 70vh;
  }

  @media (max-width: 1450px) {
    height: 75vh;
  }

  @media (max-width: 1362px) {
    height: 70vh;
  }

  @media (max-width: 1258px) {
    height: 60vh;
  }

  @media(max-width: 1165px) {
    background-image: url(${BaennerMobile});
    height: 95vh; 
  }

  @media (max-width: 768px) {
    height: 100vh;
  }

  > a {
    position: absolute;
    top: 72%;
    text-decoration: none;
    width: 30%;
    max-width: 400px;
    right: 5%;
    background: #e89f02;
    padding: 1.7rem;
    border: 5px solid black;
    border-radius: 12px;
    animation: flutterButton 2s infinite ease-in-out;
    box-shadow: 2px 5px 4px #000;
    display: flex;

    @media (max-width: 1165px) {
    width: 60%;
    max-width: 300px;
    top: 82% !important;
    right: 20%;
  }

    &:hover {
        animation: none;
    }

    @keyframes flutterButton {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-1rem);
        }
    }

    @media (max-width: 1525px) {
      width: 80%;
    }
  } 
`;

export const BoxContent = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 100%;
`;

export const Main = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;


  @media (max-width: 768px) {
    margin: auto;
    padding: .75rem 0 1rem 0;
    width: 90%;
    height: 60%;
  }
`;

export const ImgLogo = styled.img`
  width: 45%;
`;

export const LogoText = styled.h1`
  padding-bottom: 1rem;
  color: var(--color_black);
  font-size: 1rem;
  font-family: HandSean;
  max-width: 330px;
  text-align: center;
`;

export const Footer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 2%;

  a {
    text-decoration: none;
  }

  @media (max-width: 375px) {
    position: relative;
  }

  @media (min-height: 760px) {
    bottom: 30px;
  }
`;

export const ContentHighlight = styled.div`
  margin-bottom: 2rem;
  width: 100%;
  min-height: 54px;
  background: var(--color_mustard);
  display: flex;
  justify-content: space-between;
  border: 1px solid #0000007d;

  @media (max-width: 768px) {
    margin: auto;
    width: 90%;
    max-width: 490px;
  }
`;

export const TextAchievement = styled.p`
  padding-bottom: 1.25rem;
  font-size: .5rem;
  font-family: HandSean; 
  color: var(--color_black);
  text-align: center;

  @media (max-width: 768px) {
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
  }
`;

export const BackHighlight = styled.div`
  display: flex;
`;

export const TextHighlight = styled.p`
  padding: 0 .75rem;
  font-size: 2rem;
  font-family: FallingSky Bold; 
  color: var(--color_white);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  align-self: center;
  border: none;
  width: 100%;
  text-align: center;
`;

export const Text = styled.p`
  margin-bottom: 1rem;
  color: #fff;
  font-family: FallingSky;
  font-size: 1rem;
  max-width: 100%;
  text-align: center;


  @media (max-width: 768px) {
    max-width: 430px;
    margin: 1rem 0;
  }
`;

export const Span = styled.span`
  width: 2.5rem;
  background: ${props => props.color};

  @media (max-width: 570px) {
    display: ${props => props.none && 'none'};
  }
`;

const moveBanner = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const ContentPartnerships = styled.span`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  gap: 4rem;

  animation: ${moveBanner} 20s linear infinite;
  overflow: hidden;
`;

export const ImgPartnerships = styled.img`
  width: 6rem;
  height: auto;
  object-fit: contain;
  margin-right: 1rem; /* Ajuste conforme necessário */
`;

export const ImgICM = styled.img`
  width: 3.5rem;
`;
