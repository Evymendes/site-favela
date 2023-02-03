import Layout from '../Layout';

import * as S from './styles';
  
function Notice() {

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('../../files/EditalDeAcessoARecursos2023.docx').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = '../../files/EditalDeAcessoARecursos2023.docx';
          alink.click();
      })
    })
  }

  return (
    <Layout>
      <S.BackText>
        O Edital de Acesso a Recursos 2023 é a primeira iniciativa do Programa Favela-
        Parque. Ao longo de 2023 teremos ainda o Edital de Fortalecimento Comunitário
        (voltado para coletivos já organizados e permanentes nas comunidades) e atividades
        socioambientais de aprofundamento da relação do Parque com as comunidades e
        vice-versa.
        Esta primeira ação visa identificar propostas de interesse comunitário, qualificar seus
        proponentes e ações e financiar as ações ao final do processo.
      </S.BackText>
      <S.BackText>
        <a href="../../files/EditalDeAcessoARecursos2023.docx" target="_blank">abre aaqui</a>
        <button onClick={onButtonClick}>
          Baixe aqui o Edital 2023.  
          {/* não vai mais baixar o edital e sim abrir no próprio site */}
        </button>
      </S.BackText>
    </Layout>
  );
}
  
export default Notice;
  