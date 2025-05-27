import Layout from '../../../Layout';

import * as S from './styles';
import useScrollToTop from '../../../../utils/useScrollToTop';

function RegisterOfEvents() {
  useScrollToTop();
  return (
    <Layout>
      <h2>
        Registro dos Eventos
      </h2>
      <S.BackText>
        Em 2024, o Programa favela Parque uniu atividades, eventos e parceiros para criar uma série de eventos de temas variados e impactos distintos relevantes para o cotidiano de cada uma das comunidades.
      </S.BackText>

      <S.BackText>
        No <span>Morro dos Prazeres</span> os destaques foram a:
      </S.BackText>
      <S.Subtitle>
        Campanha de Vacinação no Morro dos Prazeres 
      </S.Subtitle>
      {/* Aqui vai o texto e a Galeria */}
      <S.Subtitle>
        Mostras de Empregabilidade: eventos de sucesso!
      </S.Subtitle>
      <S.BackText>
        Dezenas e dezenas de jovens e adultos do Morro dos Prazeres, Cerro-Corá, Guararapes, Júlio Otoni, Coroado e Fallet/Fogueteiro trouxeram seus currículos e se registraram junto a empresas como o Hotel de Santa Teresa e o Grupo Cataratas (acesso de van para o Cristo/BioParque e AquaRio). Também puderam acessar vagas de Jovem Aprendiz e Qualificação profissional com o CIEE, Fundação MUDES, ISBET, Estácio de Sá e SESI Firjan entre outros, em três edições realizadas ao longo de 2024.
      </S.BackText>
      <S.BackText>
        A Mostra de Empregabilidade é uma iniciativa do Instituto Precisa Ser, realizada em parceria com o Programa Favela Parque, a Associação de Moradores dos Prazeres (SAMP) e os RHs convidados.
      </S.BackText>
      {/* Aqui vai o texto e a Galeria */}

      <S.BackText>
        No <span>Cerro-Corá</span>, o tema foi o Combate à Fome, quando os projetos do Cerro-Corá se juntaram nesta corrente de solidariedade para fazer uma apresentação à comunidade que organiza ação solidária, informação, conhecimento e muita diversão.
      </S.BackText>

      <S.BackText>
        Já nos <span>Guararapes</span>...
      </S.BackText>
    </Layout>
  );
}

export default RegisterOfEvents;