import Layout from '../../Pages/Layout';

import * as S from './styles';

function Photos({title, list}) {

  return (
    <>
      <S.BackText>
        {title}
      </S.BackText>
     
      <S.ContainerPhoto>
        {list.map(i => (
          <>
            <S.BackText subtitle>{i.name}</S.BackText>
            <S.ContentPhoto>
              {i?.photos?.map(imagem => (
                <S.Img src={imagem.img} alt='' align="left" type={imagem.type} />
                ))}
            </S.ContentPhoto>
          </>
        ))}
      </S.ContainerPhoto>
      </>
  );
}
  
export default Photos;
  