import Layout from '../../../Layout';
import Photos from './photos';

import * as S from './styles';
import useScrollToTop from '../../../../utils/useScrollToTop';

function OngoingProjects() {
  useScrollToTop();

  return (
    <Layout>
      <h2>Projetos em Andamento</h2>

      <Photos />

    </Layout>
  );
}

export default OngoingProjects;
