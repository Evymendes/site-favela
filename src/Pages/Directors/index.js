import Layout from '../Layout';

import * as S from './styles';
  
function Directors() {
  return (
    <Layout>
      <S.BackText>
        O Programa Favela Parque é o resultado da união de três instituições: O Parque
        Nacional da Tijuca, dentro de seu programa socioambiental; o Trem do Corcovado,
        que aporta recursos para o Programa e o Instituto Precisa Ser que administra e gere
        as ações.
      </S.BackText>
      <S.BackText>
        <a
          href="https://parquenacionaldatijuca.rio/"
          rel="noreferrer"
          target="_blank"
        >
          <strong>O Parque Nacional da Tijuca:</strong>
        </a>
        (texto que será enviado por Isaura)
        </S.BackText>
        <S.BackText>
        <a
          href="https://www.tremdocorcovado.rio/"
          rel="noreferrer"
          target="_blank"
        >
          <strong>O Trem do Corcovado:</strong>
        </a>
        (texto que será enviado por Isa)
        </S.BackText>
        <S.BackText>
          <a
            href="https://institutoprecisaser.org/"
            rel="noreferrer"
            target="_blank"
          >
            <strong>
              O Instituto Precisa Ser:
            </strong>
          </a>
        O Precisa Ser é um instituto de tecnologias digitais e sociais, sem fins lucrativos,
        criado em 2016. com um longo histórico de suporte e desenvolvimento de inovação
        social, ele atua como uma rede que ajuda líderes e apoiadores em ações que
        promovem o acesso a educação de qualidade, redução de desigualdade e bem-estar
        coletivo, atuando em projetos próprios ou na assessoria de gestão para OSCs e
        iniciativas sociais independentes alcançarem mais impacto.
      </S.BackText>
      <S.BackText>
        <strong>Alguns destaques são o Vai Na Web -</strong>
        Programa de ensino gratuito de programação
        digital avançada para jovens de 16-29 anos, moradores de favela.
      </S.BackText>
      <S.BackText>
        <strong>Estúdio Vai Na Web -</strong>
        Centro de formação continuada onde os estudantes aperfeiçoam
        seus conhecimentos técnicos em programação e suas habilidades profissionais para
        atuação no mercado de trabalho.
      </S.BackText>
      <S.BackText>
        <strong>StartupIN Favelas -</strong> 
        Um imersão empreendedora (onde as mais sofisticadas técnicas
        de empreendedorismo são ensinadas) e um concurso de ideias para os
        empreendedores de favela.
      </S.BackText>
    </Layout>
  );
}
  
export default Directors;
  