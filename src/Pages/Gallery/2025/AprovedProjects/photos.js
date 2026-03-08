import Photos from '../../../../components/Gallery';
import {
  Aprovacao2025,
  Aprovacao2025One,
  Aprovacao2025Two,
  Aprovacao2025Three,
  Aprovacao2025Four,
  Aprovacao2025Five,
  Aprovacao2025Six,
  Aprovacao2025Seven,
  Aprovacao2025Eight,
  Aprovacao2025Nine,
} from '../../../../assets';

function PhotosEdictRefinementSeminar() {
  const listPhotos = [
    {
      id: 0,
      type: '',
      name: '',
      photos: [
        {
          img: Aprovacao2025,
          type: '',
        },
        {
          img: Aprovacao2025One,
          type: '',
        },
        {
          img: Aprovacao2025Two,
          type: '',
        },
        {
          img: Aprovacao2025Three,
          type: '',
        },
        {
          img: Aprovacao2025Four,
          type: '',
        },
        {
          img: Aprovacao2025Five,
          type: '',
        },
        {
          img: Aprovacao2025Six,
          type: '',
        },
        {
          img: Aprovacao2025Seven,
          type: '',
        },
        {
          img: Aprovacao2025Eight,
          type: '',
        },
        {
          img: Aprovacao2025Nine,
          type: '',
        },
      ]
    }
  ];

  return (
    <Photos
      list={listPhotos}
    />
  );
}

export default PhotosEdictRefinementSeminar;
