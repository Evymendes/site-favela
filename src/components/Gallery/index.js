import React, { useState } from 'react';
import * as S from './styles';
import ImageSlide from './slide/index';

function Photos({ title, list }) {
  const [showSlide, setShowSlide] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);

  const openSlide = (images) => {
    setCurrentImages(images);
    setShowSlide(true);
  };

  const closeSlide = () => {
    setShowSlide(false);
    setCurrentImages([]);
  };

  return (
    <>
      {title && <S.BackText>{title}</S.BackText>}

      <S.ContainerPhoto>
        {list.map((item) => (
          <React.Fragment key={item.name}>
            <S.BackText subtitle>{item.name}</S.BackText>
            <S.ContentPhoto>
              {item?.photos?.map((image, index) => (
                <S.FigureImG key={index} onClick={() => openSlide(item.photos)}>
                  <S.Img src={image.img} alt='' align="left" type={image.type} />
                </S.FigureImG>
              ))}
            </S.ContentPhoto>
          </React.Fragment>
        ))}
      </S.ContainerPhoto>

      {showSlide && (
        <ImageSlide images={currentImages} onClose={closeSlide} />
      )}
    </>
  );
}

export default Photos;