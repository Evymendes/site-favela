import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';



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
  padding: 3rem 2rem 3rem 2rem;
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
    margin-bottom: 5rem;
  }
}
`;

const TextHighlight = styled.button`
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
      <TextHighlight> Baixar Edital 2025 </TextHighlight>
      <BoxContent>
        
      </BoxContent>
    </Content>
  )
}

// fileUrl="../../assets/Edital-2025.pdf"

export default Edital2025;