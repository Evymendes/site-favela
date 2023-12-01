import React, { useState } from 'react';
import styled from 'styled-components';

const ImageSlideContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const SlideImage = styled.img`
  max-width: 90%;
  max-height: 90%;

  @media (max-width: 768px) {
    max-width: 80%;
  }

  @media (max-width: 576px) {
    max-width: 70%;
  }
`;

const SlideArrowLeft = styled.div`
  position: absolute;
  top: 50%;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  user-select: none;
  left: 20px;
`;

const SlideArrow = styled.div`
  position: absolute;
  top: 50%;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  user-select: none;
  right: 20px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  user-select: none;
`;

function ImageSlide({ images, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <ImageSlideContainer>
      <CloseButton onClick={onClose}>X</CloseButton>
      <SlideArrowLeft className='leftArrow' onClick={handlePrev}><i class='bx bx-left-arrow-circle'></i></SlideArrowLeft>
      <SlideImage src={images[currentImageIndex].img} alt="" />
      <SlideArrow onClick={handleNext}><i class='bx bx-right-arrow-circle'></i></SlideArrow>
    </ImageSlideContainer>
  );
}

export default ImageSlide;
