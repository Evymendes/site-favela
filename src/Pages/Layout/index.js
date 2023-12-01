import { Link } from 'react-router-dom';
import * as S from './styles';
import Logo from '../../assets/logo.png';
import Footer from '../Footer';


function Layout({ children, showLink }) {

  return (
    <S.Container>
      <div>
        <S.Header showLink={showLink}>
          <img src={Logo} alt="" />
        </S.Header>
        <S.Main showLink={showLink}>
          <Link to="/">
            <div>
              <i class='bx bxs-chevron-left' ></i>
            </div>
            Voltar para a pagina principal
          </Link>
          <S.ContentText>
            {children}
          </S.ContentText>
        </S.Main>
      </div>
      {!showLink && <Footer />}
    </S.Container>
  );
}

export default Layout;
