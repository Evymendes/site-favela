import Layout from '../../../Layout';
import Photos from './photos';

import * as S from './styles';
import useScrollToTop from '../../../../utils/useScrollToTop';

function TrainingActivities() {
  useScrollToTop();

  return (
    <Layout>
      <h2>Atividades de Formação 2024</h2>

      <Photos />

    </Layout>
  );
}

export default TrainingActivities;
