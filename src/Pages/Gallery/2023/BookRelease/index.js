import Layout from '../../../Layout';
import Photos from './photos';

import * as S from './styles';
import useScrollToTop from '../../../../utils/useScrollToTop';

function BookRelease() {
  useScrollToTop();
  return (
    <Layout>
      <h2>
        Lançamento do Livro-Síntese do Programa Favela Parque
      </h2>

      <S.BackText>
        Dias animados no Programa Favela Parque!
      </S.BackText>

      <S.BackText>
        Lançamos durante a reunião bimestral do Conselho do Parque Nacional da Tijuca, em 13 de junho, o livro que sistematiza o
        Diagnóstico Socioambiental Participativo Favela-Parque, elaborado em 2018 pela UFRJ, pelo Programa EICOS e pelo GAPIS.
        No evento, dois dos coordenadores da publicação - a professora Marta Irving e o professor Gustavo Melo - explicaram o
        processo e seu caminho até chegar ao nosso Programa.
      </S.BackText>

      <S.BackText>
        A chefe do PNT, Viviane Pacheco, relatou a trajetória do Programa e sua importância e o  coordenador do Programa,
        Charles Siqueira, fechou o encontro apresentando aos membros dos Conselhos do Parque a equipe que compõe o nosso
        Programa nas comunidades.
      </S.BackText>

      {/* <S.BackText>
        Para baixar o livro, clique aqui: (vou mandar o link).
      </S.BackText> */}

      <Photos />

    </Layout>
  );
}

export default BookRelease;
