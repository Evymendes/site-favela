import Layout from '../../../../Layout';
import ListPhotos from '../../../../../components/Gallery';
import {
  ABelaVistadosGuararapes,
  AlbertoSzafranSubPrefeitDoCentro,
  Desbravadores2,
  EquipedeGestaoParqueEquipeSupervisoraeInstitutoPrecisaSer,
  GrupoDesbravadores,
  Guararapes,
  Guararapes1,
  Guararapes3,
  Guararapes5,
  LeonardoBrasil
} from '../../../../../assets';

import useScrollToTop from '../../../../../utils/useScrollToTop';

function GuararapesVilaCandido() {
  useScrollToTop();
  const listCommunities = [
    {
      id: 0,
      name: 'Guararapes',
      photos: [
        {
          img: Guararapes,
          type: '',
        },
        {
          img: Guararapes1,
          type: '',
        },
        {
          img: Guararapes3,
          type: '',
        },
        {
          img: Guararapes5,
          type: '',
        } 
      ]
    },
    {
      id: 1,
      name: 'A Bela Vistados Guararapes',
      photos: [
        {
          img: ABelaVistadosGuararapes,
          type: '',
        }
      ]
    },
    {
      id: 2,
      name: 'Alberto Szafran - SubPrefeit do centro',
      photos: [
        {
          img: AlbertoSzafranSubPrefeitDoCentro,
          type: 'standing',
        }
      ]
    },
    {
      id: 3,
      name: 'Desbravadores',
      photos: [
        {
          img: Desbravadores2,
          type: '',
        }
      ]
    },
    {
      id: 4,
      name: 'Equipe de Gestao, Parque, Equipe, Supervisor e Instituto Precisa Ser',
      photos: [
        {
          img: EquipedeGestaoParqueEquipeSupervisoraeInstitutoPrecisaSer,
          type: '',
        }
      ]
    },
    {
      id: 5,
      name: 'Grupo Desbravadores',
      photos: [
        {
          img: GrupoDesbravadores,
          type: '',
        }
      ]
    },
    {
      id: 5,
      name: 'Leonardo Brasil',
      photos: [
        {
          img: LeonardoBrasil,
          type: 'standing',
        }
      ]
    }
  ];

  return (
    <Layout>
      <ListPhotos
        title='Lançamento do Projeto no Guararapes Vila-Candido.'
        list={listCommunities}
      />
    </Layout>
  );
}
  
export default GuararapesVilaCandido;
