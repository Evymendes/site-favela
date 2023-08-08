import { Link } from 'react-router-dom';
import Layout from '../../Layout';
import Photos from '../../../components/Gallery';

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
  
function EdictRefinementSeminar() {  
  const listPhotos = [
    {
      id: 0,
      type: '',
      name: 'Apresentando o programa',
      photos: [
        {
          img: ApresentandoOProgramaUm,
          type: '',
        },
        {
          img: ApresentandoOProgramaDois,
          type: '',
        },
        {
          img: ApresentandoOProgramaTres,
          type: '',
        },
        {
          img: ApresentandoOProgramaSete,
          type: '',
        },
        {
          img: ApresentandoOProgramaCinco,
          type: '',
        },
        {
          img: ApresentandoOProgramaSeis,
          type: '',
        },
        {
          img: ApresentandoOProgramaQuatro,
          type: 'standing',
        },
        {
          img: ApresentandoOProgramaOito,
          type: 'standing',
        },
        {
          img: ApresentandoOProgramaNove,
          type: 'standing',
        }
      ]
    },
    {
      id: 1,
      name: 'Marcos Bandeira, Dançarino e Coreógrafo',
      photos: [
        {
          img: MarcosBandeiraDancarinoeCoreografoDois,
          type: '',
        },
        {
          img: MarcosBandeiraDancarinoeCoreografoQuatro,
          type: '',
        },
        {
          img: MarcosBandeiraDancarinoeCoreografoUm,
          type: 'standing',
        },
        {
          img: MarcosBandeiraDancarinoeCoreografoTres,
          type: 'standing',
        },
        {
          img: MarcosBandeiraDancarinoeCoreografoCinco,
          type: 'standing',
        }
      ]
    },
    {
      id: 2,
      name: 'Charles Siqueira - Coordenador do Programa',
      photos: [
        {
          img: CharlesSiqueira,
          type: '',
        }
      ]
    },
    {
      id: 3,
      name: 'Cris dos Prazeres - Instituto Precisa Ser',
      photos: [
        {
          img: CrisdosPrazeres,
          type: 'standing',
        }
      ]
    },
    {
      id: 4,
      name: 'Genival André - Líderança dos Prazeres',
      photos: [
        {
          img: GenivalAndre,
          type: '',
        }
      ]
    },
    {
      id: 5,
      name: 'Isaura Bredariol - Parque Nacional da Tijuca',
      photos: [
        {
          img: IsauraBredariol,
          type: '',
        }
      ]
    },
    {
      id: 6,
      name: 'DJ 2B',
      photos: [
        {
          img: DJ2B,
          type: 'standing',
        }
      ]
    },
    {
      id: 7,
      name: 'Equipe',
      photos: [
        {
          img: Equipe,
          type: '',
        }
      ]
    },
  ];

  return (
    <Layout>
      <S.BackText>
        Seminário de Refinamento do Edital
      </S.BackText>

      <S.BackText>
        O programa de suporte às iniciativas socioambientais de nossas comunidades agora tem rostos e vozes de seus beneficiários.
      </S.BackText>

      <S.BackText>
        O programa de Educação Socioambiental do Parque Nacional da Tijuca reuniu as duplas das 20 
        propostas selecionadas para o acesso aos recursos do Programa Favela Parque para o Seminário de Refinamento 
        do Edital 2023.
        Envolvidos pela beleza do palacete do Parque Lage conhecemo-nos uns aos outros e demos início aos acordos 
        coletivos para a definição dos projetos que serão aprovados este ano.
      </S.BackText>

      <S.BackText>
        Isaura Bredariol, analista ambiental do PNT, deu a largada apresentando o Parque Nacional, 
        seu Programa Ambiental e a contextualização do Favela Parque. O coordenador do Programa, Charles Siqueira, 
        apresentou a equipe e o roteiro do encontro, pedindo aos proponentes que apresentassem ao grupo os objetivos e 
        importância de suas propostas. Fechamos o encontro com a discussão das regras estabelecidas até aqui e as proposições 
        para a etapa seguinte, o Curso de Gestão, quando as propostas evoluirão para se tornarem Projetos selecionados pelo 
        grupo de proponentes. Fechamos aquele dia memorável com um almoço coletivo.
      </S.BackText>

      <Photos
        title=''
        list={listPhotos}
      />
    </Layout>
  );
}
  
export default EdictRefinementSeminar;
  