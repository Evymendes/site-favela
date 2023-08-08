import { Link } from 'react-router-dom';
import Layout from '../../Layout';

import * as S from './styles';
  
function LaunchYouInThePark() {  
  return (
    <Layout>
      <S.BackText>
        Você no parque!
      </S.BackText>

      <S.BackText>
        Nossas atividades no Parque Nacional da Tijuca estão pra lá de animadas.
      </S.BackText>

      <S.BackText>
        No primeiro sábado de Abril, uma turminha do cerro-Corá e os inscritos aqui no site passaram um dia incrível 
        entre trilhas e cachoeiras, descobrindo as belezas da maior floresta urbana do mundo.
      </S.BackText>

      <S.BackText>
        Já no primeiro sábado de Julho, tivemos uma aula extramuros do projeto Pré-Vestibular dos Prazeres. 
        Um dia leve e repleto de conteúdos e aprendizados que incluíram reflorestamento, biomas à biodiversidade de nossa 
        floresta.
      </S.BackText>

      <S.BackText>
        História, Química e Biologia, entre cachoeiras e mirantes:  Educação ambiental se faz com alegria, beleza e prazer. 
      </S.BackText>

    </Layout>
  );
}
  
export default LaunchYouInThePark;
  