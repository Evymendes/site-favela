import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

import pdf from "../../assets/EditaldeAcessoaRecursos2025.pdf"

const Content = styled.section`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  background: fff;
  z-index: 1;
  overflow: hidden;
`;

const BoxContent = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 2rem 0;

  iframe {
    border: none;
  }
`

const BoxBack = styled.div`
padding-top: 2rem;
width: 100%;
max-width: 1440px;
> div {
  max-width: 246px;
  > a {
    align-items: center;
    gap: 0.7rem;
    text-decoration: none;
    color: #000;
    font-weight: 600;
    display: ${(props) => (!props.showLink ? 'flex' : 'none')};
  }
}
`;

const TextHighlight = styled.a`
  display: flex;
  justify-content: center;
  background: #e89f02;
  padding: 1.7rem;
  border: 2px solid black;
  border-radius: 12px;
  box-shadow: 2px 5px 4px #000;
  font-size: 1.5rem;
  font-family: FallingSky Bold; 
  color: var(--color_white);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: absolute;
  bottom: 2%;
  right: 2%;
`;

const Edital2025 = () => {
  return (
    <Content>
      <BoxBack>
        <div>
          <Link to="/">
            <div>
              <i class='bx bxs-chevron-left' ></i>
            </div>
            Voltar para a pagina principal
          </Link>
        </div>
      </BoxBack>
      <TextHighlight
        href={pdf}
        download="Edital de acesso a recursos 2025.pdf"
      >
        Baixar Edital 2025
      </TextHighlight>
      <BoxContent>
        {/* <iframe title="PDF Viewer" src={pdf} width="100%" height="100%"></iframe> */}
        <div style={{ height: '80vh', width: '100%' }}>
          <iframe 
            src={pdf} 
            style={{ width: '100%', height: '100%' }} 
            title="PDF Viewer"
          />
        </div>
      </BoxContent>
    </Content>
  )
}

// fileUrl="../../assets/Edital-2025.pdf"

export default Edital2025;