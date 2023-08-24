import { Link } from 'react-router-dom';
import Layout from '../../Layout';
import Photos from './photos';

import * as S from '../globalPhotoStyle';
  
function LaunchYouInThePark() {  
  return (
    <Layout>
      <S.Title>
        Você no parque!
      </S.Title>

      <S.Text>
        Nossas atividades no Parque Nacional da Tijuca estão pra lá de animadas.
      </S.Text>

      <S.Text>
        No primeiro sábado de Abril, uma turminha do cerro-Corá e os inscritos aqui no site passaram um dia incrível 
        entre trilhas e cachoeiras, descobrindo as belezas da maior floresta urbana do mundo.
      </S.Text>

      <S.Text>
        Já no primeiro sábado de Julho, tivemos uma aula extramuros do projeto Pré-Vestibular dos Prazeres. 
        Um dia leve e repleto de conteúdos e aprendizados que incluíram reflorestamento, biomas à biodiversidade de nossa 
        floresta.
      </S.Text>

      <S.Text>
        História, Química e Biologia, entre cachoeiras e mirantes:  Educação ambiental se faz com alegria, beleza e prazer. 
      </S.Text>

      <Photos />

    </Layout>
  );
}
  
export default LaunchYouInThePark;
  