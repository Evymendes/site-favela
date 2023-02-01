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

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('../../files/DiagnosticoSocioambientalParticipativo.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = '../../files/DiagnosticoSocioambientalParticipativo.pdf';
                alink.click();
            })
        })
    }

    return (
      <S.Container>
        <Menu />
        <S.Main>
          <S.Background>
            <S.ContentText>
              <S.BackText>
                O <strong>Programa Favela Parque </strong> é parte do Programa Socioambiental do Parque Nacional da Tijuca,
                sendo administrado pelo Instituto Precisa Ser, com recursos do Trem do Corcovado.
              </S.BackText>

              <S.BackText>
                Tem o objetivo de apoiar o Desenvolvimento Local Sustentável dos Morros Guararapes,
                Cerró-Corá, Prazeres e Vila Cândido ampliando suas relações com o Parque Nacional da Tijuca
                e fortalecendo as organizações comunitárias e o protagonismo social através de atividades
                de geração de renda, saúde, educação, cultura e ações ambientais engajadas.
              </S.BackText>

              <S.BackText>
                Vem sendo desenvolvido desde 2018, quando foi realizado o Diagnóstico Socioambiental 
                Participativo em parceria com os moradores daquelas favelas, cujos resultados propuseram o 
                estabelecimento de uma linha de ação permanente, anual e contínua de recursos para o 
                desenvolvimento e implementação de estratégias de melhoria da qualidade de vida da 
                população residente naquelas comunidades, de maneira colaborativa e adequada às realidades 
                ali verificadas.
              </S.BackText>

              <S.BackText>Para conhecer mais, clique nos links abaixo:</S.BackText>

              <S.BackText>“Diagnóstico Socioambiental Participativo”.</S.BackText>
                <S.BackText>Seu navegador não tem um plugin pra PDF</S.BackText>
                <a href="../../files/DiagnosticoSocioambientalParticipativo.pdf" target="_blank">abre aaqui</a>
                <button onClick={onButtonClick}>
                    Download PDF
                </button>
              <S.BackText> Proposta do instituto Precisa Ser</S.BackText>
            </S.ContentText>
            </S.Background>
          <S.Section>
            <S.ContentLogo>
              <S.ImgLogo src={Logo} alt='Logo'  />
              <S.LogoText>Programa de Educação Socioambiental do parque nacional da Tijuca</S.LogoText>
            </S.ContentLogo>
            <S.BackgBlack />
            <S.Footer>
              <div>
                <S.TextAchievement>Realização</S.TextAchievement>
                <S.ContentPartnerships>
                    <S.ImgPartnerships src={Corcovado} alt='Logo Corcovado'  />
                    <S.ImgPartnerships src={PNTijuca} alt='Logo PNTijuca'  />
                    <S.ImgICM src={ICMBio} alt='Logo ICMBio'  />
                    <S.ImgPartnerships src={PrecisaSer} alt='Logo PrecisaSer'  />
                </S.ContentPartnerships>
              </div>
              {/* <S.ImagemFavela src={ImgFavela} alt='Image Favela'  /> */}
              <S.DivImage></S.DivImage>
            </S.Footer>
          </S.Section>
        </S.Main>
      </S.Container>
    );
  }
  
  export default Home;
  