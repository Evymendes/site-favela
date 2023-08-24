import { Link } from 'react-router-dom';
import Layout from '../../Layout';
import Photos from './photos';

import * as S from '../globalPhotoStyle';
  
function BookRelease() {  
  return (
    <Layout>
      <S.Title>
        Lançamento do Livro-Síntese do Programa Favela Parque
      </S.Title>

      <S.Text>
        Dias animados no Programa Favela Parque!
      </S.Text>

      <S.Text>
        Lançamos durante a reunião bimestral do Conselho do Parque Nacional da Tijuca, em 13 de junho, o livro que sistematiza o 
        Diagnóstico Socioambiental Participativo Favela-Parque, elaborado em 2018 pela UFRJ, pelo Programa EICOS e pelo GAPIS.
        No evento, dois dos coordenadores da publicação - a professora Marta Irving e o professor Gustavo Melo - explicaram o 
        processo e seu caminho até chegar ao nosso Programa.
      </S.Text>

      <S.Text>
        A chefe do PNT, Viviane Pacheco, relatou a trajetória do Programa e sua importância e o  coordenador do Programa, 
        Charles Siqueira, fechou o encontro apresentando aos membros dos Conselhos do Parque a equipe que compõe o nosso 
        Programa nas comunidades.
      </S.Text>

      <S.Text>
        Para baixar o livro, {` `}
        <a 
          rel="noopener"
          target="_blank" 
          href='https://www.academia.edu/60958439/Projeto_Favela_Parque_construindo_conex%C3%B5es_entre_o_Parque_Nacional_da_Tijuca_e_as_favelas_Cerro_Cor%C3%A1_Guararapes_Vila_C%C3%A2ndido_e_Prazeres_no_Rio_de_Janeiro'
        >
          clique aqui:
        </a>
      </S.Text>
      <Photos />

    </Layout>
  );
}
  
export default BookRelease;
  