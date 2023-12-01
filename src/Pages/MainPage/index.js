import React from 'react';
import styled from 'styled-components';

import Header from "../../components/Menu";
import Home from '../Home';
import Notice from '../Notice';
import TheCommunities from "../TheCommunities";
import Gallery from "../Gallery";
import Directors from "../Directors";
import YouAtThePark from '../YouInThePark';
import Team from "../Team";
import Program from '../Program';
import Footer from '../Footer';

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
`

const BoxContent = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`

const BackTop = styled.a`
  font-size: 3rem;
  color: #e89f02;
  position: fixed;
  bottom: 17%;
  right: 2%; 
  z-index: 10;
`

const MainPage = () => {
  return (
    <Content>
      <Header />
      <BoxContent>
        <BackTop href='#topo'>
          <i class='bx bxs-up-arrow-circle'></i>
        </BackTop>
        <Home />
        <Program />
        <Notice />
        <TheCommunities />
        <Gallery />
        <Directors />
        <YouAtThePark />
        <Team />
      </BoxContent>
      <Footer />
    </Content>
  )
}

export default MainPage