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

import * as S from '../globalPhotoStyle';
  
function CommunitiesGalleries() {
  const listCommunities = [
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
        Lançamento do Projeto no Morro dos Prazeres.
      </S.BackText>
     
      <S.ContainerPhoto>
        {listCommunities.map(i => (
          <>
            <S.BackText subtitle>{i.name}</S.BackText>
            <S.ContentPhoto>
              {i?.photos?.map(imagem => (
                <S.Img src={imagem.img} alt='' align="left" type={imagem.type} />
                ))}
            </S.ContentPhoto>
          </>
        ))} 
      </S.ContainerPhoto>
    </Layout>
  );
}
  
export default CommunitiesGalleries;
  