import Layout from '../../../../Layout';
import ListPhotos from '../../../../../components/Gallery';
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
} from '../../../../../assets';

import useScrollToTop from '../../../../../utils/useScrollToTop';

function CerroCoraScreen() {
  useScrollToTop();
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
      <ListPhotos
        title='Lançamento do Projeto no Cerro-Corá.'
        list={listCommunities}
      />
    </Layout>
  );
}
  
export default CerroCoraScreen;
  

