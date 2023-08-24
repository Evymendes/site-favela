import { Link } from 'react-router-dom';
import Layout from '../../Layout';
import Photos from './photos';

import * as S from '../globalPhotoStyle';
  
function EdictRefinementSeminar() {  

  return (
    <Layout>
      <S.Title>
        Seminário de Refinamento do Edital
      </S.Title>

      <S.Text>
        O programa de suporte às iniciativas socioambientais de nossas comunidades agora tem rostos e vozes de seus beneficiários.
      </S.Text>

      <S.Text>
        O programa de Educação Socioambiental do Parque Nacional da Tijuca reuniu as duplas das 20 
        propostas selecionadas para o acesso aos recursos do Programa Favela Parque para o Seminário de Refinamento 
        do Edital 2023.
        Envolvidos pela beleza do palacete do Parque Lage conhecemo-nos uns aos outros e demos início aos acordos 
        coletivos para a definição dos projetos que serão aprovados este ano.
      </S.Text>

      <S.Text>
        Isaura Bredariol, analista ambiental do PNT, deu a largada apresentando o Parque Nacional, 
        seu Programa Ambiental e a contextualização do Favela Parque. O coordenador do Programa, Charles Siqueira, 
        apresentou a equipe e o roteiro do encontro, pedindo aos proponentes que apresentassem ao grupo os objetivos e 
        importância de suas propostas. Fechamos o encontro com a discussão das regras estabelecidas até aqui e as proposições 
        para a etapa seguinte, o Curso de Gestão, quando as propostas evoluirão para se tornarem Projetos selecionados pelo 
        grupo de proponentes. Fechamos aquele dia memorável com um almoço coletivo.
      </S.Text>

      <Photos />

    </Layout>
  );
}
  
export default EdictRefinementSeminar;
  