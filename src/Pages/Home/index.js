import {
  Logo,
  CompleteLogo,
  ImgFavela,
  LogoYellow,
  ICMBio,
  Corcovado,
  PrecisaSer,
  PNTijuca
} from '../../assets';

  import Menu from '../../components/Menu';

  import * as S from './styles';
  
  function Home() {

    return (
      <S.Container>
        <Menu />
        <S.Main>
          <S.Background />
          <S.Section>
            <>
              <S.ImgLogo src={CompleteLogo} alt='Logo'  />
              {/* <p>Programa de Educação Socioambiental do parque nacional da Tijuca</p> */}
            </>
            <S.Text>
              Realizado em parceria com quatro comunidades do entorno da Floresta
              Nacional da Tijuca: Cerro-Corá, Guararapes, Morro dos Prazeres e Vila Cândido
            </S.Text>
            <S.Footer>
              <S.ContentHighlight>
                <S.TextHighlight> Edital de Acesso a Recursos 2023</S.TextHighlight>
                <S.BackHighlight>
                  <S.Span color='yellow'/>
                  <S.Span color='blue'/>
                  <S.Span color='red'/>
                </S.BackHighlight>
              </S.ContentHighlight>
              <S.ContentPartnerships>
                <S.ImgPartnerships src={PNTijuca} alt='Logo PNTijuca'  />
                <S.ImgPartnerships src={Corcovado} alt='Logo Corcovado'  />
                <S.ImgICM src={ICMBio} alt='Logo ICMBio'  />
                <S.ImgPartnerships src={PrecisaSer} alt='Logo PrecisaSer'  />
              </S.ContentPartnerships>
            </S.Footer>
          </S.Section>
        </S.Main>
      </S.Container>
    );
  }
  
  export default Home;
  