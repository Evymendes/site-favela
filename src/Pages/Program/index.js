import {
  Logo,
  ICMBio,
  Corcovado,
  PrecisaSer,
  PNTijuca,
  ImgFavela
} from '../../assets';

  import Menu from '../../components/Menu';

  import * as S from './styles';
  
  function Home() {

    return (
      <S.Container>
        <Menu />
        <S.Main>
          <S.Background>
            <p>
              O Programa Favela Parque é parte do Programa Socioambiental do Parque Nacional da Tijuca,
              sendo administrado pelo Instituto Precisa Ser, com recursos do Trem do Corcovado.
            </p>

            <p>
              Tem o objetivo de apoiar o Desenvolvimento Local Sustentável dos Morros Guararapes,
              Cerró-Corá, Prazeres e Vila Cândido ampliando suas relações com o Parque Nacional da Tijuca
              e fortalecendo as organizações comunitárias e o protagonismo social através de atividades
              de geração de renda, saúde, educação, cultura e ações ambientais engajadas.
            </p>

            <p>
              Vem sendo desenvolvido desde 2018, quando foi realizado o Diagnóstico Socioambiental 
              Participativo em parceria com os moradores daquelas favelas, cujos resultados propuseram o 
              estabelecimento de uma linha de ação permanente, anual e contínua de recursos para o 
              desenvolvimento e implementação de estratégias de melhoria da qualidade de vida da 
              população residente naquelas comunidades, de maneira colaborativa e adequada às realidades 
              ali verificadas.
            </p>

            <p>Informações mais detalhadas podem ser obtidas nos links a seguir:</p>

            <p>“Diagnóstico Socioambiental Participativo” (Inserir link para página no website).</p>
            <p> Proposta do instituto Precisa Ser</p>
            </S.Background>
          <S.Section>
            <>
              <S.ImgLogo src={Logo} alt='Logo'  />
              <S.LogoText>Programa de Educação Socioambiental do parque nacional da Tijuca</S.LogoText>
            </>
            <S.Footer>
              <>
              <S.TextAchievement>Realização</S.TextAchievement>
              <S.ContentPartnerships>
                <S.ImgPartnerships src={Corcovado} alt='Logo Corcovado'  />
                <S.ImgPartnerships src={PNTijuca} alt='Logo PNTijuca'  />
                <S.ImgICM src={ICMBio} alt='Logo ICMBio'  />
                <S.ImgPartnerships src={PrecisaSer} alt='Logo PrecisaSer'  />
              </S.ContentPartnerships>
              </>
              <S.ImgLogo src={ImgFavela} alt='Image Favela'  />
            </S.Footer>
          </S.Section>
        </S.Main>
      </S.Container>
    );
  }
  
  export default Home;
  