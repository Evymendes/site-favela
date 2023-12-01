import styled from "styled-components";

import {
  ImgFavela,
} from '../../assets';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-image: url(${ImgFavela});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 37%;
  position: relative;
  z-index: 1;
  overflow-x: hidden;
  padding: 0 2rem 0 2rem;

  ::-webkit-scrollbar {
    width: 0;
    display: none;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent; 
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: transparent; 
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: transparent; 
  }

  :before {
    content: '';
    background-color: white;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: .8;
    z-index: -1;
  }

  > div {
    max-width: 1500px;
    width: 100%;
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  }
`;

export const Header = styled.header`
    display: ${(props) => (!props.showLink ? 'flex' : 'none')};
  width: 100vw;
  align-items: center;
  justify-content: center;
  background: #fff;
  box-shadow: 0 -6px 10px 5px #fff;

  > img {
    width: 7rem;
  }
`

export const Main = styled.main`
  height: auto;
  width: 100%;
  max-width: 1500px;
  padding: ${(props) => (!props.showLink ? '2rem 0' : '3rem 0')};
  display: flex;
  flex-direction: column;

  > a {
    align-items: center;
    gap: 0.7rem;
    text-decoration: none;
    color: #000;
    font-weight: 600;
    display: ${(props) => (!props.showLink ? 'flex' : 'none')};
    margin-bottom: 5rem;

    > div {
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: 3px solid black;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #000;

    i {
      font-size: 2rem;
    }
  }
  }

  h2 {
    margin-bottom: 3rem;
    color: var(--color_lightGray);
  }

  @media (max-width: 1499px) {
      padding: 3rem 1rem;
  }


  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContentText = styled.div`
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  
  li.numbered:before {
    color: red;
    content: counter(mynum) ": ";
    counter-increment: mynum;
    font-weight: bold;
  }
`;

export const BackText = styled.p`
  padding-bottom: .75rem;
  max-width: 695px;
  font-size: 1rem;
  color: var(--color_lightGray);
  font-family: FiraSans;

  @media(max-width: 1024px) {
      font-size: 0.875rem;
    }
`;

export const ImageFav = styled.img`
  max-width: 100%;
  height: 100%;
`;

export const Section = styled.section`
  position: relative;
  width: 30%;
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 100vw;
    height:  20%;
    flex-direction: row;
  }
`;

export const ContentLogo = styled.div`
  padding-top: 1rem;
  min-height: 127px;
  background: var(--color_mustard);
  display: flex;
  flex-direction: column;
  align-items: center;
  // height: 190px;

  @media (max-width: 768px) {
    padding-top: 0;
    width: 100vw;
    height: 100%;
    justify-content: center;
  }
`;

export const BackgBlack = styled.div`
  width: 100%;
  height: 1rem;
  background: var(--color_black);

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ImgLogo = styled.img`
  width: 45%;

  @media (max-width: 768px) {
    padding-bottom: .5rem;
  }
`;

export const LogoText = styled.h1`
  padding-bottom: 1rem;
  max-width: 10rem;
  color: var(--color_black);
  font-size: .5rem;
  font-family: HandSean;
  text-align: center;
`;

export const Footer = styled.div`
  width: 100%;
  min-height: 60%;
  height: 79%;
  text-align: center;

  div:fist-child {
    height: auto;
  }

  @media (max-width: 768px) {
    padding: 0 0.75rem;
    height: 100%;
  }

  @media (max-width: 375px) {
    position: relative;
  }
`;

export const ImagemFavela = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 0rem -5rem;
`;


export const ContentHighlight = styled.div`
  margin-bottom: 2rem;
  width: 100%;
  // min-height: 54px;
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
  padding-top: 0.5rem;
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
  font-size: 1.3rem;
  font-family: FallingSky Bold; 
  color: var(--color_white);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  align-self: center;

  @media(max-width: 1024px) {
      font-size: 1rem;
    }
`;

export const Text = styled.p`
  padding-bottom: 1rem;
  max-width: 470px;
  font-size: .85rem;
  font-family: FallingSky;
  color: var(--color_lightGray);
  text-align: center;

  @media (max-width: 425px) {
    max-width: 430px;
  }
`;

export const Span = styled.span`
  width: 2.5rem;
  background: ${props => props.color};

  @media (max-width: 570px) {
    display: ${props => props.none && 'none'};
  }
`;

export const ContentPartnerships = styled.div`
  padding-bottom: 5px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  // flex-direction: row;

  img {
    padding-right: 1rem;
  }

  @media (max-width: 768px) {
   display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 100px 2fr;
    gap: 20px;
  }
`;

export const ImgPartnerships = styled.img`
  width: 25%;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ImgICM = styled.img`
  width: 3.5rem;

  @media (max-width: 768px) {
    width: 56%;
  }
`;

export const ContentImageFav = styled.div`
  height: 100%;
  background-image: url(${ImgFavela});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top 60% left 0;

  @media (max-width: 768px) {
    display: none;
  }
`;
