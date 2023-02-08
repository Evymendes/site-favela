import { Link } from 'react-router-dom';

import Layout from '../../Layout';
import {
  ApresentandoOProgramaUm,
  ApresentandoOProgramaDois,
  ApresentandoOProgramaTres,
  ApresentandoOProgramaQuatro,
  ApresentandoOProgramaCinco,
  ApresentandoOProgramaSeis,
  ApresentandoOProgramaSete,
  ApresentandoOProgramaOito,
  ApresentandoOProgramaNove,
  MarcosBandeiraDancarinoeCoreografoUm,
  MarcosBandeiraDancarinoeCoreografoDois,
  MarcosBandeiraDancarinoeCoreografoTres,
  MarcosBandeiraDancarinoeCoreografoQuatro,
  MarcosBandeiraDancarinoeCoreografoCinco,
  CharlesSiqueira,
  CrisdosPrazeres,
  GenivalAndre,
  IsauraBredariol,
  DJ2B,
  Equipe
} from '../../../assets';

import * as S from './styles';
  
function CommunitiesGalleries() {
  const listCommunities = [
    {
      id: 0,
      name: 'Apresentando o programa',
      photos: [
        ApresentandoOProgramaUm,
        ApresentandoOProgramaDois,
        ApresentandoOProgramaTres,
        ApresentandoOProgramaSete,
        ApresentandoOProgramaCinco,
        ApresentandoOProgramaSeis,
        ApresentandoOProgramaQuatro,
        ApresentandoOProgramaOito,
        ApresentandoOProgramaNove,
      ]
    },
    {
      id: 1,
      name: 'Marcos Bandeira, Dançarino e Coreógrafo',
      photos: [
        MarcosBandeiraDancarinoeCoreografoDois,
        MarcosBandeiraDancarinoeCoreografoQuatro,
        MarcosBandeiraDancarinoeCoreografoUm,
        MarcosBandeiraDancarinoeCoreografoTres,
        MarcosBandeiraDancarinoeCoreografoCinco
      ]
    },
    {
      id: 2,
      name: 'Charles Siqueira - Coordenador do Programa',
      photos: [
        CharlesSiqueira,
      ]
    },
    {
      id: 3,
      name: 'Cris dos Prazeres - Instituto Precisa Ser',
      photos: [
        CrisdosPrazeres,
      ]
    },
    {
      id: 4,
      name: 'Genival André - Líderança dos Prazeres.JPG',
      photos: [
        GenivalAndre,
      ]
    },
    {
      id: 5,
      name: 'Isaura Bredariol - Parque Nacional da Tijuca',
      photos: [
        IsauraBredariol,
      ]
    },
    {
      id: 6,
      name: 'DJ 2B',
      photos: [
        DJ2B,
      ]
    },
    {
      id: 7,
      name: 'Equipe',
      photos: [
        Equipe,
      ]
    },
  ];

  return (
    <Layout>
      <S.BackText>
        Lançamento do projeto no Morro dos Prazeres.
      </S.BackText>
     
      {listCommunities.map(i => (
        <>
          <S.BackText>{i.name}</S.BackText>
          {i?.photos?.map(img => (
            <S.Img src={img} alt='' align="left"/>
          ))}
        </>
      ))}
    </Layout>
  );
}
  
export default CommunitiesGalleries;
  

