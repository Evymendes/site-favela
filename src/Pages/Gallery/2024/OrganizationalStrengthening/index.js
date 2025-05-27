import Layout from '../../../Layout';
import Photos from './photos';

import * as S from './styles';
import useScrollToTop from '../../../../utils/useScrollToTop';

function OrganizationalStrengthening() {
  useScrollToTop();

  return (
    <Layout>
      <h2>Fortalecimento Organizacional</h2>

      <Photos />

    </Layout>
  );
}

export default OrganizationalStrengthening;
