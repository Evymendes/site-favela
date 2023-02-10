import Layout from '../../Layout';
import {
  CerroCora,
  CerroCora1,
  CerroCora2,
  CerroCora3,
  CerroCora4,
  CerroCoraDJ2B,
  JandersonMoradoresEmMovimento,
  RicardoRodriguesLiderComunitario,
  VivianePachecoParqueNacionaldaTijuca
} from '../../../assets';

import * as S from '../globalPhotoStyle';
  
function CerroCoraScreen() {
  const listCommunities = [
    {
      id: 0,
      name: 'Apresentando o programa',
      photos: [
        {
          img: CerroCora,
          type: '',
        },
        {
          img: CerroCora1,
          type: '',
        },
        {
          img: CerroCora2,
          type: '',
        },
        {
          img: CerroCora3,
          type: '',
        },
        {
          img: CerroCora4,
          type: '',
        }
      ]
    },
    {
      id: 1,
      name: 'DJ 2B',
      photos: [
        {
          img: CerroCoraDJ2B,
          type: 'standing',
        }
      ]
    },
    {
      id: 2,
      name: 'Janderson Moradores em Movimento',
      photos: [
        {
          img: JandersonMoradoresEmMovimento,
          type: '',
        }
      ]
    },
    {
      id: 3,
      name: 'Ricardo Rodrigues - Lider Comunitario',
      photos: [
        {
          img: RicardoRodriguesLiderComunitario,
          type: '',
        }
      ]
    },
    {
      id: 4,
      name: 'Viviane Pacheco - Parque Nacional da Tijuca',
      photos: [
        {
          img: VivianePachecoParqueNacionaldaTijuca,
          type: '',
        }
      ]
    }
  ];

  return (
    <Layout>
      <S.BackText>
        Lançamento do Projeto no Cerro-Corá.
      </S.BackText>
     
      <S.ContainerPhoto>
        {listCommunities.map(i => (
          <>
            <S.BackText subtitle>{i.name}</S.BackText>
            <S.ContentPhoto>
              {i?.photos?.map(imagem => (
                <S.Img src={imagem.img} alt='Fotos da comunidade cerro cora' align="left" type={imagem.type}/>
              ))}
            </S.ContentPhoto>
          </>
        ))} 
      </S.ContainerPhoto>
    </Layout>
  );
}
  
export default CerroCoraScreen;
  

