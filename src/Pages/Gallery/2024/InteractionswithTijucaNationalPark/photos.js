import Photos from '../../../../components/Gallery';
import {
  Aprovacao2024,
  Aprovacao2024One,
  Aprovacao2024Two,
  Aprovacao2024Three,
  Aprovacao2024Four,
  Aprovacao2024Five,
  Aprovacao2024Six,
  Aprovacao2024Seven,
  Aprovacao2024Eight,
  Aprovacao2024Nine,
  Aprovacao2024Ten,
  Aprovacao2024Eleven,
  Aprovacao2024Twelve,
} from '../../../../assets';

function PhotosEdictRefinementSeminar() {
  const listPhotos = [
    {
      id: 0,
      type: '',
      name: '',
      photos: [
        {
          img: Aprovacao2024,
          type: '',
        },
        {
          img: Aprovacao2024One,
          type: '',
        },
        {
          img: Aprovacao2024Two,
          type: '',
        },
        {
          img: Aprovacao2024Three,
          type: '',
        },
        {
          img: Aprovacao2024Four,
          type: '',
        },
        {
          img: Aprovacao2024Five,
          type: '',
        },
        {
          img: Aprovacao2024Six,
          type: '',
        },
        {
          img: Aprovacao2024Seven,
          type: '',
        },
        {
          img: Aprovacao2024Eight,
          type: '',
        },
        {
          img: Aprovacao2024Nine,
          type: '',
        },
        {
          img: Aprovacao2024Ten,
          type: '',
        },
        {
          img: Aprovacao2024Eleven,
          type: '',
        },
        {
          img: Aprovacao2024Twelve,
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
